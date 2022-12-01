let obj ={
    firstName:'Jack',
    lastName:'Smith',
    age:36
};
let myJSON ='{"firstName":"Sam","lastName":"Smith","age":33}';

console.log("myJSON",typeof(myJSON))

let myObj = JSON.parse(myJSON)
console.log("myObj",typeof(myObj));
console.log(myObj)