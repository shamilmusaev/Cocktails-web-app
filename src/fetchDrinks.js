//Модуль который позволяет, фетчить напитки из cocktail api


import { showLoading, hideLoading } from "./toggleLoading.js"
const fetchDrinks = async(url) => {
    //Каждый раз когда мы фетчим напитки вызываем функцию showLoading()
    showLoading()
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default fetchDrinks