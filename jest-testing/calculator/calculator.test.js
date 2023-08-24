let calculator = require('./calculator')

 describe('ADD', () => {

    test('Test 1 : Add 0 and 0 ', () => {
        expect(calculator.add(0,0)).toEqual(0)
    })

    test('Test 2 : Add 10 and 15 ', () => {
        expect(calculator.add(10,15)).toEqual(25)
    })
})


describe('SUBTRACT', () => {

    test('Test 1 : Subtract 0 and 0 ', () => {
        expect(calculator.sub(0,0)).toEqual(0)
    })

    test('Test 2 : Subtract 20 and 10 ', () => {
        expect(calculator.sub(20,10)).toEqual(10)
    })

    test('Test 3 : Subtract 10 and 15 ', () => {
        expect(calculator.sub(10,15)).toEqual(-5)
    })
})


describe('MULTIPLY', () => {

    test('Test 1 : Multiply 0 and 0 ', () => {
        expect(calculator.multiply(0,0)).toEqual(0)
    })

    test('Test 2 : Multiply 5 and 2 ', () => {
        expect(calculator.multiply(5,2)).toEqual(10)
    })

    test('Test 3 : Multiply -4 and 20 ', () => {
        expect(calculator.multiply(-4,20)).toEqual(-80)
    })

    test('Test 4 : Multiply array elements ', () => {
        expect(calculator.multiply(1,2,3,4,5)).toBe(120)
    })
})

describe('DIVIDE', () => {

    test('Test 1 : Divide 2 and 0 ', () => {
        expect(calculator.divide(2,0)).toEqual(Infinity)
    })

    test('Test 2 : Divide 20 and 2 ', () => {
        expect(calculator.divide(20,2)).toEqual(10)
    })
    
    test('Test 3 : Divide 100 and 3 ', () => {
        expect(calculator.divide(100,3)).toEqual(33.33)
    })
})


