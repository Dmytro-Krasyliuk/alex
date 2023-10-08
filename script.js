let money = 1500;
let amountWorkers = 1;
let menu = document.getElementsByClassName("menu")[0];

let myMenu = [
  {
    title: "Ice Cream",
    photo: "icecream.png",
    speed: 2,
    price: 300,
    isBlock: true,
    id: 1,
  },

  {
    title: "Tea",
    photo: "",
    speed: 2,
    price: 100,
    isBlock: false,
    id: 2,
  },
];

function showMenu() {
  for (let i = 0; i < myMenu.length; i++) {
    menu.innerHTML += `
    <div class="menu-card">
        <img src="img/menu/${myMenu[i].photo}" alt="" class="menu-card__image">
        <h2 class="menu-card__title">${myMenu[i].title}</h2>
        <h2 class="menu-card__price">${myMenu[i].price}</h2>
        <h2 class="menu-card__time">${myMenu[i].speed}</h2>
    </div>
    `;
  }
}
showMenu();

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

buyProduct(1);

function findProductById(id) {
  for (let i = 0; i < myMenu.length; i++) {
    if (myMenu[i].id == id) {
      return myMenu[i];
    }
  }
}
