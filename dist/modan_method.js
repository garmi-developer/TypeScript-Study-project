"use strict";
const printOutput = (output) => {
    console.log(output);
};
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Max',
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=modan_method.js.map