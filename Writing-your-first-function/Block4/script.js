/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
    alert(`Hello ${name}`)
}
sayHello("shivam");


  /*
  2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
  fullName.
  Example:
    getFullName("John", "Snow"); // "John Snow"
    getFullName("Nelson", "Mandela"); // "Nelson Mandela"
  */
 function getFullName(firstName,lastName){
       return `${firstName} ${lastName}`
 }
 let fullName = getFullName("John", "Snow")
 let fullName1 = getFullName("Nelson", "Mandela")
 alert(fullName)
 alert(fullName1)

  /*
  3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
  the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`
  Example:
  addTwoNumbers(10, 22); // 32
  addTwoNumbers(20, 32); // 32
  addTwoNumbers(10, "100"); // Alert Enter Valid Input
  */
 function addTwoNumbers(firstNum,secondNum) {
    if(firstNum === Number(firstNum) && secondNum === Number(secondNum)){
        return (`${firstNum + secondNum}`)
    }else{
        return ("Enter Valid Input")
    }
 }
 let sum1 = addTwoNumbers(10,22);
 let sum2 = addTwoNumbers(20,32);
 let sum3 = addTwoNumbers(10,"100");
 console.log(sum1);
 console.log(sum2);
 console.log(sum3);

  
  /*
  4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
  can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
  is of any other data type alert `Enter Valid Input`
  Example:
  calc(10, 20, 'add'); // 30
  calc(20, 10, 'sub'); // 10
  calc(20, 10, 'mul'); // 200
  */
 function calc(firstNum,secondNum,operation) {
    if (typeof secondNum !== "number" || typeof secondNum !== "number"){
        alert (`Enter Valid Input`)
    }else{
         switch (operation) {
          case "add":
            return firstNum + secondNum;
          case "sub":
            return firstNum - secondNum;
          case "mul":
            return firstNum * secondNum;
          case "div":
            return firstNum / secondNum;
            default:
              alert ("enter valid operation")
         }
    }
 }
 let addition = calc(10, 20, 'add'); // 30
 console.log(addition);
 let subtraction = calc(20, 10, 'sub'); // 10
 console.log(subtraction);
 let multiple = calc(20, 10, 'mul'); // 200
 console.log(multiple)
  /*
  5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
  on if the year id leap year or not.
  isLeapYear(2000); // true
  isLeapYear(2001); // false
  */
 function isLeapYear(number){
  if(number%4 === 0){
    return 'true'
  }else{
     return `false`
  }
 }
 let leapYears = isLeapYear(2000);
 let notleapYears = isLeapYear(2001);
 console.log(leapYears);
 console.log(notleapYears);
 
 
  /*
  6. Create a function named `addTwoNumbers` that accepts a number and return the factorial of the number.
  */
  function addTwoNumbers(number){
    let factorial = 1;
     for(let i =5; i>=1;i--){
      factorial *= i
     }
     console.log(`value ${number} and factorial ${factorial}`)
  }
  addTwoNumbers(5);