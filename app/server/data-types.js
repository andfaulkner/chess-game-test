//--------- Number data type ---------
const bob = 42;
console.log(bob);

// This will fail
// bob = 2222;
// console.log(bob);

let jon = 55;
console.log(jon);

jon = 2000;
console.log(jon);

//-------- String data type --------
const steve = `yo`;
console.log(steve);

//-------- Object data type --------
const meeka = {
    name: "meeka the dog",
    age: 10
};
console.log(meeka);
console.log(meeka.age);

const nissan = {
    brand: "Nissan",
    color: "black",
    year: 2020,
    model: "pathfinder"
};
console.log(nissan);
console.log(nissan.year);

nissan.color = "orange";
console.log(nissan);

delete nissan.year;
console.log(nissan);

nissan.numberOfDoors = 4;
console.log(nissan);

console.log(Object.keys(nissan));
console.log(Object.values(nissan));
console.log(Object.entries(nissan));

//-------- Array data type --------
const fruit = ['apple', 'orange', 'pear'];
console.log(fruit);

console.log(fruit[0]);

const magicNumbers = [22, 77, 44, 14, 25, 97, 6010]; 
console.log(magicNumbers);

const cars = [
    {brand: "Dodge", model: "Charger", year: 2020, color: "black"},
    nissan
];

console.log(cars);
console.log(cars.length);

cars.pop();
console.log(cars);

cars.push(22);
console.log(cars);

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

// Factory function
const buildFullName = (firstName, lastName) => {
    const fullName = {firstName: firstName, lastName: lastName};
    return fullName;
};

const someName = buildFullName("John", "Doe");
console.log(someName);

// Factory function - makes mutable object
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

module.exports = buildPerson;
