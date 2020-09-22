//1         //2         //3
var username = "instructor";
var passwordOne = "Letmein1234!";
var instructorId = 5;
var passwordTwo;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
var password;
password = "1234";
//Number Type
var age = 40;
var currentYear = 2018;
//As the docs note, TypeScript also supports ES6 octal literals:
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//String Type
var companyName;
companyName = "Eleven Fifty";
var appName = 'Twitter';
appName = "Instagram";
//Boolean Type
var isLoggedIn = true;
var isGoldLevelUser = true;
//Array Type
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//Although both of these have the same effect, option 1 is much more prevalent.
//Accessing the array indices works in the same way:
console.log("Student List:", studentList[0]);
//Any Type: One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Void Type: A void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
function sayHelloToAll() {
    console.log("Hello to all!");
}
// Null and Undefined:
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple: Tuple types allow you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair:
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK
//It's important to note that these values must be entered in proper order. This wouldn't work, and the compiler will throw an error if you try to write it:
// usernameAndId = ["kenn26", 2]; -- it didn't work
//Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
// Like arrays, enums start at 0, but that starting index can be assigned a different number:
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//////////////////////////////////////////      Union Types //////////////////////////////////////
var x;
var y;
x = '1234';
x = 1234;
// Below didn't work because it is Boolean
/* x = true;
 y = false;*/
//Functions   ////////////////////////////////////////////////////////
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3 -- it won't work in TypeScript but it works in JavaScript
//# sourceMappingURL=01-types.js.map