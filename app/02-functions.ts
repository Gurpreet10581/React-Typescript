function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1 - Works 
addNumbers(1, 2);

//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");


//Practice

// function fullName(fName: string, lName: string){
//     return `${fName}, ${lName}`;
// }
// fullName('Gurpreet', 'Singh');



//Return Type   /////////////////////////////////


    function hello(greetingString){
        return greetingString;
    }

    hello(1); //1


                        //1          //2
    function sayHello(name: string) : string {
        return name;
    }

    sayHello("Kenn"); //3
    sayHello('1'); //4

    //Practice- function that takes string but returns boolean

    function logIn(username: string, password: string) : boolean {
        if (username =="elevenfiftyuser" && password =="Letmein1234!"){
            return true;
        }
        else{
            return false;
        }
    }

    
    // Optionals  /////////////////////////////////////////////////////

                                            //1                             //2
    function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
        console.log(someString);
        return numOne + numTwo;
    }

        //5
    addNumbersWithOptional(1, 2); //3
    addNumbersWithOptional(1, 2, "This is optional"); //4

    /*Key Rule
    It's important to note the following rule:
    Optional params must go after all required params */

    function fullName(fName:string, lName: string, middleName?: string){
        if (middleName) {
            return (` ${fName} ${middleName} ${lName}`);
        }
        else {
            return (`${fName} ${lName}`);
        }

    }

    console.log(fullName("Gurpreet", "Singh"));

    console.log(fullName("Gurpreet", "Singh", "Sandhu"));