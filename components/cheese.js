import utilities from '../helpers/utilities.js'

const cheese = [
    {
    name: 'Cheddar',
    id: 'cheese1',
    price: 100,
    }, 
    {
    name: 'Pepper-Jack',
    id: 'cheese2',
    price: 100,
    }, 
    {
    name: 'Swiss',
    id: 'cheese3',
    price: 100,
    }, 
    {
    name: 'Mozzarella',
    id: 'cheese4',
    price: 100,
    }, 
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for (let j = 0; j < cheeseCheckboxes.length; j++) {
        for (let k = 0; k < cheese.length; k++) {
            if (cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheese[k].id) {

            selectedCheeses.push(cheese[k]);
        }
    }
    }
    console.log(selectedCheeses);
    return selectedCheeses;
};


const cheeseBuilder = () => {
    let cheeseDomString = '';
    for (let i = 0; i < cheese.length; i++) {
        cheeseDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheese[i].id}">
        <label class="form-check-label" for=${cheese[i].id}>${cheese[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('cheeseType', cheeseDomString);
}

export default { cheeseBuilder, getSelectedCheeses };