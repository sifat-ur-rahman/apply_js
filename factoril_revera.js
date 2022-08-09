function factorial(Number) {
    let result = 1;
    for (let i = Number; i >= 1; i--) {
        result = result * i;
    }
    return result;

}
const result = factorial(6)
console.log("Factorial of ", result)


