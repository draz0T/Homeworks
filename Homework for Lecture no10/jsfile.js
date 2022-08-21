

let value1 = 1;           // this is number
String(value1);           // returns a string from a number variable value1
Boolean(value1);          //returns boolean from value1 which is true
console.log(typeof value1);

let value2 = 0;           // this is number
String(value2);           // returns a string from a number variable value2
Boolean(value2);          //returns boolean from value2 which is false
console.log(typeof value2);

let value3 = "1";         //this is string
Number(value3);           //returns a number from a string
Boolean(value3);          //returns boolean from value3 which is true
console.log(typeof value3);

let value4 = "0";         //this is string
Number(value4);           //returns a number from a string
Boolean(value4);          //returns boolean from value4 which is false
console.log(typeof value4);

let value5 = "ten";       //this is string
Number(value5);           //returns a NAN
Boolean(value5);          //returns boolean from value5 which is true
console.log(typeof value5);

let value6 = true;         //returns boolean from value6 which is true 
String(value6);            //returns a string
Number(value6);            //returns a number
console.log(typeof value6);

let value7 = false;        //returns boolean from value7 which is false 
String(value7);            //returns a string
Number(value7);            //returns a number
console.log(typeof value7);

let value8 = null;
Number(value8);            //returns number with value 0
String(value8);            //returns string "null"
Boolean(value8)            //returns false boolean 
console.log(typeof value8);


let value9 = undefined;
Number(value9);            //returns NAN
String(value9);            //returns string "null"
Boolean(value9)            //returns false boolean 
console.log(typeof value9);

let value10 = ""
Number(value10);            //returns 0
String(value10);            //returns string ""
Boolean(value10)            //returns false boolean 
console.log(typeof value10);

let value11 = ‘’.
Number(value11);            //returns 0
String(value11);            //returns string ""
Boolean(value11)            //returns false boolean 
console.log(typeof value11);







let day_of_birth = 30;
let sumOfTheNumOfTheFullName = "17";  
let thirdVar = 87 - 19;
let sumOfYear = 1 + 9 + 8 + 7;
console.log(day_of_birth, sumOfTheNumOfTheFullName, thirdVar,sumOfYear);

let variable5 = day_of_birth>sumOfTheNumOfTheFullName ? true: false;
let variable6 = thirdVar % sumOfYear;

console.log(variable5,variable6);

let variable7 = "i am the ";
console.log(
       variable5 == true && variable6 < 3
       ? variable7 + "light"
       : variable7 + "darkness"
);