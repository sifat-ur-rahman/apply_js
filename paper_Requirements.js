// 1.book01----> 100 page
// 2.book02---> 200 page
// 3.book03----> 300 page

function paperRequirements(book01Quantity, book02Quantity, book03Quantity) {
    const perBook01Page = 100;
    const perBook02Page = 200;
    const perBook03Page = 300;

    const Book01Page = book01Quantity * perBook01Page;
    const Book02Page = book02Quantity * perBook02Page;
    const Book03Page = book03Quantity * perBook03Page;
    const totalPage = Book01Page + Book02Page + Book03Page;
    return totalPage
}

const totalPage = paperRequirements(5, 6, 2)
console.log('Total Paper : ', totalPage, 'page')