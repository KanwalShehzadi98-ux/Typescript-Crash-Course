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
//   console.log(x); // undefined
//   var x = 20;
// }
// console.log(x); // 10

//==================================================================================

// var x = 10;
// function outer() {
//   console.log(x); //undefined
//   if (true) {
//     var x = 20;
//     console.log(x); //20
//   }
//   console.log(x); //20
// }
// outer();
// console.log(x); //10

// function outer() {
//     var x = 10;
//     function inner() {
//       console.log(x); //10
//     }
//     return inner;
//   }
//   var innerFunc = outer();
//   innerFunc();

// var x = 10;
// function outer() {
//   console.log(x); //10
//   if (true) {
//     console.log(x); //10
//   }
//   console.log(x); //10
// }
// outer();
// console.log(x); //10

// function hoistingExample() {
//     console.log(x); //undefined
//     console.log(y); //error
//     console.log(z); //error
  
//     var x = 1;
//     let y = 2;
//     const z = 3;
  
//     console.log(x); //1
//     console.log(y); //2
//     console.log(z); //3
  
//     if (true) {
//       var x = 10;
//       let y = 20;
//       const z = 30;
  
//       console.log(x); //10
//       console.log(y); //20
//       console.log(z); //30
//     }
  
//     console.log(x); //10
//     console.log(y); //2
//     console.log(z); //3
  
//     function inner() {
//       console.log(x); //10
//       console.log(y); //2
//       console.log(z); //3
//     }
  
//     inner();
//   }
  
//   hoistingExample();
  