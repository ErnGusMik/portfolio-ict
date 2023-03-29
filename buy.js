// UNFINISHED
// PLEASE IGNORE

let price = 0;

const addToPrice = (addPrice) => {
    price += addPrice;
}

const selections = [];
const addSelection = (type, selection) => {
    selections.push({type, selection});
}

const onSelect = (e, type, selection, newPrice) => {
    // if (document.querySelector(event.target.htmlFor).checked) {
    //     addSelection(type, selection);
    //     addToPrice(newPrice);
    // }
    console.log(e.target);
    console.log(e.target.htmlFor);
    console.log(selections);
    console.log(price);
}
