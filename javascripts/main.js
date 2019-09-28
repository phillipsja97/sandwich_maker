import bread from '../components/bread.js';
import meat from '../components/meat.js';
import cheese from '../components/cheese.js'
import condiments from '../components/condiments.js';
import veggies from '../components/veggies.js'
import order from '../components/order.js';

const init = () => {
    bread.breadBuilder();
    meat.meatBuilder();
    cheese.cheeseBuilder();
    condiments.condimentBuilder();
    veggies.veggieBuilder();
    order.printOrderButton();
}

init();
