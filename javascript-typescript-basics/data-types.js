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
console.log(`----------- OBJECT SECTION BEGINS ----------- `);

/**
 * This is an empty object.
 */
const emptyObject = {};
console.log(emptyObject);

const meeka = {
    name: 'meeka the dog',
    age: 10,
    animal: 'dog',
    breed: 'Rottweiler'
};
console.log(meeka);
console.log(meeka.age);

//----- EDITING OBJECTS -----//
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

//----- NESTED OBJECTS -----//
const pets = {
    kyra: {
        name: 'kyra',
        age: 15,
        animal: 'cat',
        color: 'black'
    },
    // Shorthand object assignment
    meeka
};
console.log(pets);

//----- GETTING KEYS FROM OBJECTS -----//
console.log(Object.keys(nissan));

const petsKeys = Object.keys(pets);
console.log(petsKeys);

//----- GETTING VALUES FROM OBJECTS -----//
console.log(Object.values(nissan));

const petsValues = Object.values(pets);
console.log(petsValues);

//----- GETTING FULL ENTRIES FROM OBJECTS -----//
const nissanEntries = Object.entries(nissan);
console.log(nissanEntries);

const nissanLastIndex = nissanEntries.length - 1;

const nissanLastKeyValPair = nissanEntries[nissanLastIndex];
console.log(nissanLastKeyValPair);

//-- Object destructuring --/

// const bmpjs = require('bmp-js');
// const decode = bmpjs.decode;
//
// module.exports = {
//     decode: () => console.log(`Some function here`);
//     // ..
// };

// const dog = {
//     name: 'Meeka',
//     age: 11
// };

// const {name} = dog;
// // const name = dog.name;

// const {name: meekaName} = dog;

//-------- Array data type --------
const emptyArray = [];
console.log(emptyArray);

const fruit = ['apple', 'orange', 'pear'];
console.log(fruit);

const firstFruit = fruit[0];
console.log(firstFruit);

const magicNumbers = [22, 77, 44, 14, 25, 97, 6010];
console.log(magicNumbers);

const cars = [{brand: 'Dodge', model: 'Charger', year: 2020, color: 'black'}, nissan];

console.log(cars);

//----- Getting length of list -----//
console.log(cars.length);

//----- Removing item from list -----//
cars.pop();
console.log(cars);

//----- Adding item to end of list -----//
cars.push(22);
console.log(cars);

//----- Joining/merging arrays -----//
const normalFruit = ['apple', 'orange', 'pear'];
const weirdFruit = ['starfruit', 'lychee', 'dragonfruit'];
const alternateFruit = ['plum', 'peach', 'tomato'];

const allFruit = [...normalFruit, ...weirdFruit, ...alternateFruit];
console.log(allFruit);

const fruitArrays = [normalFruit, weirdFruit];
console.log(fruitArrays);

// /*------------------------------------------- MATRICES -------------------------------------------*/
// They don't really exist in Javascript - they're just nested arrays.

