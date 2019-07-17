import Navigation from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';

const state = {
    'title': 'This is the page Title!'
}


document.querySelector('#root').innerHTML = `
${Navigation()}
${Header(state)}
${Main()}
${Footer()}
`;

console.log(Navigation, Header, Main, Footer);