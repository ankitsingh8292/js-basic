// // // PART 02 //

// // // CONSOLE.LOG & LINKING JS FILE //
// // console.log("Hello world!");
// // console.log("Apna college");
// // let a = 10;
// // let b = 5;
// // console.log("sum is :",a+b);

// // // TEMPLATE LITERALS //
// // let pencilprice = 10;
// // let erasorprice =5;
// // let output = "The total price is : "+ (pencilprice + erasorprice) + " Rupees."
// // let output = `The total price is : ${pencilprice + erasorprice} Rupees.`;  //back ticks
// // console.log(`The total price is : ${pencilprice + erasorprice} Rupees.`);

// // // OPERATORS IN JS //
// // // Arithmetic operators //
// // let a = 10;
// // let b = 5;
// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// // console.log(a % b);
// // console.log(a ** b);

// // // unary operators//
// // let a = 10;
// // let b = 5;
// // console.log(a++);
// // console.log(++a);

// // // Assignment operators//
// // let a =10;
// // let b =5;
// // b = a;
// // console.log(b); //10

// // comparison operator // comparison operator to compare 2 values 
// // let age =16;
// // console.log(age < 18); //True

// // /COMPARISON FOR NON-NUMBERS //
// // es main har latter ka ek apna value hota hi jis se hum koi bhi letter ya sign ka value 
// // ke hishab se chhota or bada ka pahhan kar sakte hai   or mera output jo aayega wo true or false form  main aayega

// // CONDITIONAL STATEMENTS // if-else , nested if-else , switch
// console.log("before my if statement");
// let age =23;
// if(age>=18){
//     console.log("you can vote");
// }
// if (age < 18){
//     console.log("you can vote");

// }
// console.log("after my statement");


// let firstName ="ankit";
// if (firstName ="shradha"){
//     console.log(`welcome ${firstName}`);
// }

// PRACTICE QS 01 // create a traffic light system that showa what to do based on color
// let color = "yellow"
// if(color === "red") {
//     console.log("stop! light color is red");
// }
// if (color === "yellow") {
//     console.log("slow down. light color is yello");
// }
// if (color === "green") {
//     console.log("Go. light color is green");
// }


// // ELSE-IF STATEMENT // es me jab pehele wali condition fail ho tabhi dusre wali condition check hogi 
// // but jo hamara only if wala condition main true ho ya false wo sabko check karega barbar cahe value True aaye ya False 
// // let age =14;
// // if (age >=18) {
// //     console.log("you can vote");
// // }
// // else if(age<=18) {
// //     console.log("you cannot vote");
// // }
// // else if (age < 18) {
// //     console.log("you cannot vote2");
// // }

// // // JUST LIKE  A MARKING SYSTEM //
// // let marks =16;

// if(marks >=80) {
//     console.log("A+");
// }
// else if(marks>=60) {
//     console.log("A");
// }
// else if (marks >=33) {
//     console.log("B")
// }
// else if (marks <33) {
//     console.log("F");
// }


// // ELSE STATEMENT // jab upper wali sari satement faulse ho jaye to hame kiya kaam karna cahiye 

// let age =17;
// if(age >= 18){
//     console.log("you can vote");
// }
// else {
//     console.log("you cannot vote");
// }

// // let color ="blue";
// // if(color === "red") {
// //     console.log("stop");
// // }
// // else if(color === "yellow"){
// //     console.log("slow down");
// // }
// // else if (color ==="green") {
// //     console.log("go");
// // }
// // else {
// //     console.log("traffic light id broken");
// // }


// // PRACTICE QS 02 // Create a system to calculate popcon price based on the size customber asked for:

// let size ="S" ;
// if (size === "XL") {
//     console.log("price is Rs. 250");
// }
// else if (size === "L"){
//     console.log("price is Rs. 200");
// }
// else if (size === "M"){
//     console.log("price is Rs. 100");
// }
// else if (size === "S"){
//     console.log("price is Rs. 50");
// }


// // NESTED IF-ELSE // nesting is  writing if-else inside if-else statements.it can have many levels.

// let marks =22;
// if(marks >= 33){
//     console.log("Pass");
//     if(marks >=80){
//         console.log("Grade : o");
//     } else {
//         console.log("Grade : A");
//     }
// }
// else {
//     console.log("Better luck next time!");
// }


// // LOGICAL OPERATORS // logical operator combine expressions
// // Or-Or operator//
// let mark = 75;

// if (mark >= 33 || mark >=80) {
//     console.log("Pass");
//     console.log("A+");
// }

// // And-And operator//
// let mark = 90;

// if (mark >= 33 && mark >=80) {
//     console.log("Pass");
//     console.log("A+");
// }

// // logical operators// jis bhi exp ke samne ! laga dete hai to uski valu reverse ho jati hai 
// let mark = 75;
// if ((mark > 33 && mark <= 80 ) || !false) {
//     console.log("Pass");  //Pass
// }

// // PRACTICE QS 03 // A"good string" is a string that starts with the letter 'a' & has a length > 3. write a program to find if a string is good or not
// let str ="ankit";

// if (str[0] === "a" && str.length >3) {
//     console.log("good string");
// }
// else {
//     console.log("not a good string");
// }

// // PRACTICE QS 04 // [predict the output of following code]
// let num = 12;
// if((num%3 === 0) && ( ( num+1 === 15) || (num-1 ===11) ) ){
//     console.log("safe");
// }else {
//     console.log("unsafe");
// }   //output    safe


// // TRUTHLY & FALSY //
// if ("apnacollege") {
//     console.log("it has true value");
// }else {
//     console.log("it has false value");
// }

// // SWITCH STATEMENT // used when we have some fixed values thatbwe need to compare to.
// let color ="red";

// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow" :
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default :
//             console.log("Broken Light")
// }

// //  // PRACTICE QS 05 // use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// let day = 7;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         case 7:
//         console.log("Sunday, fun day");
//         break;
//         default:
//             console.log("Wrong day!");
// }


// //  ALERT & PROMPT //
// alert("this is a simple alert!");
// console.log("this is a simple log");
// console.error("this is an error msg");
// console.warn("this is a warning msg");

// let firstName = prompt("enter your name : ");
// console.log(firstName);

// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");
// console.log("welcome", firstName,"",lastName, "!");


// //    ASSIGNMENT QUESTIONS & SOLUTIONS      //

// // QS1