
  //1         //2         //3
  let username: string = "instructor";
  let passwordOne: string = "Letmein1234!";
  let instructorId: number = 5;


    let passwordTwo: string;
    let phoneNumber: number;
    let email: string;
    let socialSecurity: number;
    let isMarried: boolean;

    let greeting = "Hello";

    let password: string;
    password = "1234";


    //Number Type

    let age: number = 40;
    let currentYear: number = 2018

    //As the docs note, TypeScript also supports ES6 octal literals:
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;

    //String Type

    let companyName: string;
    companyName = "Eleven Fifty"

    let appName: string = 'Twitter';
    appName = "Instagram";


    //Boolean Type

    let isLoggedIn: boolean = true;
    let isGoldLevelUser: boolean = true;

    //Array Type

    //1
    let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
    //2
    let allScores: Array<number> = [100, 92, 95, 96];

    //Although both of these have the same effect, option 1 is much more prevalent.
    //Accessing the array indices works in the same way:

    console.log("Student List:", studentList[0]);


    //Any Type: One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type

    let dataFromThirdParty: any = '12345';
    console.log(dataFromThirdParty);
    console.log(typeof dataFromThirdParty);

    dataFromThirdParty = 12345;
    console.log(dataFromThirdParty);
    console.log(typeof dataFromThirdParty);


    //Void Type: A void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:

    function sayHelloToAll() : void {
        console.log("Hello to all!")
    }

    // Null and Undefined:

    let undefinedVariable: undefined = undefined;
    let nullVariable: null = null;


    //Tuple: Tuple types allow you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair:

    // Declare a tuple type
    let usernameAndId: [number, string];
    // Initialize it
    usernameAndId = [1, "kennisreally40"]; // OK

    //It's important to note that these values must be entered in proper order. This wouldn't work, and the compiler will throw an error if you try to write it:

    // usernameAndId = ["kenn26", 2]; -- it didn't work


    //Enum

    enum WeaponType { Sword, Saber, Spear}
    let weapon: WeaponType = WeaponType.Sword

    // Like arrays, enums start at 0, but that starting index can be assigned a different number:

    enum CardType { Ace = 1, Two, Three, Four }
    let cardType: string = CardType[2]
    console.log(cardType);


    //////////////////////////////////////////      Union Types //////////////////////////////////////


    let x: number | string;
    let y: number | null;

    x = '1234';
    x = 1234;


    // Below didn't work because it is Boolean
   /* x = true;
    y = false;*/



    //Functions   ////////////////////////////////////////////////////////


    function demoFunction(someNum){
        return someNum;
    }

    demoFunction(1); //1
    demoFunction("stuff"); //2
    // demoFunction(1, "Stuff"); //3 -- it won't work in TypeScript but it works in JavaScript




    