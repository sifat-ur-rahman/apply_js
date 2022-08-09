const shoppingCard = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3200, quantity: 1 },
    { name: 'belt', price: 300, quantity: 4 },
]
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal
    }
    return sum
}

const expens = totalCost(shoppingCard);
console.log('Total Cost:', expens)