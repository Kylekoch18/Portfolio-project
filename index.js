import Navigation from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer";

const states = {
  'home': {
    'title': "This is the page Title!"
  },
  'about': {
    'title': "About Page"
  },
  'contact': {
    'title': "Contact"
  }
};

render(states.home);

const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

function render(state){
    document.querySelector("#root").innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;
}



let i = 0;

while(i < navItems.length) {
    navItems[i].addEventListener('click', function clickHandler(event){
event.preventDefault();

const clickedItems = event .target.textContent;
const clicked = clickedItems.toLowerCase();
    
render(states[clicked]);
});
i++;
}