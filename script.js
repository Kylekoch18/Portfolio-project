/*
1. ask for a first name and last name separately
2.if either is blank, continually re-ask for the name if person does not enter one.
3. inject name as a <p> inside #greeting.
*/
let fname = prompt('What is your first name?');
let lname = prompt('what is your last name?');

while(!fname || !lname){
    fname = prompt('What is your first name?');
    lname = prompt('What is your last name?');
}







document.querySelector('#greeting').textContent = `<p>Hello, ${fname} ${lname}</p>`;



