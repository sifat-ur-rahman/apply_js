function isPositive(numbers) {
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element >= 0) {
            newArr.push(element);
        }
        else {
            // break;
            continue;
        }
    }
    return newArr;
}

const arr = [2, 3, 5, -7, 2, 7, 5, -3, 9];
const result = isPositive(arr);
console.log(result);