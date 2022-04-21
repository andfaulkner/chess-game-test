//------------------------ IF-THEN STATEMENTS ------------------------
const ericWootness = 29;
const brodyWootness = 28;

if (ericWootness > brodyWootness) {
    console.log(`Eric is wooter than Brody`);
} else if (ericWootness === brodyWootness) {
    console.log(`Eric is the same woot as Brody`);
} else {
    console.log(`Brody is less woot than Eric`);
}

//----- DON'T DO THIS -----
const element = 'Na';
if (element === 'H') {
    console.log(`This element is Hydrogen`);
} else if (element === 'He') {
    console.log(`This element is Helium`);
} else if (element === 'Na') {
    console.log(`This element is Sodium`);
} else if (element === 'Mg') {
    console.log(`This element is Magnesium`);
}

//----- DO THIS INSTEAD ----
const periodicTable = {
    H: 'Hydrogen',
    He: 'Helium',
    Na: 'Sodium',
    Mg: 'Magnesium'
    // etc.
};
const chemicalSymbol = 'Mg';
const elementName = periodicTable[chemicalSymbol];
console.log(`This element is ${elementName}`);

/*------------------------------ SECOND EXAMPLE ------------------------------*/
const boxName = 'box1';

if (boxName === 'box1') {
    console.log('The box has apples');
} else if (boxName === 'box2') {
    console.log('The box has pears');
}
if (boxName === 'box3') {
    console.log('The box has guavas');
}

const fruitBoxes = {
    box1: 'apples',
    box2: 'pears',
    box3: 'guavas'
};

const boxContent = fruitBoxes[boxName];
console.log('The box has ${boxContent}');

// NOTE: usable for getting functions on objects as well
/**
 * You can place functions in object keys
 */
const logger = {
    verbose: arg => {
        console.log(arg);
    },
    info: arg => {
        console.log(`INFO :: `, arg);
    },
    warn: arg => {
        console.log(`WARNING - DANGER :: `, arg);
    }
};

logger.info(`Eric is the wootest of all`);
logger.warn(`Eric is almost TOO woot`);

//------------------------ SWITCH STATEMENTS ------------------------
const fruit = 'guava';
const fruit2 = 'pear';
const fruit3 = 'pineapple';
const fruit4 = 'aeirughesirughergijo';
const noOneGivesAFuckFruit = 'dorian';

const logFruitInfo = fruitArg => {
    switch (fruitArg) {
        case 'guava':
            console.log('This fruit is a guava WOOT');
            break;

        case 'pear':
            console.log('This fruit is a pear HEY');
            break;

        // "Fall through" - both cases match the same thing
        case 'pineapple':
        case 'passionfruit':
            console.log('This fruit is tropical YO');
            break;

        case 'dorian':
            break;

        // Note: optional
        default:
            console.log('This is an unknown fruit GR');
    }
};

logFruitInfo(fruit);
logFruitInfo('pineapple');

// Switch statement function above is equivalent to:
const logFruitInfoWithIfTree = fruitArg => {
    if (fruitArg === 'guava') {
        console.log('This fruit is a guava WOOT');
    } else if (fruitArg === 'pear') {
        console.log('This fruit is a pear HEY');
    } else if (fruitArg === 'pineapple' || fruitArg === 'passionfruit') {
        console.log('This fruit is tropical YO');
    } else if (fruitArg === 'dorian') {
    } else {
        console.log('This is an unknown fruit GR');
    }
};

logFruitInfoWithIfTree('pear');
logFruitInfoWithIfTree('aeirughesirughergijo');


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
while (iter < 10) {
    console.log('iter:', iter);
    iter++;
}

let iter2 = 0;
do {
    console.log('iter2:', iter2);
    iter2++;
} while (iter2 < 10);

const infiniteLoop = () => {
    let iter3 = 0;
    while (true) {
        if (iter3 > 5) {
            console.log('iter3:', iter3);
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
