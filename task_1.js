/*
We introduced the standard function Math.min, which returns its smallest argument.
We can build something like that now.
Write a function min that takes two arguments and returns their minimum.

ჩვენ ვისწავლეთ სტანდარტული ფუნქცია Math.min, რომელიც აბრუნებს უმცირეს არგუმენტს.
ახლა შეგვიძლია მსგავსი ჩვენით ავაწყოთ.
დაწერეთ ფუნქცია min რომელიც იღებს 2 არგუმენტს და აბრუნებს მათგან მინიმუმს.
*/

//Math.min
function min(a, b) {
    return Math.min(a, b); 
}

//my min function
function myMin(a, b) {
    if (a <b) {
        return a;
    } else {
        return b;
    }
}

//test
let result = min(6, 2);
console.log(result);
let myResult = myMin(3, 7);
console.log(myResult);
