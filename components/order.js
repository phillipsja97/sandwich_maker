import cheese from './cheese.js'
import utilities from '../helpers/utilities.js'
import meat from './meat.js'
import bread from './bread.js'
import veggies from './veggies.js'
import condiments from './condiments.js'

const finalOrder = (items) => {
    let domString2 = '';
        domString2 += ` 
        <div class="card text-center">
        <div class="card-header">
        Your Order:
        </div>
        <div class="card-body">
        `;
        let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let unitPrice = items[i].price;
        sum += unitPrice;
        unitPrice /= 100;
        let convertedPrice = unitPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        domString2 += `
        <p>${items[i].name} ${convertedPrice}</p>
        `
        ;
    }
    sum /= 100;
    const totalPrice = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        domString2 += `
    <hr>
    <h5>Your total is ${totalPrice}</h5>
    </div>
    </div>`

    console.log(domString2);
    utilities.printToDom('finalOrder', domString2)
};



const createOrderEvent = () => {
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedBreads = bread.getSelectedBreads();
    const selectedVeggies = veggies.getSelectedVeggies();
    const selectedCondiments = condiments.getSelectedCondiments();
    const allItems = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondiments);
    finalOrder(allItems);
};

const printOrderButton = () => {
    const domString = `<button id="orderButton" type="button" class="btn btn-primary">Make Sandwich</button>`;
    utilities.printToDom('finalOrder', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };