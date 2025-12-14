// var a = 3;
// var b = 5;

// var sumOf = a + b;
// document.write(`Sum of ${a} and ${b} is ${sumOf}`);


// var subOf = a - b;
// document.write(`Subtraction of ${a} and ${b} is ${subOf}`);


// var mulOf = a * b;
// document.write(`Multiplication of ${a} and ${b} is ${mulOf}`);


// var divOf = a / b;
// document.write(`Division of ${a} and ${b} is ${divOf}`);


// var modulusOf = a % b;
// document.write(`Modulus of ${a} and ${b} is ${modulusOf}`);


















// var abc = 5;
// document.write(`<center> Value of Variable after Declaration is: ${abc} <br> </center>`)
// document.write(`<center> <br> Initialize Value is: ${abc++} <br> </center>`)
// document.write(`<center> <br> Value of Variable after Increment is: ${abc} <br> </center>`)

// abc = abc + 7;
// document.write(`<center> <br> Value of Variable after Addition is: ${abc--} <br> </center>`)

// document.write(`<center> <br> Value of Variable after Decrement is: ${abc} <br> </center>`)

// abc = abc % 3;
// document.write(`<center> <br> The remainder is: ${abc} <br> </center>`)



















// var ticketPrice = 600;
// var ticketQuantity = 5;
// var total = ticketPrice * ticketQuantity;
// document.write(`Total cost to buy ${ticketQuantity} tickets to a movie is ${total} PKR`)
























// var table = prompt("Enter a number to show its multiplication table");
// var length = 10;

// if (table === "") {
//     document.write("Please enter a valid number");
// }

// else{
//     table = parseInt(table);
//     document.write(`<center> <h2> Multiplication table of ${table} </h2>  
//                              ${table} x 1 = ${table * 1} <br>
//                              ${table} x 2 = ${table * 2} <br>
//                              ${table} x 3 = ${table * 3} <br>
//                              ${table} x 4 = ${table * 4} <br>
//                              ${table} x 5 = ${table * 5} <br>
//                              ${table} x 6 = ${table * 6} <br>
//                              ${table} x 7 = ${table * 7} <br>
//                              ${table} x 8 = ${table * 8} <br>
//                              ${table} x 9 = ${table * 9} <br>
//                              ${table} x 10 = ${table * 10} 
//                     </center>`);
// }






















// var cTof = prompt("Enter temperature in Celsius");
// var fToc = prompt("Enter temperature in Fahrenheit");

// if (cTof === "" && fToc === "") {
//     document.write("Please enter a valid number");
// }
// else{
//     cTof = parseInt(cTof);
//     fToc = parseInt(fToc);
// }

// document.write(`${cTof}°C is ${cTof * 9/5 + 32}°F`);
// document.write(`<br> ${fToc}°F is ${((fToc - 32) * 5/9)}°C`);






















// var priceFirstitem = prompt("Enter price of first item");
// var qFirstitem = prompt("Enter quantity of first item");
// var priceSeconditem = prompt("Enter price of second item");
// var qSeconditem = prompt("Enter quantity of second item");
// var shippingCharges = 100;

// if( priceFirstitem === "" && qFirstitem === "" && priceSeconditem === "" && qSeconditem === ""){
//     document.write("Please enter a valid number");
// }
// else{
//     priceFirstitem = parseInt(priceFirstitem);
//     qFirstitem = parseInt(qFirstitem);
//     priceSeconditem = parseInt(priceSeconditem);
//     qSeconditem = parseInt(qSeconditem);
// }

// document.write(`<center> Price of first item is <u> ${priceFirstitem} </u> <br> Quantity of first item is <u> ${qFirstitem} </u> <br> Price of second item is <u> ${priceSeconditem} </u> <br> Quantity of second item is <u> ${qSeconditem} </u> <br> Shipping Charges <u> ${shippingCharges} </u> <br> <br> Total cost of your order is <u> ${priceFirstitem * qFirstitem + priceSeconditem * qSeconditem} </u> </center>`);
























