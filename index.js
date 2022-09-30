///Code your solution in this file!

const returnFirstTwoDrivers = function () {
    const array = ["Antonia", "Nuru",'Amari', 'Mo'] 
    const newArray = [...array]
    return newArray.slice(0,2)
}
// console.log(returnFirstTwoDrivers());

const  returnLastTwoDrivers = function (){
    const array = ["Antonia", "Nuru",'Amari', 'Mo'] 
    const newArray = [...array]
    return newArray.slice(2,4)
} 
// console.log(returnLastTwoDrivers());

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// console.log(selectingDrivers);

 function createFareMultiplier(num1) {
    return function fare (num2){
       return num1 * num2
    }   
}

const fareDoubler =  function fare(num2){
   return  num2 * 2
}

const fareTripler = function fare(num3) {
    return num3 * 3
}



    
// const selectDifferentDrivers = function (array, function1){
//     const fun1 = returnFirstTwoDrivers()
//       const fun2 = returnLastTwoDrivers()
//       if (function1 = fun1){
        // return returnFirstTwoDrivers()
//       }else if (function1 = fun2 ){
//         return returnLastTwoDrivers()
//       }
// }
 const selectDifferentDrivers = function(array, driverReturnerFunction) {
  // const array = ["Antonia", "Nuru",'Amari', 'Mo'] 
  return driverReturnerFunction()
} 



