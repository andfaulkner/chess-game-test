/*------------------------------------------ PRIMITIVES ------------------------------------------*/
// Inferred
const inferredTypeNum = 5;

console.log(inferredTypeNum);
console.log(inferredTypeNum.toString());

// Non-inferred
const nonInferredTypeNum: number = 5;

/*--------------------------------------- TYPED PARAMETERS ---------------------------------------*/
const adder = (num1: number, num2: number) => {
    return num1 + num2;
};

const result = adder(3, 5);
console.log(result);

/*-------------------------------------------- TYPES ---------------------------------------------*/
type Coordinate = {x: number; y: number};

const addCoordinates = (coord1: Coordinate, coord2: Coordinate): Coordinate => {
    return {x: coord1.x + coord2.x, y: coord1.y + coord2.y};
};

const coordAddResult = addCoordinates({x: 2, y: 5}, {x: 4, y: 1});
console.log(coordAddResult);

/*----------------------------------------- UNION TYPES ------------------------------------------*/
/**
 * Concatenate 2 values as strings being glued together.
 *
 * @param {string|number} val1 1st string or number to concatenate.
 * @param {string|number} val2 1st string or number to concatenate.
 */
const concatenator = (val1: string | number, val2: string | number) => {
    return '' + val1 + ' ' + val2;
};

const concatRes = concatenator(2, 'seconds');
console.log(concatRes);

/*---------------------------------------- OPTIONAL TYPES ----------------------------------------*/
type StrOrNum = string | number;

const concatenator2 = (val1: StrOrNum, val2: StrOrNum, val3?: StrOrNum) => {
    const val3Clean =
        typeof val3 === 'number' ? ' ' + val3 : typeof val3 === 'string' ? ' ' + val3 : '';
    return '' + val1 + ' ' + val2 + val3Clean;
};

console.log(concatenator2(2, 'minutes'));
console.log(concatenator2(2, 'minutes', '3 days'));

// Blows up:
// console.log(concatenator2(2, 'minutes', '3 days', '6 weeks'));
// console.log(concatenator2(2, 'minutes', [1, 2]));

/*------------------------------------------ REST TYPES ------------------------------------------*/
const concatenatorRest = (val1: StrOrNum, ...val2: StrOrNum[]) => {
    let returnVal = '' + val1;

    val2.forEach(val => {
        returnVal =
            returnVal +
            (typeof val === 'number' ? ' ' + val : typeof val === 'string' ? ' ' + val : '');
    });

    return returnVal;
};

// Rest types can take any number of arguments.
console.log(concatenatorRest(1, 2, 3, 4, 5, 6, 7, 8));

// Note: rest types are always optional, so this works.
console.log(concatenatorRest(1));

/*-------------------------------------- INTERSECTION TYPES --------------------------------------*/
type XYLine = {x: number; y: number};
type XZLine = {x: number; z: number};

const cubeFromPlanesOrSomething = (coord1: XYLine, coord2: XZLine): XYLine & XZLine => {
    return {x: coord1.x + coord2.x, y: coord1.y, z: coord2.z};
};

//----- User account example -----//
type StreetType = 'drive' | 'crescent' | 'avenue' | 'street' | 'boulevard' | 'route';

type Name = {firstName: string; lastName: string};
type Address = {houseNum: number; streetName: string; streetType: StreetType};

type User = Name & Address;

const buildUserData = (name: Name, address: Address): User => {
    return {...name, ...address};
};

const brodieName = {firstName: 'Brodie', lastName: 'Lewis'} as Name;
const brodieAddress = {houseNum: 111, streetName: 'Pocono', streetType: 'crescent'} as Address;

const userBrodie = buildUserData(brodieName, brodieAddress);
console.log(userBrodie);

/*------------------------------------------- GENERICS -------------------------------------------*/
// Example data - andrew
const andrewName = {firstName: 'Andrew', lastName: 'Faulkner'} as Name;
const andrewAddress = {houseNum: 3, streetName: 'Brenda', streetType: 'street'} as Address;
const userAndrew = buildUserData(andrewName, andrewAddress);

type Account = {balance: number; dateCreated: string};
const brodieAccount = {balance: 100900, dateCreated: '2020-11-01'};
const andrewAccount = {balance: 999999, dateCreated: '2000-02-26'};

/**
 * Merge 2 arrays.
 */
const arrFromSimilarTypes = <OType>(obj1: OType, obj2: OType) => {
    return [obj1, obj2];
};

console.log(arrFromSimilarTypes(andrewAccount, brodieAccount));
// console.log(arrFromSimilarTypes(andrewAccount, userAndrew)); // Blows up
console.log(arrFromSimilarTypes(2, 4));
console.log(arrFromSimilarTypes('aswdf', 'qwerty'));
// console.log(arrFromSimilarTypes('aswdf', 4)); // Blows up

/*----------------------------------------- INTERFACES -------------------------------------------*/
