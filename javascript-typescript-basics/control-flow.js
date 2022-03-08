//------------------------ IF-THEN STATEMENTS ------------------------
const ericAge = 27;
const brodyAge = 28;

if (ericAge > brodyAge) {
    console.log('Eric is older than Brody');
} else if (ericAge === brodyAge) {
    console.log('Eric is the same age as Brody');
} else {
    console.log('Brody is older than Eric');
}

//----- DON'T DO THIS -----
const element = 'Na';

if (element === 'H') {
    console.log(`This element is Hydrogen`);
} else if (element === 'He') {
    console.log(`This element is Helium`);
} else if (element === 'Na') {
    console.log(`This element is Sodium`);
}

//----- DO THIS INSTEAD ----
const periodicTable = {
    H: 'Hydrogen',
    He: 'Helium',
    Na: 'Sodium',
    Mg: 'Magnesium'
    // etc.
};

const element1 = 'Mg';
console.log(`This element is ${periodicTable[element1]}`);

//------------------------ SWITCH STATEMENTS ------------------------
const fruit = 'guava';
const fruit2 = 'pear';
const fruit3 = 'pineapple';
const fruit4 = 'aeirughesirughergijo';

switch (fruit4) {
    case 'guava':
        console.log('This fruit is a guava WOOT');
        break;

    case 'pear':
        console.log('This fruit is a pear HEY');
        break;

    case 'pineapple':
    case 'passionfruit':
        console.log('This fruit is tropical YO');
        break;

    default:
        console.log('This is an unknown fruit GR');
}

let lifeUniverseEverything = 42;
console.log(lifeUniverseEverything);

lifeUniverseEverything++;
// Identical to:
//    lifeUniverseEverything = lifeUniverseEverything + 1;
console.log(lifeUniverseEverything);

//-------------------------- BASIC FOR LOOPS --------------------------
for (let idx = 0; idx <= 10; idx++) {
    console.log(`My current index is: ${idx}`);
}
// USE RARELY

//-------------------------- FOR OF LOOPS --------------------------
const pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'];

for (let piece of pieces) {
    console.log(piece);
}

//------------------------- FOR-EACH LOOPS -------------------------
const fruitArr = ['apple', 'mango', 'papaya'];

fruitArr.forEach(item => {
    console.log(item);
});

fruitArr.forEach((item, idx) => {
    console.log(`Fruit number ${idx} is ${item}`);
});

const dollarsInAccounts = [22, 55, 100, 200];

dollarsInAccounts.forEach((dollars, idx) => {
    const newVal = (dollars + 10) * 5;
    console.log(newVal);
});

/*----------------------------------------- WHILE LOOPS ------------------------------------------*/
let iter = 0;
while(iter < 10) {
    console.log("iter:", iter);
    iter++;
}

let iter2 = 0;
do {
    console.log("iter2:", iter2);
    iter2++;
} while(iter2 < 10)


const infiniteLoop = () => {
    let iter3 = 0;
    while(true) {
        if (iter3 > 5) {
            console.log("iter3:", iter3);
            return iter3;
        }
        iter3++;
    }
};

infiniteLoop();

// NEXT:
//      MAP
//      REDUCE
//      FILTER

// const vegetableArr = ['carrot', 'lettuce', 'onion'];

// const forEach = (arr, cb) => {
//     let count = 0;
//     for (item of arr) {
//         cb(item, count);
//         count++;
//     }
// };

// forEach(vegetableArr, (item, idx) => {
//     console.log(`Vegetable number ${idx} is ${item}`);
// });
