function analyzeArray(array){

    const sum = array.reduce((total, elements) => {
        return total + elements;
    });

    const average = sum/array.length; 

    const min = Math.min(...array)
    const max = Math.max(...array)

    const analyzedArrayObject = {
        average : average,
        sum : sum,
        min : min,
        max : max,
        length : array.length
    };
    return analyzedArrayObject;
}

module.exports = analyzeArray;