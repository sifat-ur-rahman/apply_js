// 1.chair----> 3cft
// 2.table---> 10cft
// 3.bed----> 50cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood
}

const totalWood = woodCalculator(3, 2, 1)
console.log('total wood required: ', totalWood, 'cft')