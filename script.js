const menu = [] ;



// STEP 1 - Define your page variable
var page = 0;
// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
var lClick = document.querySelector('.Left');
var rClick = document.querySelector('.Right');
var menuTitle = document.querySelector('h2');
var soup = document.querySelector('#Soup');
var salad = document.querySelector('#Salad');
var lighterFare = document.querySelector('#LighterFare');
var entree = document.querySelector('#Entree');
var soupPrice = document.querySelector('.soupPrice');
var saladPrice = document.querySelector('.saladPrice');
var lighterFarePrice = document.querySelector('.lighterFarePrice');
var entreePrice = document.querySelector('.entreePrice');


async function getMenu() {
  const res = await fetch('https://gist.githubusercontent.com/KandarpThaker/632abb156d54e00ca918599e594edeec/raw/1eaa236c12a0a65718cc7eb83f710f4a81e36413/menu.json');
  const data = await res.json();
  menu.push(...data);
  display();
}

getMenu();

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above
function display(){
  menuTitle.textContent = menu[page].title;
     soup.textContent = menu[page].soup;
     salad.textContent = menu[page].salad;
     lighterFare.textContent = menu[page].lighterFare;
     entree.textContent = menu[page].entree;
     soupPrice.textContent = menu[page].soupPrice;
     saladPrice.textContent = menu[page].saladPrice;
     lighterFarePrice.textContent = menu[page].lighterFarePrice;
     entreePrice.textContent = menu[page].entreePrice;
}


// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable
function next(){
            if(page === menu.length-1){
                page = 0;
            }
            else{
              page = page + 1;
            }
             display();
}
// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale
function previous(){
            if(page === 0){
                page = menu.length - 1;
            }
            else{
              page = page - 1;
            }
             display();
            
}
// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
lClick.addEventListener('click',previous);
rClick.addEventListener('click',next);

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
