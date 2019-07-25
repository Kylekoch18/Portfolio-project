import Navigation from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';

<<<<<<< HEAD
const states = {
  home: {
    title: "This is the page Title!"
  },
  about: {
    title: "About Page"
  },
  contact: {
    title: "Contact"
  }
};

function render(state) {
  document.querySelector("#root").innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;
=======
const state = {
    'title': 'This is the page Title!'
>>>>>>> parent of 4244eaf... Re-render the page with the correct title based on a click event
}

// to render a page. we pass in a piece of state
render(states.home);

//the elementss will not exist until page is rendered
const navItems = document.querySelectorAll("nav > ul > li:not(.dropdown)");

<<<<<<< HEAD
navItems.forEach(function(navItem) {
  navItem.addEventListener('click', function() {
    event.preventDefault();
    render(states[event.target.textContent.toLowerCase()]);
  });
});


/*
//i will run from 0 until 3
while (i < navItems.length) {
  //use the value of i as an index to access the navitem
  navItems[i].addEventListener(
    "click",

    //add this callback fxn to each of the navItems
    function clickHandler(event) {
      event.preventDefault();

      const clickedItems = event.target.textContent;
      const clicked = clickedItems.toLowerCase();

      render(states[event.target.textContent.toLowerCase()]);
      // Developers Note: render(states[event.target.textContent.toLowerCase()]);
    }
  );
  i++;
}
*/
=======
document.querySelector('#root').innerHTML = `
${Navigation()}
${Header(state)}
${Main()}
${Footer()}
`;

console.log(Navigation, Header, Main, Footer);
>>>>>>> parent of 4244eaf... Re-render the page with the correct title based on a click event
