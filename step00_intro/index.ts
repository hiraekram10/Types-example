// 00 hello  world

// let fullName = "Hira ekram"
// console.log(fullName);


// 00b  syntax error

// let fName = "hira"
// consule.log(fName) // error TS2552: Cannot find name 'consule'. Did you mean 'console'?


//00c type error 
// letter user ="Teacher";
// console.log(user); // Unknown keyword or identifier. Did you mean 'let ter'?

let word = "english";
// word.length()  //This expression is not callable. Type 'Number' has no call signatures
// console.log(word.length);  //correct
word.charAt(2); //suggest strings method






// 00d assignability error


// let admin = 0;
// admin = "safia"
// console.log(admin);   //Type 'string' is not assignable to type 'number'.



// //strongly typed syntax  Explicit

// let firstname: string = "hira";
// let no:number = 90;
// no = 7

// console.log(no);


//type inference  Imlipcit

// let lastname = "Ekram";

// let input = Math.random() > 0.4  ? "greater": "lesser"  //type string
// console.log(input);



//any key word
// let program;  //any

// program  //undefined........ bcz we didnt set the type yet(no use)
// program = "efforts"

// console.log(program.indexOf("t"));  //5

// program.toFixed() //Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'


 let students = 4;
 

 export{students}











