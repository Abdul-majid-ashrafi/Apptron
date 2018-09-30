// {/* <title>Lecture 4 - | CONCATENATING TEXT STRINGS | PROMPTS | IF STATEMENTS | COMPARISON OPERATORS | </title> */}

// var str = "";
// alert(typeof  str); //string


// /** Concatenating Text Strings  **/

// var str1 = "I am ";
// var str2 = "Pakistani";
// var combinedString =  str1 + str2;
// document.write(combinedString); //I am Pakistani


// var username = "Ali";
// alert("Good Morning, " + "!");
// alert("Good Morning, "+ username  + "!"); //Good Morning, Ali!












/** Prompts  **/

// var username = prompt("What is your name?");
// alert("Hello, " + username);


// var course = prompt('Which course are you enrolled in?');
// alert(course);

// var email = prompt("Please enter your email address?", "abc@xyz.com");
// document.write(email + "<br>");


// /** prompt returns string type data **/
// var userResponse = prompt("Please enter first number?");
// alert(typeof userResponse);
// document.write("userResponse is " + userResponse);
// document.write("<br>");
// document.write("Type of userResponse is " + typeof userResponse); //string
// document.write("<br>");



// /** problem - prompt returns string type data **/
// var num1 = prompt("Please enter first number?");
// var num2 = prompt("Please enter second number?");
// var sum = num1 + num2; //problem
// document.write("Sum of two numbers is :" + sum); //wrong sum
// document.write("<br>");
















/** parseInt / parseFloat methods **/

//  /** solution - parseInt / parseFloat  **/
//  var num1 = +prompt("Please enter first number?");
// //  num1 = parseInt(num1);
//  var num2 = +prompt("Please enter second number?");
// //  num2 = parseInt(num2);
//  var sum = num1 + num2;
//  document.write("Sum of two numbers is :" + sum);
// //  document.write("<br>");



//Integer = 4
//Float = 2.44

// var str = '52.5kgs';
// var weight = parseInt(str); //52
// alert(weight + typeof weight); //number
// var weight = parseFloat(str); //52.5
// alert(weight + typeof weight); //number

// var username = "Ali";
// var greeting = "Good Morning, ";
// var operator   = "!";

// var completeMessage = greeting + username + operator;
// document.write(completeMessage);
// document.write("<br>");


// var result =  "2 plus 2 equals " + 2 + 2; 
// document.write(result);
// document.write("<br>");





// var result =  "2 plus 2 equals " + (2 + 2); 
// document.write(result);
// document.write("<br>");












/** boolean - a data type **/
/** possible values - true/false **/

// var verified = true;
// //var verified = false;
// document.write(verified);
// document.write("<br>");
// document.write(typeof  verified);
// document.write("<br>");

















/** Comparison Operators **/

/*

 > is greater than                  //exclusive
 < is less than                     //exclusive
 >= is greater than or equal to     //inclusive
 <= is less than or equal to        //inclusive
 ==   values on both sides are equal
 !=   values on both sides are not equal
 ===  values and types on both sides are equal
 !==  values and/or types on both sides are not equal

 */

// alert(18 == "18"); // true
// alert(18 != "18"); // false

// alert(18 === "18"); // false
// alert(18 === 18); // true 
// alert(18 !== "18"); // true

// alert(10 > 9) // /true
// alert(10 < 9) // false 











/** Conditional Statements - if statement **/

/*
if(condition)
{
    //do this
    //and this
    //...
}
*/

// var score = 100;
// var score = 89;
// if (score === 100) {
//     alert("Perfect Score.");
//     alert("Congratulations");
// }
// alert("result computed");

// if (score !== 100) {
//     alert("Not a Perfect Score.");
//     alert("Try again");
// }
// alert("result computed");




// var score = 0;
// var userIQ;
// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Khi";
// if (x == correctAnswer) {
//     score++;
//     alert("Correct Answer");
//     userIQ = "Genius";
// }
// if (score > 0) {
//     alert("Congrats" + " " + userIQ);
// }















/** IF...Else statements **/

// var score = 30;
// if (score >= 70) {
//     alert("Congratulations");
// } else {
//     alert("Sorry you have failed");
//     alert("Please give the test again");
// }








/** Else If statements **/

//   var percentage = 82;
//   if (percentage >= 80) {
//       alert("A-one grade");
//   }
//   else if (percentage >= 70) {
//       alert("A grade");
//   }
//   else if (percentage >= 60) {
//       alert("B grade");
//   }
//   else {
//       alert("Sorry. You have failed");
//   }




/** Logical operators **/

// AND - &&
// OR - ||
// NOT - !

//        true && true   = true
//        false && true  = false
//        false && false = false
//        true && false  = false

//true || true   = true
//false || true  = true
//false || false = false
//true || false  = true

// var gender = "female"
// if ((gender == "male" && age < 25) || (gender == 'female' && age < 30)) {
//     //     true
// }





// /** Testing multiple conditions in one statement **/

// var test = "JS";
// var score = 65;

// if (test === "CSS" && score > 60) {
//     alert("You have passed CSS test");
// }
// if (test === "JS" && score > 60) {
//     alert("You have passed JS test");
// }



// var age = 23;
// var residence = "UK";
// var score = 8.2;

// if (age > 20 || residence == "US") {
//     alert("You can proceed");
// }

// if (age > 20 || (residence == "US" && score > 8.0)) {
//     alert("You can proceed");
// }




// var time = parseInt(prompt("Enter time in 24 hour format E.g. 1300 for 1pm", "1300"));
// if (time >= 0000 && time < 1200) {
//     message = "Good morning!";
// } else if (time >= 1200 && time < 1700) {
//     message = "Good afternoon!";
// } else if (time >= 1700 && time < 2100) {
//     message = "Good evening!";
// } else if (time >= 2100 && time <= 2359) {
//     message = "Good night!";
// }
// alert(message);






/** Nested If Statements **/

// var age = 24;

// if (age > 20) {
//     alert("You can proceed to further assessment");
//     if (age + 2 >= 25) {
//         alert("You'll be able to give driving test in near future");
//     }
// }
// else {
//     alert("We are Sorry");
// }


// var num = false;
// var msg;
// (num) ? msg = "Success" : msg = "fail"
// alert(msg)




// var text;
// switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Saturday";
//         break;
//     case 0:
//         text = "Today is Sunday";
//         break;
//     default:
//         text = "Looking forward to the Weekend";
// }

// document.write(text)


