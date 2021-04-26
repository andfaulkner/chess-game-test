console.log("Runs!");

//------------------------- RUN MAP ON ARRAYS -------------------------
const fruitArr = ["peach", "banana", "grapes", "melon"];
console.log(fruitArr);

const fruitSentenceArr = fruitArr.map((fruit) => {
    return fruit + " is a fruit!";
});

console.log(fruitSentenceArr);

const accountDollarsArray = [100.20, 210.10, 600.78, 230.22, 85];
const postHelicopterAccounts = accountDollarsArray.map((dollars) => {
    return dollars + 500;
});

console.log("accountDollarsArray:", accountDollarsArray);
console.log("postHelicopterAccounts:", postHelicopterAccounts);

const postTransactionsAccounts =
    accountDollarsArray
        .map(dollars => Math.round((dollars - 50) * 100) / 100)
        .map(dollars => Math.round((dollars * 1.10) * 100) / 100)
        .map(dollars => Math.round((dollars - 3) * 100) / 100);

console.log("postTransactionsAccounts:", postTransactionsAccounts);


const applyAnnualInterest = (dollars) => Math.round((dollars * 1.20) * 100) / 100;

const endOfYearAccountValues = accountDollarsArray.map(applyAnnualInterest);
console.log("endOfYearAccountValues:", endOfYearAccountValues);

//----- Ternary operator ------//
// prettier-ignore
                          //If this                          // then this    // else this
const interestRateOuter = (accountDollarsArray[0] < 100)     ? 0.01          : 0.05;

// Nested ternary operator
const interestRateOuter2 =
    (accountDollarsArray[0] < 100)
        ? 0.01
        : (accountDollarsArray[0] <= 300)
        ? 0.03
        : 0.05;


//----------- Map with index -----------//
const accountsWithIndex =
    accountDollarsArray
        .map((dollars, index) => {
            return {dollars, accountNumber: index + 1};
        })
        .map(account => {
            return {...account, bankName: 'FuckYou Bank'};
        })
        .map(account => {
            const interestRate =
                (account.dollars < 100)
                ? 0.01
                : (account.dollars >= 100 && account.dollars <= 300)
                ? 0.03
                : 0.05;
            return {...account, interestRate: interestRate};
        });

/**
 *  Schema of accountsWithIndex:
 *  {
 *      dollars: number,
 *      accountNumber: integer,
 *      bankName: string,
 *      interestRate: float
 *  }
 *
 */
console.log("accountsWithIndex:", accountsWithIndex);

// -----
// NEXT: DO REDUCE
// -----
