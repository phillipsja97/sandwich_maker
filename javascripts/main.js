import bread from '../javascripts/bread.js';
import meat from './meat.js';
import cheese from '../javascripts/cheese.js'

const init = () => {
    bread.breadBuilder();
    meat.meatBuilder();
    cheese.cheeseBuilder();
}

init();
