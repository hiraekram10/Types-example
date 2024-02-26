 //  error solving

//  let myClass :number;
//  myClass = null  //error got to change in ts config change null check true


//  myClass = null //no error
//  console.log(myClass);


//Union 
//The first way to combine types you might see is a union type
let food: string | number;

//he process of knowing the type of a variable is known as type narrowing
food = "Biryani";  // narowwing

console.log(food); //type str

// food.tofixed()  //  Property 'tofixed' does not exist on type 'string'. Did you mean 'fixed



let Id = Math.random() <0.5 ? "greater" :1;

// if(Id == "greater"){
//     Id.toLowerCase();

// }else{
//   Id.upperCase() //Property 'upperCase' does not exist on type 'string | number'.
// }


// narrow down
// In TypeScript, type narrowing is the removal of types from a union. 
// To narrow a variable to a specific type, we use the type guard. We can use the typeof operator with the 
// variable name and compare it with the type that you expect for the variable.



// if( typeof Id === "string" ){
//     Id.length
// }else{
//     typeof Id  //no

// }

//  typeof Id === "string"
//? Id.length 
// :Id.toFixed();



// literals

// Literal Types in TypeScript allow you to specify (constant value) exact values for variables or properties
// literal typet should be string, no, boolean

// let myStudents:number |"AI" |"Human";
// myStudents = "AI" //ok
// myStudents="nima" error //Type '"nima"' is not assignable to type 'number | "AI" | "Human"'.

// let numberOne:string | false|10;
// numberOne = 9  //Type '9' is not assignable to type 'string | 7 | 10'



// let Biryani:"Birayni";
// Biryani = "pulao" // err Type '"pulao"' is not assignable to type '"Birayni"


type mix= boolean|number|undefined |string | null

let workLoad:mix ;

// you can combine

type useCase = string| number;
type id = useCase | boolean| null
 











 
 