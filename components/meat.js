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
        <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
        </div>`
    }
    utilities.printToDom('meatType', meatDomString)
};

const getSelectedMeats = () => {
    const selectedMeats = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for (let j = 0; j < meatCheckboxes.length; j++) {
        for (let k = 0; k < meats.length; k++) {
            if (meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id) {

            selectedMeats.push(meats[k]);
        }
    }
    }
    console.log(selectedMeats);
    return selectedMeats;
};

export default { meatBuilder, getSelectedMeats };