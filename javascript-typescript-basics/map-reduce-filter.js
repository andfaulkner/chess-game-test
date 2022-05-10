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

// //----------- Map with index -----------//
// const accountsWithIndex = accountDollarsArray
//     .map((dollars, index) => {
//         return {dollars, accountNumber: index + 1};
//     })
//     .map(account => {
//         return {...account, bankName: 'FuckYou Bank'};
//     })
//     .map(account => {
//         const interestRate =
//             account.dollars < 100
//                 ? 0.01
//                 : account.dollars >= 100 && account.dollars <= 300
//                 ? 0.03
//                 : 0.05;
//         return {...account, interestRate: interestRate};
//     });

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

// //------------------------- REDUCE -------------------------
// const totalMoney = accountDollarsArray.reduce((accumulator, currentNumber) => {
//     return accumulator + currentNumber;
// }, 0);

// console.log(totalMoney);

// const farmAnimals = [
//     {animalType: 'pig', age: 6, makeSound: () => `Oink`},
//     {animalType: 'cow', age: 2, makeSound: () => `Moo`},
//     {animalType: 'chicken', age: 5, makeSound: () => `Bock`},
//     {animalType: 'sheep', age: 1, makeSound: () => `Baa`}
// ];

// const animalSoundsList = farmAnimals.reduce((acc, animal) => {
//     return acc + `animalType: ` + animal.makeSound() + `\n`;
// }, ``);
// console.log('animalSoundsList:', animalSoundsList);

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
