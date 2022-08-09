const phones = [
    { name: 'samsung', camera: 12, price: 30000, color: 'slver' },
    { name: 'walton', camera: 10, price: 20000, color: 'slver' },
    { name: 'oppo', camera: 13, price: 22000, color: 'slver' },
    { name: 'mi', camera: 14, price: 25000, color: 'slver' },
    { name: 'iphone', camera: 15, price: 50000, color: 'slver' }
]
function cheapestPhone(phone) {
    let cheapst = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapst.price) {
            cheapst = phone;
        }
    }
    return cheapst;

}
const mySelection = cheapestPhone(phones);
console.log(mySelection)