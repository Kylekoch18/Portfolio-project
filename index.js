import Navigation from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';


document.querySelector('#root').innerHTML = `
${Navigation}
${Header}
${Main}
${Footer}
`;

console.log(Navigation, Header, Main, Footer);