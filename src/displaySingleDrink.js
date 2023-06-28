import { hideLoading } from "./toggleLoading.js";
import get from './getElement.js'

const displayDrink = (drink) => {
    hideLoading()
    console.log(drink);
}

export default displayDrink