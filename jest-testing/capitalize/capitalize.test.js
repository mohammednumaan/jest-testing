let finalString = require('./capitalize')

test('Test 1 : Small Letters', () => { 
    expect(finalString('hello')).toEqual('Hello')
})

test('Test 2 : Capital Letters', () => { 
    expect(finalString('hELLO')).toEqual('HELLO')
})

test('Test 3 : Random Capital Letters', () => { 
    expect(finalString('hEllO')).toEqual('HEllO')
})