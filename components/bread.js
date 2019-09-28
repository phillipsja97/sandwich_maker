import utilities from '../helpers/utilities.js'

const bread = [
    {
    name: 'White',
    id: 'bread1',
    price: 200,
    },
    {
    name: 'Wheat',
    id: 'bread2',
    price: 250,
    },
    {
    name: 'Sourdough',
    id: 'bread3',
    price: 300,
    },
    {
    name: 'Rye',
    id: 'bread4',
    price: 250,
    },
];

const getSelectedBreads = () => {
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let j = 0; j < breadCheckboxes.length; j++) {
        for (let k = 0; k < bread.length; k++) {
            if (breadCheckboxes[j].checked && breadCheckboxes[j].id === bread[k].id) {

            selectedBreads.push(bread[k]);
        }
    }
    }
    console.log(selectedBreads);
    return selectedBreads;
};

const breadBuilder = () => {
    let domString = '';
    for (let i = 0; i < bread.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${bread[i].id}">
        <label class="form-check-label" for="${bread[i].id}">${bread[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('breadType', domString);
};

export default { breadBuilder, getSelectedBreads };