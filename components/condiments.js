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

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentsCheckboxes = document.getElementsByClassName('condiments');
    for (let j = 0; j < condimentsCheckboxes.length; j++) {
        for (let k = 0; k < condiments.length; k++) {
            if (condimentsCheckboxes[j].checked && condimentsCheckboxes[j].id === condiments[k].id) {

            selectedCondiments.push(condiments[k]);
        }
    }
    }
    console.log(selectedCondiments);
    return selectedCondiments;
};

const condimentBuilder = () => {
    let condimentDomString = '';
    for (let i = 0; i < condiments.length; i++) {
        condimentDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiments" id="${condiments[i].id}">
        <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('condimentsType', condimentDomString);
};

export default { condimentBuilder, getSelectedCondiments };