const acId=12235552
let acEmail="sonali@gmail.com"
var acPass="sonali"
acCity="Pune"

// acId=234 #not allowed: constant cant be changed
/* Var and let is used for defining the variables.
Var is not recommended because var has issue with scopes.
*/
acEmail="ss@gmail.com"
// console.log(acId)
// console.log(acEmail)
// console.table([acEmail,acId,acPass,acCity])

let x //just declared and not initialized 
// console.log(x)  // default : 'undefined'

//const variable always need to be initialzed .



/*

*** Data types  *** 

1. Primitive :
    1. Number : integer and floating number
    2. BigInt : long int with unbound precision
    3. String : seq. of chars encoded in ""
    4. Boolean : true or false
    5. null : empty value
    6. undefined : default value
    7. Symbol : unique and immuatable 

2. Object : Collection of properties.
*/


let s= 20
// console.log(typeof s) // or console.log(typeof (s))


//Typecasting or type conversion.

let number=100

let newnumber=Number(number)
// console.log(newnumber)

/* 
conversion of variable to Number

"100" => 100 //string to number
"100abc" => NaN // variable will convert in number but value would be NaN
true => 1
false => 0
undefined => NaN
"sonali" => NaN

*/

// number=undefined
// newnumber=Number(number)
// console.log("aa",newnumber)

/*
convert in boolean

1 => true; 0 => false
"" => false; "abc" => true

*/

let sum=30
newSum= String(sum)
// console.log(newSum)
// console.log(typeof newSum)

let vote=null
vote= String(vote)
// console.log(vote)
// console.log(typeof vote)

/*
convert into string
30 => "30"
true => "true"
undefined => "undefined"
null => "null"
*/


//operators

/*

1. Arithamatic
    + : addtion
    - : Subtration
    * : multiplication
    / : division
    ** : power
    % : Modulo
    ++ : pre and post increment
    -- : pre and post decrement


2.Assignment 
    = : equal to
    += , -= , *= , /= , %= , **= , :

3.Comparison 
    == : equal to : only checks value
    === : equal to : checks value and type
    != : not equal : only value
    !== : not equal : value and type
    > , < , >=, <=, 

4. Conditional (ternary)
    (condition)?x:y
    if condition is true then x , else y
    // eg:

    let answer = 10
    z=(answer > 5)?1 : 0
    console.log(z)
    console.log(typeof z)

    output:
    1
    number
1==
5.Logical 
    && , || , ! 

6.Bitwise
    & : 101 & 010 = 000
    | : 101 | 010 = 111
    ~ : ~101 = 010
    ^ : 0101 ^ 1100 = 1001 // 1^0 = 1, 0^1 = 1, 0^0 = 0, 1^1 = 0
    << : 1001<<1
    >> : 1001>>1  
    >>> : 1001>>>1 //unsigned right shift
    
7. typeof operator :  returns type of variable

8.delete: deletes variable 

9. Spread (...)

*/

let x1=[10, 20, 30], y1=[40,50,60], z1=[70,80,90,100]

xyz=[...x1,...y1,...z1]
console.log(xyz)

/*[
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100 
  ]
  */

  /*

  10. in operator
    returns true if a value/variable is in an object, otherwise false

  11. instanceof 
     returns true if an object is an instance of a specified object

  12.void : 
    The void operator evaluates an expression and returns undefined. 
    This operator is often used to obtain the undefined primitive value, 
    using "void(0)" (useful when evaluating an expression without using the return value).

  */

// Precedence of operators :

/*  () , . , [] ,  ?. , () functioncall, new 
    ++ post then pre , -- post then pre //increment
    !, ~ // NOT
    +, -, typeof, void , delete,  //Unary
    **, *, /, %, +binary, -binary, + concatination // Arithmatic
    << , >> , >>> //shift
    in, instanceof //relational
    < , <=, >, >=,==, ===, !=, !==, //comparision
    &, ^, |   //bitwise
    &&, ||, ??  //logical
   * =, +=, -=, *=, **=, /=, %=, <<=, >>=, >>>=, &=, |=, ^=, &&=, ||=, :, ...(spread), //assignment

*/


//Memory

/*
Stack and heap 
stack => primitive => call by value : if changed copied variable, it wont affect original value
heap => non primitive => call by reference : if changed copied value then it will change original value.
*/

