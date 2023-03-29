"use strict";
;
const icecreame = {
    small: { price: 10 },
    big: {
        price: 25,
        topings: {
            chocolate: 5,
            caramel: 6,
            berry: 10,
        },
    },
    marshmalow: { price: 5 },
};
function chooseToppings() {
    const toppings = ["chocolate", "caramel", "berry"];
    let selectedToppings = [];
    while (selectedToppings.length === 0) {
        const input = prompt(`Select toppings (${toppings.join(", ")}), separated by commas`);
        if (!input) {
            break;
        }
        selectedToppings = input.split(',').map(s => s.trim());
        const invalidToppings = selectedToppings.filter(t => !toppings.includes(t));
        if (invalidToppings.length > 0) {
            alert(`Invalid toppings ${invalidToppings.join(', ')}`);
            selectedToppings = [];
        }
    }
    if (selectedToppings.length === 0) {
        const defaultTopping = toppings[0];
        alert(`You must choose one of the toppings. Available: ${toppings.join(', ')}. Using default topping: ${defaultTopping}`);
        selectedToppings.push(defaultTopping);
    }
    return selectedToppings;
}
function buyicecreame() {
    const toppingsChoose = ["chocolate", "caramel", "berry"];
    const input = prompt("Select ice cream size (small, big) as 'small' | 'big'");
    if (!input) {
        return;
    }
    const size = input.toLowerCase();
    if (!["small", "big"].includes(size)) {
        alert(`Invalid size ${size}`);
        return;
    }
    let cost = icecreame[size].price;
    //console.log(cost);
    if (size === 'big') {
        const toppings = chooseToppings();
        if (toppings.length > 0) {
            toppings.forEach(topping => {
                cost += icecreame[size].topings[topping];
            });
        }
        if (toppings.length === 0) {
            alert(`You must choose one of the toppings. Available: ${toppingsChoose.join(', ')}`);
            toppings.push(...chooseToppings());
        }
    }
    const hasMarshmalow = confirm("Add marshmalow (+5 UAH)?");
    if (hasMarshmalow) {
        cost += icecreame.marshmalow.price;
    }
    alert(`Total price: ${cost} UAH`);
}
