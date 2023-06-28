//Модуль который позволяет, по нажатию на коктейль показать его id 


const setDrink = (section) => {
  section.addEventListener('click', function(e){
    // e.preventDefault()
    const id = e.target.parentElement.dataset.id
    //Local storage
    localStorage.setItem('drink', id)
  })
};

export default setDrink;
