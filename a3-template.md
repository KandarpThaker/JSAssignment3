# Assignment 3

## Purpose

This vanilla JavaScript web app displays various daily menus which can be viewed by clicking either the next or previous buttons.  

![Image of app](app.JPG)

## Concepts Learned

To create this "Bun on the Run" menu app the following JavaScript concepts were used:
- variables let vs const
- functions
- EventListener
- json file
- _______________
- _______________
- _______________
- _______________
- _______________
- _______________

## How I made the web app

1. First I defined a const called menus and assigned it to be an empty array
    ```js
    const menus = []
    ```
    The reason why I did that is because the menus array will eventually be assigned an array of objects where each object represents a daily menu, complete with menu items and prices.

1. Next I declared page variable and assigned 0 to it
    ```js
    let page = 0;
    ```
    The reason why I did that is because I used it to display the menus. I incremeted it by 1 and using that i fatched the data from the array.
    

1. Next I defined all querySelectors
    ```js
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
    ```
    The reason why I did that is because i need to connect the variables of JavaScript to HTML's varible.

1. Next I defined a display funtion
    ```js
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
    ```
    This function displays the current menu.  For exammple, it displays the menu title, soup,salad,lighterFare,entree and their prices accoring menu

1. Next I defined a function called getJson which will fetch our menus data in JSON format
    ```js
    async function getMenu() {
  const res = await fetch('https://gist.githubusercontent.com/KandarpThaker/632abb156d54e00ca918599e594edeec/raw/1eaa236c12a0a65718cc7eb83f710f4a81e36413/menu.json');
  const data = await res.json();
  menu.push(...data);
  display();
}
    ```
    First I defined a constant called res which will be assigned by the gist link of my menu.json and this will fetch the json form of the data.
    
    Next I defined a const called data which is assigned by the JSON data.

    Next I inserted that entire array of objects into our menus array by pushing the data in the form of the JSON  

    Next I called the function display to display our current menu passing in the argument of our first menu in our array 

1.  Next I defined a function called prev which takes no parameter but decrements our currentIndex by 1 then calls our display function
    ```js
    function prev() {
        if(page === 0){
                page = menu.length - 1;
            }
            else{
              page = page - 1;
            }
             display();
    }
    ```
    The reason I'm manipulating the value of page is when menu 1 is displaying and user press the previous button it should display the last page.

1.  In similar fashion, I also created a function called next with similar logic.
    ```js
    function next() {
        if(page === menu.length-1){
                page = 0;
            }
            else{
              page = page + 1;
            }
             display();
    }
    ```

1.  Next I added some click event listeners to both next and previous buttons
    ```js
    lClick.addEventListener('click',previous);
    rClick.addEventListener('click',next);
    ```
    The reason for adding click event handlers is so that when i press either next or previous it will listen the click and run the associated function


# Reflection
## What is the hardest part of creating this web app?
- Object

## What remaining JS concepts are still kind of foggy?
- Object

## Deck of cards API (remnant of Assignment 4)
Given the documentation listed here: https://deckofcardsapi.com/ it lists 2 APIs/REST endpoints `Shuffle the Cards` and `Draw a card`.  What would you need to do to draw 1 card?
- ________________________________________

