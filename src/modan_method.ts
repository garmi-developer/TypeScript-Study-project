// const add = (a: number, b: number) => a + b;

// console.log(add(2, 5));

const printOutput: (output: string | number) => void = (output) => {
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
// ポイントのコピーではなくオブジェクトのデータを展開する
const copiedPerson = {
    ...person,
};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(1, 2, 3, 4, 5);

console.log(addedNumbers);

// 一個ずつ書くと行数が増えて大変
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// hobby1 に１つ目 hobby2に２つ目の要素が入る、残りをremainingHobbies
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// 取り出したいオブジェクト名と一致した名前で取り出す
// 名前を上書きしたい場合はコロンを書く
const { firstName: userName, age } = person;

console.log(userName, age, person);
