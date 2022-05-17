//------------------------- RUN MAP ON ARRAYS -------------------------
const fruitArr = ['peach', 'banana', 'grapes', 'melon'];

const fruitSentenceArr = fruitArr.map(fruit => {
    return `${fruit} is a fruit!`;
});

console.log(fruitSentenceArr);

//------- RUN MAP ON NUMBER ARRAY -------//
const accountDollarsArray = [100.2, 210.1, 600.78, 230.22, 85];

const postHelicopterAccounts = accountDollarsArray.map(dollars => {
    return dollars + 500;
});

console.log('accountDollarsArray:', accountDollarsArray);
console.log('postHelicopterAccounts:', postHelicopterAccounts);

const roundTo2Digits = dollars => {
    return Math.round(dollars * 100) / 100;
};

// You can do this, because "map" returns an array
console.log([1, 2, 3, 4, 5].map(item => {
    return item + 5;
}));

// The above is literally identical (as far as JS is concerned) to this:
console.log([6, 7, 8, 9, 10]);

//------- CHAINING MAPS ON NUMBER ARRAY -------//
/*
 * You can do the following because map returns an array. You then call .map
 * on each subsequent array (returned by the previous "map" call);
 */

const postTransactionsAccounts = accountDollarsArray
    .map(dollars => roundTo2Digits(dollars - 50)) // Minus 50
    .map(dollars => roundTo2Digits(dollars * 1.1)) // Times 1.1
    .map(dollars => roundTo2Digits(dollars - 3)); // Minus 3

console.log('postTransactionsAccounts:', postTransactionsAccounts);

//------- Calling external functions from a map -------//
const applyAnnualInterest = dollars => {
    return roundTo2Digits(dollars * 1.2);
};

// For reference:
// accountDollarsArray = [100.2, 210.1, 600.78, 230.22, 85];

const endOfYearAccountValues = accountDollarsArray.map(applyAnnualInterest);
console.log('endOfYearAccountValues:', endOfYearAccountValues);

const mappedAccVals = [100, 200, 1000].map(dollars => {
    return dollars * 1.2;
});
console.log(`mappedAccVals:`, mappedAccVals);

const add20Percent = dollars => {
    return dollars * 1.2;
};
const mappedAccVals2 = [100, 200, 1000].map(add20Percent);
console.log(`mappedAccVals2:`, mappedAccVals2);

//----- Ternary operator ------//
// prettier-ignore
//                        If this                            // then this    // else this
const interestRateOuter = (accountDollarsArray[0] < 100)     ? 0.01          : 0.05;
console.log(`interestRateOuter:`, interestRateOuter);

// Equivalent to:
let interestRateOuter2 = null;
if (accountDollarsArray[0] < 100) {
    interestRateOuter2 = 0.01;
} else {
    interestRateOuter2 = 0.05;
}

// Nested ternary operator
const interestRateOuter3 =
    (accountDollarsArray[0] < 100)
        ? 0.01
        : ((accountDollarsArray[0] <= 300)
            ? 0.03
            : 0.05);

//----------- Map with index -----------//
const accountsWithIndex = accountDollarsArray
    .map((dollars, index) => {
        return {dollars, accountNumber: index + 1};
    })
    .map(account => {
        return {...account, bankName: 'FuckYou Bank'};
    })
    .map(account => {
        const interestRate =
            account.dollars < 100
                ? 0.01
                : account.dollars >= 100 && account.dollars <= 300
                ? 0.03
                : 0.05;
        return {...account, interestRate: interestRate};
    });

//------------------------- REDUCE -------------------------
// const accountDollarsArray = [100.2, 210.1, 600.78, 230.22, 85];

const totalMoney = accountDollarsArray.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
}, 0);
// 1st iteration:  accumulator = 0,     currentNumber = 100.2
// 2nd iteration:  accumulator = 100.2  currentNumber = 210.1
// 3rd iteration:  accumulator = 310.3  currentNumber = 600.78
// 4th iteration:  accumulator = 310.3  currentNumber = 600.78

console.log("totalMoney:", totalMoney);

const atoms = [
    {element: 'H', atomicWeight: 1},
    {element: 'C', atomicWeight: 6},
    {element: 'H', atomicWeight: 1},
    {element: 'H', atomicWeight: 1},
    {element: 'H', atomicWeight: 1},
];

const totalAtomicWeight = atoms.reduce((acc, atom) => {
    return acc + atom.atomicWeight;
}, 0);
console.log("totalAtomicWeight:", totalAtomicWeight);

const bricks = [
    {weight: 1.5, material: 'stone'},
    {weight: 1.52, material: 'stone'},
    {weight: 1.49, material: 'stone'},
    {weight: 1.1, material: 'clay'},
    {weight: 1.12, material: 'clay'},
    {weight: 1.08, material: 'clay'},
];

const weightOfAllBricks = bricks.reduce((acc, brick) => {
    const brickWeight = brick.weight;
    const newWeight = acc + brickWeight;
    return newWeight;
}, 0);
console.log("weightOfAllBricks:", weightOfAllBricks);

