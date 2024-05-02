import axios        from "axios";
import { xml2js }   from "xml-js";

import { 
    refactJsonWeather,
    toUpperFirstLetterWords
} from "../utils";

export const getBmkg = async (province: string, city: string) => {
    try {
        const url = `https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-${toUpperFirstLetterWords(province)}.xml`;
        const { data } = await axios.get(url);
        const weathers = xml2js(data, { compact: true });
        
        const refactoredJsonWeathers = refactJsonWeather(weathers);

        const weatherByCity = refactoredJsonWeathers.areas.find(
            (area: any) => area.description == toUpperFirstLetterWords(city, '-', ' ')
        );

        if (!weatherByCity) throw new Error('City not found');

        return weatherByCity;
    } catch (error) {
        throw new Error('City not found');
    }
};