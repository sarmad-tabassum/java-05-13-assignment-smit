// var a = 10;

// document.write(`Result: <br> The value of a is: ${a++}`);
// document.write(` <br> <br> The value of ++a is: ${a} <br> Now the value of a is: ${a}`);
// document.write(` <br> <br> The value of a++ is: ${a++} <br> Now the value of a is: ${a}`)
// document.write(` <br> <br> The value of --a is: ${--a} <br> Now the value of a is: ${a}`)
// document.write(` <br> <br> The value of a-- is: ${a--} <br> Now the value of a is: ${a}`)















// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write(`a is ${a} <br> b is ${b} <br> result is ${result}`) 















// var a = prompt("Enter your name")
// alert(`Hello ${a}`)















// var table = +prompt("Enter a number to show its multiplication table" , "5")
// var length = 10;

// if(table == "" || table < 0 || isNaN(table) || table > 9999){
//     document.write("Please enter a valid number")
// }
// else{
//     document.write(`<center>
//                              <h2> Multiplication table of ${table} </h2>  
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















// var subName1 = prompt("Enter first subject name" , 'English');
// var subName2 = prompt("Enter second subject name" , "Math");
// var subName3 = prompt("Enter third subject name" , "Urdu");
// var totalMarks = 100;
// var subMark1 = +prompt("Enter first subject marks" , "54");
// var subMark2 = +prompt("Enter second subject marks" , "54");
// var subMark3 = +prompt("Enter third subject marks" , "48");
// var percentage = (subMark1 + subMark2 + subMark3) / (totalMarks * 3) * 100;
// var totalObtainedMarks = subMark1 + subMark2 + subMark3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// if(subName1 == "" || subName2 == "" || subName3 == "" || subMark1 == "" || subMark2 == "" || subMark3 == ""){
//     document.write("Please enter valid input");
// }
// else{
//     document.write(`<center> <h1> Marks Sheet </h1> <br> <table style="border: 1px solid black; padding: 10px; font-size: 20px; font-weight: bold; text-align: center"> 
//         <tr> 
//         <th style="border: 1px solid black; padding: 10px; font-size: 20px; font-weight: bold; text-align: center"> Subject Name </th>
//         <th style="border: 1px solid black; padding: 10px; font-size: 20px; font-weight: bold; text-align: center"> Total Marks </th>
//         <th style="border: 1px solid black; padding: 10px; font-size: 20px; font-weight: bold; text-align: center"> Obtained Marks </th>
//         <th style="border: 1px solid black; padding: 10px; font-size: 20px; font-weight: bold; text-align: center"> Percentage </th>
//         </tr>
        
//         <tr> 
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subName1} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${totalMarks} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subMark1} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${percentage} </td>
//         </tr>
        
//         <tr> 
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subName2} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${totalMarks} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subMark2} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${percentage} </td>
//         </tr>
        
//         <tr>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subName3} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${totalMarks} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${subMark3} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; text-align: center"> ${percentage} </td>
//         </tr>

//         <tr>
//         <td style="empty-cells: hide;"> <td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; font-weight: bold; text-align: center"> ${totalObtainedMarks} </td>
//         <td style="border: 1px solid black; padding: 10px; font-size: 15px; font-weight: bold; text-align: center"> ${totalPercentage} </td>
//         </tr>

//         </table> </center>`)
// }
