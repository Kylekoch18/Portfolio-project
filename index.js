import Navigation from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';


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
}

// to render a page. we pass in a piece of state
render(states.home);

//the elementss will not exist until page is rendered
const navItems = document.querySelectorAll("nav > ul > li:not(.dropdown)");

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
