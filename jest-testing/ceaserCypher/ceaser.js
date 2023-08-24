function ceaser(alphabets, shiftFactor){

    return shift(alphabets, shiftFactor)

}

function shift(alphabets, shiftFactor){
    let newAlphabets = ''
    for (let i = 0; i < alphabets.length; i++){
        let newIndex = (i + shiftFactor) % alphabets.length;
        newAlphabets += alphabets[newIndex];

    }
    return newAlphabets;
}

console.log(ceaser('hello', 2))


module.exports = ceaser;