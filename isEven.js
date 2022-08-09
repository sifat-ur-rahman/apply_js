// ---------1-------

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true
    }
    else {
        return false
    }
}
const mynumber = isEven(123626666529429);
console.log(mynumber)

// ------ 2--------

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        console.log('Even')
    }
    else {
        console.log('Odd')
    }
}
isEven(1236266665294298)