const hand1 = [
    {suit: 'diamond', number: 13},
    {suit: 'club', number: 1},
    {suit: 'heart', number: 3},
    {suit: 'diamond', number: 4},
];

const totalHandValue = hand1.reduce((acc, card) => (acc + card.number), 0);
console.log("totalHandValue:", totalHandValue);

// Equivalent to this:
let totalHandValue2 = 0;
for (const card of hand1) {
    totalHandValue2 = totalHandValue2 + card.number;
}
console.log("totalHandValue2:", totalHandValue2);

const hand2 = [
    {suit: 'diamond', number: 3},
    {suit: 'club', number: 8},
    {suit: 'heart', number: 13},
];

const hand3 = [
    {suit: 'club', number: 9},
    {suit: 'heart', number: 11},
];

const multipleHands = [hand1, hand2, hand3];

const handResults = multipleHands.map(hand => {
    const totalHandVal = hand.reduce((acc, card) => (acc + card.number), 0);
    if (totalHandVal === 21) return 'blackjack';
    if (totalHandVal > 21) return 'bust';
    return totalHandVal;
});

console.log('handResults:', handResults);

// Reduce with subtraction

const shoppingList = [
    {item: 'eggs', cost: 3.50},
    {item: 'milk', cost: 8.25},
    {item: 'butter', cost: 7.65},
];

const accountVal = 100;

const accountAfterShopping = shoppingList.reduce((curAccountValue, itemToBuy) => {
    return curAccountValue - itemToBuy.cost;
}, accountVal);
console.log("accountAfterShopping:", accountAfterShopping);

//--------------- Reduce with strings ---------------//

// String that's been parsed into tokens:
//      `const myStringVar = "some value";`
const parsedTokens = [
    {str: 'const',       name: 'StaticVariableDeclaration'},
    {str: 'myStringVar', name: 'VariableName'},
    {str: '=',           name: 'EqualsOperator'},
    {str: '"',           name: 'DoubleQuote'},
    {str: 'some value',  name: 'String'},
    {str: '"',           name: 'DoubleQuote'},
    {str: ';',           name: 'Semicolon'},
];

const origString = parsedTokens.reduce((acc, token) => {
    acc = acc + token.str;
    if (
        token.name === 'StaticVariableDeclaration'
        || token.name === 'VariableName'
        || token.name === 'EqualsOperator'
    ) {
        acc = acc + ' ';
    }
    return acc;
}, '');
console.log("origString:", origString);

// Second example: stitch together a full name from male ancestors.
const fathers = [
    {firstName: "Antonio", lastName: "Banderas"},
    {firstName: "Gabriel", lastName: "Vasques"},
    {firstName: "Julio", lastName: "Garcia"},
    {firstName: "Emilio", lastName: "Cortez"},
];

const firstName = "Maxime";

const spanishName = fathers.reduce((acc, father, idx) => {
    const notLast = idx < (fathers.length - 1);
    return acc + father.lastName + (notLast ? '-' : '');
}, firstName + ' ');
console.log("spanishName:", spanishName)



// const farmAnimals = [
//     {animalType: 'pig', age: 6, makeSound: () => `Oink`},
//     {animalType: 'cow', age: 2, makeSound: () => `Moo`},
//     {animalType: 'chicken', age: 5, makeSound: () => `Bock`},
//     {animalType: 'sheep', age: 1, makeSound: () => `Baa`}
// ];

// const animalSoundsList = farmAnimals.reduce((acc, animal) => {
//     return acc + `Type: ${animal.animalType}. Sound: ` + animal.makeSound() + `\n`;
// }, ``);
// console.log('animalSoundsList:', animalSoundsList);

// const farmAnimals = [
//     {animalType: 'pig', age: 6, makeSound: () => `Oink`},
//     {animalType: 'cow', age: 2, makeSound: () => `Moo`},
//     {animalType: 'chicken', age: 5, makeSound: () => `Bock`},
//     {animalType: 'sheep', age: 1, makeSound: () => `Baa`}
// ];

// const animalSoundsList = farmAnimals.reduce((acc, animal) => {
//     return acc + `Type: ${animal.animalType}. Sound:` + animal.makeSound() + `\n`;
// }, ``);
// console.log('animalSoundsList:', animalSoundsList);



// /**
//  *  Schema of accountsWithIndex:
//  *  {
//  *      dollars: number,
//  *      accountNumber: integer,
//  *      bankName: string,
//  *      interestRate: float
//  *  }
//  *
//  */
// console.log('accountsWithIndex:', accountsWithIndex);


// //------------------------- FILTER -------------------------
// const fuckThePoors = accountDollarsArray.filter(amount => amount > 200);
// console.log('fuckThePoors:', fuckThePoors);

// //-------------------- PROGRAMMING PARADIGMS (BASIC INTRO) --------------------
// // Equivalent to:

// // Functional style
// const totalFunc = accountDollarsArray.reduce((acc, num) => acc + num, 0);

// // Procedural style
// let totalImp = 0;
// for (const iterator of accountDollarsArray) {
//     totalImp = totalImp + iterator;
// }
