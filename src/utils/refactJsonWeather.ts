import { cardCodeToText }    from "./cardCodeToText";
import { weatherCodeToText } from "./weatherCodeToText";

function convertDateTime(input: string): { time: string, date: string, day: string } {
    const monthNumberic = parseInt(input.slice(4, 6), 10);
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ][monthNumberic - 1];

    const time = input.slice(-4);
    const date = input.slice(6, 8) + '-' + input.slice(4, 6) + '-' + input.slice(0, 4);
    const day = input.slice(6, 8) + ' ' + months;

    return { time: time.slice(0, 2) + ':' + time.slice(2), date: date, day: day };
}

export const refactJsonWeather = (weathers: any) => {
    let result: { issue?: any, areas?: any } = {};

    for (const key in weathers.data.forecast) {
        if (key === 'issue') {
            const issue: { [key: string]: any } = {};

            for (const issueKey in weathers.data.forecast.issue) {
                issue[issueKey] = weathers.data.forecast.issue[issueKey]['_text'];
            }

            result['issue'] = issue;

            continue;
        }

        if (key === 'area') {
            const areas = weathers.data.forecast.area.map((area: any, indexArea: number) => {
                const params = weathers.data.forecast.area[indexArea].parameter?.map((param: any, indexParam: number) => {
                    const  times = weathers.data.forecast.area[indexArea].parameter[indexParam].timerange?.map((timerange: any) => {
                        const attr = param._attributes.id
                        
                        if (attr === 't' || attr === 'tmax' || attr === 'tmin') {
                            const celcius = timerange.value[0]._text;
                            const fahrenheit = timerange.value[1]._text;
            
                            return {
                                ...timerange._attributes,
                                celcius: `${celcius} C`,
                                fahrenheit: `${fahrenheit} F`,
                            };
                        }

                        if (attr === 'ws') {
                            const kt = timerange.value[0]._text;
                            const mph = timerange.value[1]._text;
                            const kph = timerange.value[2]._text;
                            const ms = timerange.value[3]._text;

                            return {
                                ...timerange._attributes,
                                kt,
                                mph,
                                kph,
                                ms,
                            };
                        }

                        if (attr === 'wd') {
                            const deg = timerange.value[0]._text;
                            const card = timerange.value[1]._text;
                            const sexa = timerange.value[2]._text;

                            return {
                                ...timerange._attributes,
                                deg,
                                card: `${card} (${cardCodeToText(card)})`,
                                sexa,
                            };
                        }

                        if (attr === 'hu' || attr === 'humin' || attr === 'humax') {
                            return {
                                ...timerange._attributes,
                                value: `${timerange.value._text} ${timerange.value._attributes.unit}`,
                            };
                        }

                        const koversi = convertDateTime(timerange._attributes.datetime);

                        return {
                            ...timerange._attributes,
                            times: `${koversi.time}`,
                            fulldate: `${koversi.date}`,
                            date: `${koversi.day}`,
                            code: `${timerange.value._text}`,
                            name: weatherCodeToText(timerange.value._text),
                        };
                    });

                    return {
                        ...param._attributes,
                        times,
                    };
                });

                return {
                    ...area._attributes,
                    params,
                };
            });
            result['areas'] = areas;
        }
    }
    
    return result;
}