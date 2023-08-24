const array = require('./array')

test('Test 1 : Return Valid Object', () => {

    expect(array([1,2,3,4,5])).toEqual({
        average : 3,
        sum : 15,
        min : 1,
        max : 5,
        length : 5
    })

})