// var totalMarks = 500;
// var studentMarks = prompt("Enter your marks");
// var percentage = (studentMarks / totalMarks) * 100;

// if(studentMarks === ""){
//     document.write("Please enter a valid number");
// }

// else if(studentMarks > 500){
//     document.write("Please enter a valid number");
// }

// else if(studentMarks < 0){
//     document.write("Please enter a valid number");
// } 

// else{
//     studentMarks = parseInt(studentMarks);
//     document.write(`<center> Total marks: <u> ${totalMarks} </u> <br> Marks obtained: <u> ${studentMarks} </u> <br> Percentage: <u> ${percentage} </u> </center>`);
// }





























// var usDollar = 104.80;
// var saudiRiyal = 28;
// var totalUS = 10;
// var totalSR = 25;


// // var totalAmount = prompt("Enter total amount in PKR");

// // if(totalAmount === ""){
// //     document.write("Please enter a valid number");
// // }

// // else if(totalAmount < 0){
// //     document.write("Please enter a valid number");
// // }

// // else{
// //     totalAmount = parseInt(totalAmount);
// // document.write(`<center> Total currency in PKR: <u> ${usDollar * totalAmount + saudiRiyal * totalAmount} </u> </center>`);
// // }

// document.write(`<center> Total currency in PKR: <u> ${usDollar * totalUS + saudiRiyal * totalSR} </u> </center>`);























// var number = 5;
// document.write(`<center>Initialized number is: 5 <br> Adding Initialize number by 5 <br> Multipy by 10 <br> Dividing the result by 2 <br> <br> Result is: ${((number + 5) * 10) / 2} </center>`)























// var currentYear = prompt("Enter current year");
// var birthYear = prompt("Enter birth year");

// if(currentYear == "" || birthYear == ""){
//     document.write("Please enter a valid number");
// }

// else if(currentYear < 1950 || currentYear > 2025){
//     document.write("Please enter a valid number");
// }

// else if(birthYear < 1950 || birthYear > 2025){
//     document.write("Please enter a valid number");
// }

// else{
//     document.write(`<center> Your age is: <u> ${currentYear - birthYear} </u> </center>`);
// }






























// // var radius = prompt("Enter radius of a circle");
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * 2;

// // if(radius == "" || radius < 0){
// //     document.write("Please enter a valid number");
// // }

// // else{
// //     document.write(`<center> Radius of a circle is: ${radius} <br> The circumference is: ${circumference} <br> The area is ${area} </center>`);
// // }

// document.write(`<center> Radius of a circle is: ${radius} <br> The circumference is: ${circumference} <br> The area is ${area} </center>`);






























// // var favSnack = prompt("Enter your favourite snack");
// // var currentAge = prompt("Enter your current age");
// // var maxAge = prompt("Enter your maximum age");
// // var amountPerDay = +prompt("Enter amount of snack per day");

// var favSnack = 'Kurkure';
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

// // if(favSnack == "" || currentAge == "" || maxAge == "" || amountPerDay == ""){ 
// //     document.write("Please enter a valid number");
// // }
// // else{
// // document.write(`<center> <h1> The Lifetime Calculator: </h1> <br> Favourite Snack: ${favSnack} <br> Current age: ${currentAge} <br> Estimated Maximum Age: ${maxAge} <br> Amount of snacks per day: ${amountPerDay} <br> You will need ${totalSnacks} ${favSnack} to last you until the ripe old age of ${maxAge} </center>`);
// // }

// document.write(`<center> <h1> The Lifetime Calculator: </h1> <br> Favourite Snack: ${favSnack} <br> Current age: ${currentAge} <br> Estimated Maximum Age: ${maxAge} <br> Amount of snacks per day: ${amountPerDay} <br> You will need ${totalSnacks} ${favSnack} to last you until the ripe old age of ${maxAge} </center>`);
