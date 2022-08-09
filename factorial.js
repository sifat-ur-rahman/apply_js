function factorial(Number) {
    let result = 1;
    for (let i = 1; i <= Number; i++) {
        result = result * i;
    }
    return result;

}
const result = factorial(5)
console.log(result)