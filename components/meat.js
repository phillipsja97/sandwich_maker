import utilities from '../helpers/utilities.js';

const meats = [
    {
    name: 'Turkey',
    id: 'meat1',
    price: 300,
    },
    {
    name: 'Ham',
    id: 'meat2',
    price: 250,
    },
    {
    name: 'Brisket',
    id: 'meat3',
    price: 350,
    },
    {
    name: 'Chicken',
    id: 'meat4',
    price: 250,
    },
];

const meatBuilder = () => {
    let meatDomString = '';
    for (let i = 0; i < meats.length; i++) {
        meatDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
        </div>`
    }
    utilities.printToDom('meatType', meatDomString)
};

export default { meatBuilder }