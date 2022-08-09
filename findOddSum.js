
function getArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;

    }
    return sum;
}

function getOddNumbers(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers)
const oddNumbersSum = getArray(oddNumbers)
console.log('Odd Number Sum ', oddNumbersSum)