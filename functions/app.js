// alert("hello", "world", "javascript", "react", "nodejs");
// let myConsole = (...a) => {
//     console.log(...a)
// }
 
// myConsole("hello" , "world" , "javascript" , "react" , "nodejs", "python", "java", "mongodb", "mysql");
let array = [1,2,3,4]

console.log(...array);



let obj = {
    name: "John",
    age: 20,
    city: "New York"
}

let ob2 = {
    name: "Jane",
    age: 21,
    city: "New York"
}

let myFunc = ({name , age , city}, {name , age , city})=>{
    console.log(name, age, city);
}

myFunc(obj, ob2);
