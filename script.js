let money = 1500;
let amountWorkers = 1;
let menu = document.getElementsByClassName("menu")[0];

let myMenu = [
  {
    title: "Ice Cream",
    photo: "icecream.png",
    speed: 2,
    price: 300,
    isBlock: false,
    id: 1,
  },

  {
    title: "Pizza",
    photo:"icecream.png",
    speed: 5,
    price: 500,
    isBlock: false,
    id: 2,
  },

  {
    title: "Hot Dog",
    photo:"icecream.png",
    speed: 5,
    price: 400,
    isBlock: true,
    id: 3,
  },


];

function showMenu() {
  for (let i = 0; i < myMenu.length; i++) {
    menu.innerHTML += `
    <div class="menu-card">
        <img src="img/menu/${myMenu[i].photo}" alt="" class="menu-card__image">
        <h2 class="menu-card__title">${myMenu[i].title}</h2>
        <h2 class="menu-card__price">${myMenu[i].price}</h2>
        <button data-id="${myMenu[i].id}" class="buy_btn">Buy This</button>
        <h2 class="menu-card__time">${myMenu[i].speed}</h2>
    </div>
    `;
  }
}
showMenu();



let buyBtn = document.getElementsByClassName('buy_btn')

for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', function () {
    let id = buyBtn[i].dataset.id
    buyProduct(id)
  })
}



function buyProduct(id) {
  let el = findProductById(id);
  alert(el.price);

  if (el.price <= money && el.isBlock) {
    alert("buy");
    el.isBlock = false;
  } else {
    alert("Не хватает денег");
  }
}



function findProductById(id) {
  for (let i = 0; i < myMenu.length; i++) {
    if (myMenu[i].id == id) {
      return myMenu[i];
    }
  }
}
