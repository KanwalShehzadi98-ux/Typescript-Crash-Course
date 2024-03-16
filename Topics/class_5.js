var a = 5;
a++;
console.log(a);
var a1 = 5;
a1 = a1++;
console.log(a1);
var x = 10;
if (x % 2 == 0) {
    console.log("x is even");
}
else if (x % 3 == 0) {
    console.log("x is odd and divisible by 2");
}
else {
    console.log("x is odd and not divisible by 3");
}
var x1 = "Hello";
if (x1 === "Hello") {
    console.log("If block");
}
else if (x1 === "Hello1") {
    console.log("else if block");
}
else {
    console.log("else block");
}
var x2 = 4;
if (x2 === 4.0) {
    console.log("if block");
}
else if (x2 === 4) {
    console.log("else if block");
}
else {
    console.log("else");
}
var x3 = 4.0;
if (x3 === 4) {
    console.log("if block");
}
else if (x3 === 4.0) {
    console.log("else if block");
}
else {
    console.log("else");
}
var score = 85;
if (score >= 0 && score <= 100) {
    console.log("score is valid");
    if (score >= 90) {
        console.log("A");
    }
    else if (score >= 80) {
        console.log("B");
    }
    else if (score >= 70) {
        console.log("C");
    }
    else if (score >= 60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}
else {
    console.log("Invalid score");
}
//switch case
var score1 = 85;
switch (score1) {
    case 100:
        console.log("Perfect score");
        break;
    case 90:
        console.log("Excellent score");
        break;
    case 80:
        console.log("Good score");
        break;
    case 70:
        console.log("Passing score");
        break;
    default:
        console.log("Failure Score");
        break;
}
var color = "red";
switch (color) {
    case "red":
        console.log("Red");
        break;
    case "green":
        console.log("Green");
        break;
    case "blue":
        console.log("Blue");
        break;
    default:
        console.log("Default");
        break;
}
//Ternary Operator
var x5 = 10;
var y5 = (x5 > 0) ? "Positive" : "Negative";
console.log(y5);
var a_num = 10;
var b_num = 5;
var c = a_num > b_num ? a_num - b_num : b_num - a_num;
console.log(c);
var myScore = 85;
var grade = myScore >= 90 ? "A" : myScore >= 80 ? "B" : myScore >= 70 ? "C" : myScore >= 60 ? "D" : myScore >= 50 ? "F" : "Invalid";
console.log(grade);
//scope of variables
{
    var x_1 = 10;
    console.log(x_1);
}
{
    var x_2 = 20;
    console.log(x_2);
}
//ab compiler same variables name pe cheeke ga nhi
//top level pe variable declare kia hai tw wo block mian bhi accessible hai
var my_new_var = 10;
{
    console.log(my_new_var);
}
// {
//     let my_new_var_1 : number= 10;
// }
// console.log(my_new_var_1);
//var
console.log(d);
var d = 10;
console.log(d);
