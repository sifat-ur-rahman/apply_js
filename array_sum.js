function getArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(element, sum);
    }
    return sum;
}

const myNumbers = [1, 2, 3, 4];
getArray(myNumbers)