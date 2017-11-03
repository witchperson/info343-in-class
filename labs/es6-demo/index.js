function getGreeting(name = "World."){
    return "Hello "+ name;
}
//defalut Value
console.log(getGreeting());
console.log(getGreeting("Kangwoo."));

// Template Strings
// ``
// decrease code readability
// looks complicate
function greeting(name){
    return `Hello, ${name.substr(0,1).toUpperCase() 
            + name.substr(1)}`;
}

console.log(greeting("Troy"));

//destructuring and spreading
let size = "10x20x30x40x50";
//split size into two-element array
let [width, height,...rest] = size.split("x");
// returns ["10","20"];

// let width = sizeSegments[0];
// let height = sizeSegments[1];

console.log(width);
console.log(height);
console.log(rest);

let shape = {x:10,y:20,width:30,height:40};

let {x,y} = shape;
console.log(x);
console.log(y);

//Spreading

function sum(n1,n2){
    return n1+n2;
}

let nums =[1,2];
console.log(sum(...nums));

function sumAll(...numbers){
    return numbers.reduce((accumlator,n) => accumlator + n ,0);
}

console.log(sumAll(10, 20, 30, 40, 50));