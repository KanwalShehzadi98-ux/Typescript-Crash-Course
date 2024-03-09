// string
let _name : string = "Kanwal"
console.log(_name)

//number 
let $age : number = 22
console.log($age)

//boolean
let is_student : boolean = true
console.log(is_student)

//any
let fav_fruits : any = 23
fav_fruits = "MANGO"
console.log(fav_fruits)

//undefined
//A variable is defined but is not assigned a value
let myVar : undefined;
console.log(myVar)

//unknown
//The variable type is not defined at the compile time
let myVar1 : unknown = "Kanwal"
console.log(myVar1)

//bigint
//a variable stores the number larger than the maximum limit of the number
// let myNum : bigint = 2n
// console.log(myNum)

//symbol
//unique and immutable primitive value that can be used as the key for the object type
let mySymbol : symbol = Symbol('description')
console.log(mySymbol)

//Null
//intentional absenceof theobject value
let myValue : null = null
console.log(myValue)