// A real-life "matrix" (sort of, imaging array of 2 arrays):
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
const logName = nameArg => {
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

//---- Factory functions -----//

// Factory function
const buildFullName = (firstName, lastName) => {
    const fullName = {
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`
    };
    return fullName;
};

const jDoe = buildFullName('John', 'Doe');
console.log(jDoe);

const johnnyAppleseed = buildFullName('Johnny', 'Appleseed');
console.log(johnnyAppleseed);
console.log(jDoe);

jDoe.firstName = 'Jack';
console.log(jDoe);

//----- COMPLEX FACTORY FUNCTIONS -----//
/**
 * Factory function - makes mutable object with functions.
 */
const buildPerson = (firstName, lastName, initialAge) => {
    const personsData = {age: initialAge};

    return {
        firstName: firstName,
        lastName: lastName,
        haveBirthday: () => {
            personsData.age = personsData.age + 1;
        },
        setAge: age => {
            personsData.age = age;
        },
        getAge: () => personsData.age
    };
};

const jimBob = buildPerson(`jim`, `bob`, 28);
console.log(jimBob);
console.log(jimBob.getAge());

jimBob.haveBirthday();
console.log(jimBob.getAge());

jimBob.setAge(50);
console.log(jimBob.getAge());

const janeNotdoe = buildPerson('Jane', 'Notdoe', 30);
console.log(janeNotdoe.lastName);
janeNotdoe.haveBirthday();
janeNotdoe.haveBirthday();
janeNotdoe.haveBirthday();
console.log(janeNotdoe.getAge());

/*------------------------------------------ RECURSION -------------------------------------------*/
const firstDoubledValAfter10 = value => {
    if (value > 10) return value;
    const newValue = value * 2;
    return firstDoubledValAfter10(newValue);
};

const totalAfterRecursion = firstDoubledValAfter10(1);
console.log(`TOTAL AFTER RECURSION:`, totalAfterRecursion);

// // TODO complete recursion example.

// const fileSystem = [
//     {bin: [
//         // File example
//         'grep',
//         // Directory example
//         {java: [
//             'dmachine',
//             'jar',
//             'vmachine',
//         ]}
//     ]},
//     {sbin: [
//         'awk',
//         'node'
//     ]},
// ];

// /bin/grep
// /bin/java/dmachine
// /bin/java/jar
// /bin/java/vmachine
// /sbin/awk
// /sbin/node

// const treewalker = (curFileSystem) => {
//     if (typeof curFileSystem === 'object' && curFileSystem !== null) {
//         Object.keys(curFileSystem).forEach(curLoc => {
//             return treewalker(curLoc);
//         });
//     }
//     if (Array.isArray(curFileSystem)) {
//         return treewalker(curFileSystem, curPath, matchFileName);
//     }
// };

// // treewalker(fileSystem,)

// //-------- null data type --------
// let nullValue = null;
// console.log(nullValue);

// //-------- undefined data type --------
// // OK I guess, but not the best
// let undefinedValue;
// console.log(undefinedValue);

// // Probably don't do this
// let undefinedValue2 = undefined;
// console.log(undefinedValue2);

// // DON'T FUCKING DO THIS, SERIOUSLY, DON'T
// // let undefined = 'NOT UNDEFINED ANYMORE!';
// // console.log(undefined);

// //-------- boolean data type --------
// const trueVal = true;
// const falseVal = false;
// console.log(trueVal);
// console.log(falseVal);

// const orangeFruit = {
//     color: 'orange',
//     ageInMonths: 1,
//     isPeeled: false
// };
// console.log(`orange state before peeling:`, orangeFruit);

// orangeFruit.isPeeled = true;
// console.log(`orange state after peeling:`, orangeFruit);

// /*-------------------------- FIRST-CLASS FUNCTIONS ---------------------------*/
// // Basic first-class function example
// const runner = (cb) => {
//     // cb is: () => {
//     //    console.log('YOOOOOOOOO!!!!');
//     // }
//     // ...in the below example
//     cb();
// };

// runner(() => {
//     console.log('YOOOOOOOOO!!!!');
// });

// // ---------- Another first-class function example ---------
// const run3Times = (cb) => {
//     // cb is: () => {
//     //    console.log('Doesn't matter');
//     // }
//     // ...in the below example
//     cb();
//     cb();
//     cb();
// };

// run3Times(() => {
//     console.log(`Doesn't matter`);
// });
// // Output:
// //      Doesn't matter
// //      Doesn't matter
// //      Doesn't matter

// run3Times(() => {
//     console.log(`qwerty`);
//     console.log(`uiop`);
// });
// // Output:
// //      qwerty
// //      uiop
// //      qwerty
// //      uiop
// //      qwerty
// //      uiop

// const runXTimes = (numRuns, cb) => {
//     for (let idx = 0; idx < numRuns; idx++) {
//         cb();
//     }
// };

// runXTimes(5, () => {
//     console.log('Ran!');
// });
// // Output:
// //      Ran!
// //      Ran!
// //      Ran!
// //      Ran!
// //      Ran!

// /*------------------- FIRST-CLASS FUNCTIONS WITH CLOSURES --------------------*/
// //------------------ First example ------------------
// runXTimes(3, () => {
//     let marbles = 0;
//     marbles++;
//     console.log(marbles);
// });
// // Output:
// //      1
// //      1
// //      1

// //--- Equivalent to ---
// const newFn = () => {
//     let anotherCounter = 0;
//     anotherCounter++;
//     console.log(anotherCounter);
// };

// newFn();
// newFn();
// newFn();
// //---------------------
// //---------------------------------------------------

// //----------------- Second example ------------------
// let marbles = 0;

// runXTimes(10, () => {
//     marbles++;
// });

// runXTimes(5, () => {
//     marbles++;
// });

// console.log(marbles);
// //---------------------------------------------------

// const buildMarbleBag = (startMarbles) => {
//     let content = {marbles: startMarbles};

//     return {
//         addMarble:     () => {content.marbles = content.marbles + 1;},
//         getNumMarbles: () => {return content.marbles},
//     };
// };

// const marbleBag = buildMarbleBag(5);
// marbleBag.addMarble();
// marbleBag.addMarble();

// const numMarbles = marbleBag.getNumMarbles();
// console.log(numMarbles);

// // const logOnInterval = () => {
// //     console.log(`Log every 5 seconds`);
// // };
// // setInterval(logOnInterval, 5000);

// // const logOnAnotherInterval = () => {
// //     console.log(`Log every second`);
// // };
// // setInterval(logOnAnotherInterval, 1000);

// // const setIntervalPseudocode = (callback, interval) => {
// //     while(true) {
// //         sleep(interval);
// //         callback();
// //     }
// // }

// // setInterval(() => {
// //     console.log(`Log every 2 seconds`);
// // }, 2000);

// let count = 0;

// // setInterval(() => {
// //     count--;
// //     console.log(`Log every 2 seconds - count:`, count);
// // }, 2000);

// const textConcat = (text1, text2, callback) => {
//     const fullText = `${text1}${text2}`;
//     callback(fullText);
// };

// textConcat('Hello ', 'world again', (someRandomText) => {
//     console.log(someRandomText);
// });

// const logger = (stringToLog) => {
//     console.log(`[LOG] ` + stringToLog);
// };

// textConcat('Hello ', 'world yet again', logger);

/*----------------------------------------- TYPE TESTING -----------------------------------------*/
const runTests = fn => {
    const testNum = 10;
    console.log(`Function name:`, fn.name);
    console.log(`START TESTS:`);
    console.log(`${fn.name}("I'm a string!") -- `, fn("I'm a string!"));
    console.log(`${fn.name}(10) -- `, fn(10));
    console.log(`${fn.name}(10.toString()) -- `, fn(testNum.toString()));
    console.log(`${fn.name}('') -- `, fn(''));
    console.log(`${fn.name}(0) -- `, fn(0));
    console.log(`${fn.name}(false) -- `, fn(false));
    console.log(`${fn.name}(true) -- `, fn(true));
    console.log(`${fn.name}(null) -- `, fn(null));
    console.log(`${fn.name}(Infinity) -- `, fn(Infinity));
    console.log(`${fn.name}(undefined) -- `, fn(undefined));
    console.log(`${fn.name}([]) -- `, fn([]));
    console.log(`${fn.name}([1, 2]) -- `, fn([1, 2]));
    console.log(`${fn.name}(['Eric','eats', 'poo']) -- `, fn(['Eric', 'eats', 'poo']));
    console.log(`${fn.name}({}) -- `, fn({}));
    console.log(`${fn.name}({a: 'eeeh'}) -- `, fn({a: 'eeeh'}));
    console.log(
        `${fn.name}({name: 'eric', favFood: 'poo'}) -- `,
        fn({name: 'eric', favFood: 'poo'})
    );
    console.log(`TEST ON value END TESTS\n`);
};

const isString = someVal => {
    return typeof someVal === 'string';
};

const isNumber = someVal => {
    return typeof someVal === 'number';
};

const isBoolean = someVal => {
    return typeof someVal === 'boolean';
};

const isArray = someVal => {
    return Array.isArray(someVal);
};

const isNull = someVal => {
    // Not a typo - DO NOT do typeof when comparing against null
    return someVal === null;
};

const isUndefined = someVal => {
    return typeof someVal === 'undefined';
};

const isObject = someVal => {
    return typeof someVal === 'object' && someVal !== null && !Array.isArray(someVal);
};

runTests(isString);
runTests(isNumber);
runTests(isBoolean);
runTests(isArray);
runTests(isNull);
runTests(isUndefined);
runTests(isObject);

console.log(typeof null);

/*--------------------------------------------- NaN ----------------------------------------------*/
// Causes NaN because the minus before the variable causes it to implicitly try to multiply
// the string in fruitArr at position 0 by -1, which results in "fuck knows what," so it
// displays NaN (for 'not a number')...because it's literally "not a number," so it's telling
// you you're a dumbass for trying to multiply a number by it.
console.log(`This is a template string with a NaN in it ${-fruitArr[0]}`);
// Similar to the above, but it's trying to multiple a string by +1
console.log(`This is another template string with a NaN in it ${+fruitArr[0]}`);
// The below is identical to the previous example (it's just the long form of it)
console.log(`This is another template string with a NaN in it ${1 * fruitArr[0]}`);

// In short, NaN is roughly analogous to "fuck knows"
console.log(1 / "apple");
// ...because what would you expect the prior line to output?
// Answer: "Fuck knows" (therefore NaN is what it shits out).

// /*-------------------------------------------- EXPORT --------------------------------------------*/
// module.exports = buildPerson;
