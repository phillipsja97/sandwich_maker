import utilities from '../helpers/utilities.js'

const condiments = [
    {
    name: 'Mustard',
    id: 'condiment1',
    price: 50,
    },
    {
    name: 'Mayo',
    id: 'condiment2',
    price: 50,
    },
    {
    name: 'Sandwich-Spread/Mayo',
    id: 'condiment3',
    price: 75,
    },
    {
    name: 'Oil and Vinegar',
    id: 'condiment4',
    price: 25,
    },
];

const condimentBuilder = () => {
    let condimentDomString = '';
    for (let i = 0; i < condiments.length; i++) {
        condimentDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${condiments[i].id}">
        <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('condimentsType', condimentDomString);
};

export default { condimentBuilder };