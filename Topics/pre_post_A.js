//https://www.scaler.com/topics/pre-increment-and-post-increment-in-c/
var a2 = 5;
var b2 = ++a2; // b = 6
console.log(a2, b2); // 6,6
var a1 = 5;
var b1 = a1++; // b = 5
console.log(a1, b1); // 6,5
var x = 5;
x = x++; //x = 5,x = 6
console.log(x); //5 
var l = 5, m = 6;
var z = l++ + ++m; //z = 5+7 , l = 6,m = 7
console.log(l);
console.log(m);
console.log(z);
var a = 5, b = 2, c;
c = ++a + a++ + --b + b-- + a + b++ + b;
//    6    7    1     0        1  
//c = 6 +  6  + 1  +  1  + 7 + 0 + 1 = 22
console.log("Value of c = ".concat(c));
