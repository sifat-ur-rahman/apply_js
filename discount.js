// 1.if ticket numbers is less then 100,per ticket price 100
// 1.if ticket numbers is more then 100 but less then 200.First 100 tickets will be 100 per ticket rest tickets will be 90 taka pre price
// 1.if you purchase more then 200 tickets
// first 100---->100tk
// 101-200----->90tk
// 200+----->70tk

function ticketPrice(ticketQuantity) {
    const first100Ret = 100;
    const second100Ret = 90;
    const restTicketRet = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Ret;
        return price;
    }
    else if (ticketQuantity < 200) {
        const first100Price = 100 * first100Ret;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Ret;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice
    }
    else {
        const first100Price = 100 * first100Ret;
        const second100Price = 100 * second100Ret;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRet;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost
    }
}
const price = ticketPrice(201)
console.log(price)