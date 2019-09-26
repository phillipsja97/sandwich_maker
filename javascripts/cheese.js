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

const cheeseBuilder = () => {
    let cheeseDomString = '';
    for (let i = 0; i < cheese.length; i++) {
        cheeseDomString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${cheese[i].id">
        <label class="form-check-label" for=${cheese[i].id}>Check me out</label>
        </div>
        `
    }
}