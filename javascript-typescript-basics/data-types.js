//--------- Number data type ---------
const bob = 42;
console.log(bob);

// This would fail
// bob = 2222;
// console.log(bob);

let jon = 55;
console.log(jon);

jon = 2000;
console.log(jon);

//-------- String data type --------
const steve = `yo`;
console.log(steve);

const age = 22;

// Template strings
const stevePlusAge = `${steve} is ${age}`;
console.log(stevePlusAge);

//-------- Object data type --------
const meeka = {
    name: 'meeka the dog',
    age: 10,
    breed: 'Rottweiler',
};
console.log(meeka);
console.log(meeka.age);

const nissan = {
    brand: 'Nissan',
    color: 'black',
    year: 2020,
    model: 'pathfinder'
};
console.log(nissan);
console.log(nissan.year);

nissan.color = 'orange';
console.log(nissan);

delete nissan.year;
console.log(nissan);

nissan.numberOfDoors = 4;
console.log(nissan);

console.log(Object.keys(nissan));
console.log(Object.values(nissan));
console.log(Object.entries(nissan));

//-- Object destructuring --/

// const bmpjs = require('bmp-js');
// const decode = bmpjs.decode;
//
// module.exports = {
//     decode: () => console.log(`Some function here`);
//     // ..
// };

const dog = {
    name: 'Meeka',
    age: 11
};

const {name} = dog;
// const name = dog.name;

const {name: meekaName} = dog;

//-------- Array data type --------
const fruit = [
    'apple',
    'orange',
    'pear'
];

console.log(fruit);

console.log(fruit[0]);

const magicNumbers = [22, 77, 44, 14, 25, 97, 6010];
console.log(magicNumbers);

const cars = [
    {brand: 'Dodge', model: 'Charger', year: 2020, color: 'black'},
    nissan
];

console.log(cars);
console.log(cars.length);

cars.pop();
console.log(cars);

cars.push(22);
console.log(cars);

// Joining arrays
const normalFruit = ['apple', 'orange', 'pear'];
const weirdFruit = ['starfruit', 'lychee', 'dragonfruit'];

const allFruit = [...normalFruit, ...weirdFruit];
console.log(allFruit);

/*------------------------------------------- MATRICES -------------------------------------------*/
// They don't really exist in Javascript - they're just nested arrays.

// A real-life "matrix:"
//
// Grocery list:
//      Fruit:
//          - Orange
//          - Apple
//          - Pear
//      Meat:
//          - Chicken
//          - Steak
//          - Hamburger
//      Snacks:
//          - Chips
//          - Cookies
//          - Bits & Bytes

const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(matrix);
console.log(matrix[2][1]);


//-------- Function data type --------
// Function with no arguments
const logBasicShit = () => {
    console.log('log me');
    console.log('log also me');
};

logBasicShit();

// Function with 1 argument
const logName = (nameArg) => {
    console.log(`Your name is ${nameArg}`);
};

logName('tom');

// Function with 2 arguments
const addNumbers = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

const total = addNumbers(12, 50);
console.log(total);

// JS functions are dynamically typed, so this is also valid, and works.
const text = addNumbers('hello', ' world');
console.log(text);

// Factory function
const buildFullName = (firstName, lastName) => {
    const fullName = {firstName: firstName, lastName: lastName};
    return fullName;
};

const someName = buildFullName('John', 'Doe');
console.log(someName);

someName.firstName = 'Jack';
console.log(someName);

// Factory function - makes mutable object with functions
const buildPerson = (firstName, lastName, initialAge) => {
    const personsData = {age: initialAge};

    return {
        firstName: firstName,
        lastName: lastName,
        haveBirthday: () => {
            personsData.age = personsData.age + 1;
        },
        getAge: () => {
            return personsData.age;
        }
    };
};

const jimBob = buildPerson('jim', 'bob', 28);
console.log(jimBob);

jimBob.haveBirthday();
console.log(jimBob.getAge());

console.log(jimBob.whatIAm);

const janeNotdoe = buildPerson('Jane', 'Notdoe', 30);
console.log(janeNotdoe.lastName);
janeNotdoe.haveBirthday();
janeNotdoe.haveBirthday();
janeNotdoe.haveBirthday();
console.log(janeNotdoe.getAge());

