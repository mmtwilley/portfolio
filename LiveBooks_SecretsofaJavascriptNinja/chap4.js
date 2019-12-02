// // Playing with the rest parameter


// var sum = (...inputs) => {
//     let sum = 0;
//     for(i of inputs){
//         sum += i
//     }
//     return sum;
// }

// console.log(sum(10,14,55))

// function getSamurai(samurai){
//     "use strict"
  
//     arguments[0] = "Ishida";
  
//     return samurai;
//   }
  
//   function getNinja(ninja){
//     arguments[0] = "Fuma";
//     return ninja;
//   }
  
//   var samurai = getSamurai("Toyotomi");
//   var ninja = getNinja("Yoshi");
  
//   console.log(samurai)
//   console.log(ninja)


  function whoAmI1(){
    "use strict";
    return this;
  }
  
  function whoAmI2(){
    return this;
  }
  
  assert(whoAmI1() === window, "Window?");
  assert(whoAmI2() === window, "Window?");