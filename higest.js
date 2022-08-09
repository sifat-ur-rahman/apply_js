const phones = [
    { name: 'samsung', camera: 12, price: 30000, color: 'slver' },
    { name: 'walton', camera: 10, price: 20000, color: 'slver' },
    { name: 'oppo', camera: 13, price: 22000, color: 'slver' },
    { name: 'mi', camera: 14, price: 25000, color: 'slver' },
    { name: 'iphone', camera: 15, price: 50000, color: 'slver' }
]
function higestPhone(phone) {
    let higest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > higest.camera) {
            higest = phone;
        }
    }
    return higest;

}
const mySelection = higestPhone(phones);
console.log(mySelection)