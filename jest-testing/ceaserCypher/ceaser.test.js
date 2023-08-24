const ceaserCypher = require('./ceaser')

test('Test 1 : Ceaser-Cypher', () => {
    expect(ceaserCypher('hello', 1)).toEqual('elloh')
})

test('Test 2 : Ceaser-Cypher', () => {
    expect(ceaserCypher('hello', 2)).toEqual('llohe')
})