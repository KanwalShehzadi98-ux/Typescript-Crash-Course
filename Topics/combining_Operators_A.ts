let result : number = 3 + 4 * 5;
console.log(result); //23


let a : number = 20;
let b : number = 10;
let c : number = 15;
let d : number = 5;
let e : number;

e = (a + b) * c / d; // 30 * 15 / 5 = 450/5 = 90
console.log(e);

e = ((a + b) * c) / d; // (30 * 15) / 5 = 450/5 = 90
console.log(e);

e = (a + b) * (c / d); // (30) * (3) = 90 
console.log(e);

e = a + (b * c) / d;  // 20 + 150 / 5 = 20 + 30 = 50
console.log(e);