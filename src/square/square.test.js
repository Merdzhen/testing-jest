const square = require('./square');

describe('square', () => {
    // перед каждым тестом
    beforeEach(() => {
        // добавить в БД
    })
    // перед всеми тестами
    beforeAll(() => {

    })
    test('correct', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).not.toBeUndefined();
    })
    test('spyMathPow2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('spyMathPow1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0)
    })
    afterEach(() => {
        jest.clearAllMocks();
        // еще пример - удалить из БД
    })
    afterAll(() => {

    })
})
