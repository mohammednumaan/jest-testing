let finalString = require('./reverse')

test('Test 1 : Reverse Small Words', () => {
    expect(finalString('hello')).toEqual('olleh')
})

test('Test 2 : Reverse reversed Words', () => {
    expect(finalString('olleh')).toEqual('hello')
})

