const validateValue = require('./validateValue');


describe('validate value', () => {
    test('correct', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('lower border', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('higher border', () => {
        expect(validateValue(100)).toBe(true);
    })
    test('smaller', () => {
        expect(validateValue(-5)).toBe(false);
    })
    test('larger', () => {
        expect(validateValue(105)).toBe(false);
    })
})
