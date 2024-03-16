// console.log(test); //undefined
// var test;
// var test;
// console.log(test);//undefined
// a = 5;
// console.log(a); //5
// var a;
// var a;
// a = 5;
// console.log(a); //5
// var a;
// console.log(a); //undefined
// a = 5 ;
// var a1 = 4;
// function greet(){
//     b = 'hello';
//     console.log(b); //hello
//     var b;
// }
// greet();
// // console.log(b); //error
//================================================================================
// a = 5;
// console.log(a); //error
// let a;
// let a;
// a = 100;
// console.log(a); //100
// function codeHoist(){
//     a = 10;
//     let b = 50;
// }
// codeHoist();
// console.log(a); //10
// console.log(b); //error
// console.log(_name); //error
// let _name = "Kanwal";
// let name;
// console.log(name); //undefined
// name = "Kanwal";
// function fun(){
//     console.log(name); //error
//     let name = "Kanwal";
// }
// fun();
// function fun(){
//     let name;
//     console.log(name); //undefined
//     name = "kanwal";
// }
// fun();
// function fun(){
//     let name = "kanwal";
//     console.log(name); //kanwal
// }
// fun();
// console.log(name); //error
// let name = "Kanwal";
//==================================================================================
// fun(); //Function is hoisted
// function fun(){
//     console.log("Function is hoisted"); 
// }
// fun(); //error
// let fun = () => {
//     let name = "Kanwal";
//     console.log(name);
// }
// console.log(greeting()); // "Hello there!"
// function greeting() {
//  return "Hello there!";
// }
// console.log(a); //undefined
// var a = "a";
// console.log(a); //a
// console.log(a); //error
// console.log(b); //error
// let a = "a";
// console.log(a); //a
// =================================================================================
// let instance = new MyClass(); // error
// class MyClass {
//  // ...
// }
// let x = 5;
// {
//     console.log(x); //error
//     let x = 4;
// }
// const x = 5;
// {
//     console.log(x); //error
//     const x = 4;
// }
// var x = 10;
// {
//   console.log(x); // error
//   var x = 20;
// }
// console.log(x); // 10
//==================================================================================
var x = 10;
function outer() {
    //   console.log(x); //undefined
    if (true) {
        var x = 20;
        console.log(x); //20
    }
    console.log(x); //20
}
outer();
console.log(x); //10
