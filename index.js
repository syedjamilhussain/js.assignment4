// CHAPTERTS 17  TO 20 . 
//  QUESTION NUMBER 1 
 let multiDimensionalArray = [[]];

// QUESTION NUMBER 2 
 let matrix = [
     [0,1,2,3],
     [2,1,0,1],
     [1,0,1,2],
    
 ];

  //  QUESTION NUMBER 3
   for(var i = 1;i <= 10 ; i++){
     document.write(i +"<br>");
   }

//   QUESTION NUMBER 4


 for (let i = 4; i <= 4; i++) {
    for(var j = 1; j <= 10 ;j++){
         document.write(i * j + "<br>");
        
     }
 }

// QUESTION  NUMBER 5

 let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
 }
  
// QUESTION NUMBER 6 A

 for(var  i = 1;i<=10;i++){
   document.write(i); 
 }
 document.write("<br>"+"<br>");
// QUESTION NUMBER 6 B

 for(var  i = 10;i >=1;i--){
   document.write(i); 
 }
 document.write("<br>"+"<br>");

// QUESTION NUMBER 6 C

 for (let i = 0; i <= 20; i += 2) {
   document.write(i);
 }
 document.write("<br>"+"<br>");


// QUESTION NUMBER 6 D
 for (let i = 1; i <= 20; i += 2) {
   document.write(i);
 }
 document.write("<br>"+"<br>")

// QUESTION NUMBER 6 E



 for(let i = 2; i <= 20; i += 2) {
     document.write(i + "k");
 }
 document.write("<br>"+"<br>");

// QUESTION NUMBER 7

 let A = ["cake", "apple pie", "cookie", "chips", "patties"];

 let searchTerm = prompt("Enter the name of the item you want to search for:");

 let isFound = false;

 for (let i = 0; i < A.length; i++) {
     if (A[i].toLowerCase() === searchTerm.toLowerCase()) {
         isFound = true;
         break;
     }
 }

 if (isFound) {
     alert(searchTerm + " is found in the list.");
 } else {
     alert(searchTerm + " is not found in the list.");
 }
 document.write("<br>"+"<br>");

// QUESTION NUMBER 8

 let A1 = [24, 53, 78, 91, 12];

 let largest = A1[0];

 for (let i = 1; i < A1.length; i++) {
     if (A1[i] > largest) {
         largest = A1[i];
     }
 }

 document.write("The largest number in the array is:", largest);

 document.write("<br>"+"<br>");

// QUESTION NUMBER 9 


 for(var i = 5 ; i <= 100;i += 5){
   document.write(i + "<br>");
 }
 document.write("<br>"+"<br>");

//  CHAPTERTS 17  TO 20 .
// QUESTION NUMBER 1 

let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");
 document.write("<br>"+"<br>");

// QUESTION NUMBER 2

 let favoriteMobile = prompt("Please enter your favorite mobile phone model:");

    
      let inputLength = favoriteMobile.length;

    
     document.write("Your favorite mobile phone model is: " + favoriteMobile + "<br>");
    document.write("Length of your input is: " + inputLength);

// QUESTION NUMBER 3
 let word2 = "Pakistani";


 let index = word2.indexOf("n")
 document.write("The index of letter 'n' in the word 'Pakistani' is: " + index)
 document.write("<br>"+"<br>")
//  QUESTION NUMBER 4
 let text = "Hello World";
 let lastIndex = text.lastIndexOf('l');
 document.write("Result: " + lastIndex)
 document.write("<br>"+"<br>")
//  QUESTION NUMBER 5
 let word1 = "Pakistani";
 let character = word1.charAt(3);
 document.write("Result: " + character)
 document.write("<br>"+"<br>");

//  QUESTION NUMBER 6 
 let firstName1 = prompt("Enter your first name:");
 let lastName1 = prompt("Enter your last name:")
 let fullName1 = firstName1.concat(" ", lastName1)
 alert("Hello, " + fullName1 + "!");
 document.write("<br>"+"<br>");
  // QUESTION NUMBER 7
 let word = "Hyderabad";
     let newWord = word.replace("Hyder", "Islam");
     document.write("Result: " + newWord);

     document.write("<br>"+"<br>");

    // QUESTION NUMBER 8

    var message = "Ali and Sami are best friends. They play cricket and football together.";


    var newMessage = message.replace(/and/g, "&");

   
     document.write("Result: " + newMessage)
     document.write("<br>"+"<br>");
      // QUESTION NUMBER 9
     var num = 35.36;

     
     var result = num.toString().replace('.', '')
     
     document.write("Result: " + result);
      document.write("<br>"+"<br>")
    //  QUESTION NUMBER 1
     let username = prompt("Enter your username:")
     while (username.includes('!') || username.includes(',') || username.includes('.') || username.includes('@')) {
         username = prompt("Invalid username. Do not use special symbols [@ . , !]. Enter again:");
     }

     alert("Welcome, " + username + "!");
      document.write("<br>"+"<br>");










  
