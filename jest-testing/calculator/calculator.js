const add = (a,b) => a + b;
const sub = (a,b) => a - b;

const multiply = (...args) => {
    let total = 1;
    for (let i = 0; i < args.length; i++){
        total *= args[i]
    }
    return total;
}

const divide = (a,b) => Math.round((a/b) * 100) / 100;


module.exports = {
    add,
    sub,
    multiply,
    divide
}