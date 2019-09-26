import utilities from '../helpers/utilities.js';

const veggies = [
    {
    name: 'Bell Peppers',
    id: 'veggies1',
    price: 25,
    },
    {
    name: 'Tomatoes',
    id: 'veggies2',
    price: 30,
    },
    {
    name: 'Onions',
    id: 'veggies3',
    price: 25,
    },
    {
    name: 'Pickles',
    id: 'veggies4',
    price: 25,
    },

];

const veggieBuilder = () => {
    let veggieDomString = '';
    for (let i = 0; i < veggies.length; i++) {
        veggieDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${veggies[i].id}">
        <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('veggiesType', veggieDomString);

};


export default { veggieBuilder }
