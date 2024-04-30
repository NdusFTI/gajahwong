const cardCode: { [key: string]: string } = {
    N: 'North',
    NNE: 'North-Northeast',
    NE: 'Northeast',
    ENE: 'East-Northeast',
    E: 'East',
    ESE: 'East-Southeast',
    SE: 'Southeast',
    SSE: 'South-Southeast',
    S: 'South',
    SSW: 'South-Southwest',
    SW: 'Southwest',
    WSW: 'West-Southwest',
    W: 'West',
    WNW: 'West-Northwest',
    NW: 'Northwest',
    NNW: 'North-Northwest',
};

export const cardCodeToText = (code: string) => {
    if (cardCode[code]) {
        return cardCode[code]
    } else {
        return 'N/A'
    }
}