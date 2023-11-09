const mapArrToStrings = require('./mapArrToStrings');


describe('mapArrToStrings', () => {
    test('only integers', () => {
        expect(mapArrToStrings([1, 4, 5])).toEqual(['1', '4', '5']);
    })
    test('with other elements', () => {
        expect(mapArrToStrings([1, 4, null, undefined, 'hello', 35.5, 5])).toEqual(['1', '4', '5']);
    })
    test('empty arr', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('not same array', () => {
        expect(mapArrToStrings([1, 4, 5])).not.toEqual([1, 4, 5]);
    })
})
