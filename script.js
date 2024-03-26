// console.log("Welcome to the class")

// console.log("This is my JS class")
// console.log(10+5)


// var name = "Hassan";
// {
//     var name = "Hassan1";
//     // console.log(name)
// }
// let age = 21;
// age = 22;


// let classjs = "hu rahi ha";
// const atm_pin = 2345;
// // atm_pin = 2345;
// console.log(atm_pin)


// console.log(age)
// let marks = 300;
// let student = "Ali";
// let isPass = true;
// let maths = null;
// let adrress;
// console.log(marks,student,isPass,maths,adrress);

// const name1 = "hassan";
// name1 = "ali";
// console.log(name1)


// const myClass = {
//     marks : 300,
//     student : "Hassan",
//     isPass : true,
//     courses : {english: 90, urdu : 130},
// };

// myClass["marks"] = 200;

// console.log(myClass.courses.urdu)





// const user1 = {
//     name : "Noor-Ul-Hassan",
//     desc : "AI/ML Engineer | 2+ Years in Data Science | β MLSA | Co-Lead GDSC UMT | Gen AI Instructor at AKTI",
//     followers : 1030,
//     isPremium : true,
//     orgs : {org1: "UMt", org2 : "MLSA"}
// };


// user1.orgs.org2 = "AKTI"
// user1.followers = 1050;

// console.log(user1)

// console.log(objectname)

// Arithmetic Operators

// + - * / % ** ++ -- 


// let num1 = 5;
// --num1;
// let num2 = 6;
// let sum = num1 + num2;

// console.log(sum)


// let num1 = 7;
// ++num1;
// console.log(num1)

// let num2 = 17;
// num2++;
// console.log(num2)
// // console.log(age)


// Assignment operators

// let num1 = 10;
// num1 += 50;

// let num2 = 30;

// let sum = num1 + num2;

// console.log(sum)


// Comparsion operators

// let num1 = 8;

// let num2 = '8';

// console.log(num1 !== num2);

// let num1 = 20;
// let num2 = 30;

// console.log(num1>num2);
// console.log(num1<num2);
// console.log(num1<=num2);
// console.log(num1>=num2);


// Logical Operators

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!(true))


// let color = 'brown';

// if(color == 'white'){
//     console.log("the color is ", color)
// }
// else if (color == "blue"){
//     console.log("The color is", color)
// }
// else{
//     console.log("Color is not white, It's ", color)
// }


// let age = prompt("enter the age");

// console.log("age is ",age)


// use if else to design licnese issue /checker...If age is less than 18 than there is no licnse. and if age is between 18 and 40..You are leigble for licnese and you can drive..if your age is beteen 40 to 60...you are old age person...and betweeen 60 to 110..you are not elgible for lince..

// Loops


// console.log("hassan")
// console.log("hassan")
// console.log("hassan")
// console.log("hassan")
// console.log("hassan")


// for (let i = 1;i <=10 ; i++){
//     console.log("now the number is ", i)
// }



// let i = 1;

// while(i<=10){
//     console.log("now the number is ", i)
// }

// do{
//     console.log("now the number is ", i)
//     i++;
// }
// while(i<=10)


// for(let num = 2; num <=100; num++){
//     if(num%2 == 0)continue;

//     let isPrime = true;
//     for (let i = 3;i *i <=num; i+=2){
//         if (num%i==0){
//             isPrime = false;
//             break;
//         }
//     }

// if(isPrime){
//     console.log(num)
// }
// }

// Arrays
// let marks = [20,40,45]
// console.log(marks)

// let emptyarray = [];
// console.log(typeof emptyarray)

// let numer2 = new Array(1,2,3,4,5,6)
// console.log(numer2)

// let fruits = ["apple", "banana", "grapes"]
// console.log(fruits[fruits.length -2])

// fruits[3] = "Cherry"
// console.log(fruits[3])

// fruits.push("strawberry")
// console.log(fruits)

// let lastfruit = fruits.pop()
// console.log(fruits)
// console.log(lastfruit)

// fruits.unshift("Furit1")
// console.log(fruits)

// fruits.shift()
// console.log(fruits)

// console.log(fruits.length)

// let array = [1,2,4,6,7,3,5]
// let sorted_array = array.sort()
// console.log(sorted_array.reverse())

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for (let i of fruits){
//     console.log(i)
// }

// function greet(name){
//     console.log("Hello",name)
// }
// let name1 = prompt("enter the name value ")
// greet(name1)



// Task 1: Find the maximum Value in an Array
// Write a function that takes an array of numbers as a parameter and return the maximum value in an array. 



function MaxValue(arr1){
    let max = arr1[0] //Assume the first element is the maximum..

    for(let i = 1; i < arr1.length;i++){
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    return max;
}

const arr1 = [2,6,3,27,19];
const Maxnum = MaxValue(arr1)
console.log("The maximum value of this array is ", Maxnum)


function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let count = 0;

    for (let i of str.toLowerCase()){
        if (vowels.includes(i)){
            count++
        }
    }
    return count
}

const line1 = "Hello World, This is our class";
const numvalue = countVowels(line1);
console.log("The value is",numvalue)

// Write a function that takes a posictive number as a parameter and returns the sum of its digits.
// for example your number is 1234, so, the sum would be 1+2+3+4 = 10


function digitSum(num){
    let sum = 0;
    let numString = num.toString();

    for (let digit of numString){
        sum += parseInt(digit)
    }
    return sum;
}

const number = 3456;
const sum1 = digitSum(number);

console.log("The total sum is ", sum1)





















