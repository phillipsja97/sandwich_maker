import utilities from '../helpers/utilities.js'

const bread = [
    {
    name: 'White bread',
    id: 'bread1',
    price: 200,
    },
    {
    name: 'Wheat bread',
    id: 'bread2',
    price: 250,
    },
    {
    name: 'Sourdough bread',
    id: 'bread3',
    price: 300,
    },
    {
    name: 'Rye bread',
    id: 'bread4',
    price: 250,
    },
];

const breadBuilder = () => {
    let domString = '';
    for (let i = 0; i < bread.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${bread[i].id}">
        <label class="form-check-label" for="${bread[i].id}">${bread[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('breadType', domString);
};

export default { breadBuilder };