/*-------------------------- FIRST-CLASS FUNCTIONS ---------------------------*/
// Basic first-class function example
const runner = (cb) => {
    // cb is: () => {
    //    console.log('YOOOOOOOOO!!!!');
    // }
    // ...in the below example
    cb();
};

runner(() => {
    console.log('YOOOOOOOOO!!!!');
});

// ---------- Another first-class function example ---------
const run3Times = (cb) => {
    // cb is: () => {
    //    console.log('Doesn't matter');
    // }
    // ...in the below example
    cb();
    cb();
    cb();
};

run3Times(() => {
    console.log(`Doesn't matter`);
});
// Output:
//      Doesn't matter
//      Doesn't matter
//      Doesn't matter

run3Times(() => {
    console.log(`qwerty`);
    console.log(`uiop`);
});
// Output:
//      qwerty
//      uiop
//      qwerty
//      uiop
//      qwerty
//      uiop

const runXTimes = (numRuns, cb) => {
    for (let idx = 0; idx < numRuns; idx++) {
        cb();
    }
};

runXTimes(5, () => {
    console.log('Ran!');
});

// const logOnInterval = () => {
//     console.log(`Log every 5 seconds`);
// };
// setInterval(logOnInterval, 5000);

// const logOnAnotherInterval = () => {
//     console.log(`Log every second`);
// };
// setInterval(logOnAnotherInterval, 1000);

// const setIntervalPseudocode = (callback, interval) => {
//     while(true) {
//         sleep(interval);
//         callback();
//     }
// }

// setInterval(() => {
//     console.log(`Log every 2 seconds`);
// }, 2000);

let count = 0;

// setInterval(() => {
//     count--;
//     console.log(`Log every 2 seconds - count:`, count);
// }, 2000);

const textConcat = (text1, text2, callback) => {
    const fullText = `${text1}${text2}`;
    callback(fullText);
};

textConcat('Hello ', 'world again', (someRandomText) => {
    console.log(someRandomText);
});

const logger = (stringToLog) => {
    console.log(`[LOG] ` + stringToLog);
};

textConcat('Hello ', 'world yet again', logger);

/*------------------------------------------ RECURSION -------------------------------------------*/
const firstDoubledValAfter10 = (value) => {
    if (value > 10) return value;
    const newValue = value * 2;
    return firstDoubledValAfter10(newValue);
};

const totalAfterRecursion = firstDoubledValAfter10(1);

console.log(`TOTAL AFTER RECURSION:`, totalAfterRecursion);

// TODO complete recursion example.

const fileSystem = [
    {bin: [
        // File example
        'grep',
        // Directory example
        {java: [
            'dmachine',
            'jar',
            'vmachine',
        ]}
    ]},
    {sbin: [
        'awk',
        'node'
    ]},
];

//
// /bin/grep
// /bin/java/dmachine
// /bin/java/jar
// /bin/java/vmachine
// /sbin/awk
// /sbin/node
//

// const treewalker = (curFileSystem, curPath, matchFileName) => {
//     if (Array.isArray(curFileSystem)) {
//         return treewalker(curFileSystem, curPath, matchFileName);
//     }
//     if (typeof curFileSystem === 'object' && curFileSystem !== null) {
//         curFileSystem[]
//     }
// };

// treewalker(fileSystem,)

//-------- null data type --------
let nullValue = null;
console.log(nullValue);

//-------- undefined data type --------
// OK I guess, but not the best
let undefinedValue;
console.log(undefinedValue);

// Probably don't do this
let undefinedValue2 = undefined;
console.log(undefinedValue2);

// DON'T FUCKING DO THIS, SERIOUSLY, DON'T
// let undefined = 'NOT UNDEFINED ANYMORE!';
// console.log(undefined);

//-------- boolean data type --------
const trueVal = true;
const falseVal = false;
console.log(trueVal);
console.log(falseVal);

const orangeFruit = {
    color: 'orange',
    ageInMonths: 1,
    isPeeled: false
};
console.log(`orange state before peeling:`, orangeFruit);

orangeFruit.isPeeled = true;
console.log(`orange state after peeling:`, orangeFruit);

/*----------------------------------------- TYPE TESTING -----------------------------------------*/
// TODO NEXT TOPIC: type testing

/*-------------------------------------------- EXPORT --------------------------------------------*/
module.exports = buildPerson;
