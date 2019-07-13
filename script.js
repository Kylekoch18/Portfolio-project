// ************ Homework *************
// Creat a greeter function for you project that asks for a users name//
// stores that name in a variable, and then displays the //
// variable as the <H1> on the homepage //


/* 
1- create a variable
2- assigned to prompt("What is your name? ")
3- use document.querySelectors to replace the H1 on your page to the variable above  
4- Have your heading be a greeting, "Hello, ______ , Welcom to the page" Concantenate the variables and strings
*/

// let name = prompt("What is your name?");

// OLD WAY ES5 --- let fullname = fname + " " + lname;
// NEW WAY ES6 ---let fullname = `Hello, ${fname} ${lname}! Welcome!`


//const h1 = document.querySelector(`h1`)
//h1.textContent = `Hello, ${name}

const name = prompt(`What is your name?`);


const x = 3;
const dessert = 'icecream';

if(x === 3){
    console.log('3 is the lucky number');
}
else if(x === 7){
    console.log('wrong numba');
}
else {
    console.log('no sir');
}

document.querySelector(`h1`).textContent = `Hello, ${name}`;

