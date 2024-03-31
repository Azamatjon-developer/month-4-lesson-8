// 1 task start   

// let list1 = [1,2,4] 
// let list2 = [1,3,4] 
// let result = [...list1 , ...list2] 
// result.sort((a,b) => a - b) 
// console.log(`Ikki array birlashmasi o'sish tartibida ${result}joylashtiril`) 


// 1 task finished  



// 2 task starts 

//  1 usul 
// let numbers = [4,5,6,7,0,1,2] 
// let result = 0 

// function findGeneralIndex (params) {

//     for(let i = 0 ; i < numbers.length ; i++) {
//         if (numbers[i] == params) {
//              result = i
//         }
//     }
// }
// findGeneralIndex(0) 

// console.log(`Kiritilgan son ${result} indexda joylashgan `);

// 2 metodika stars 

// function findIndex (params) {
//     let arr = [4,5,6,7,0,1,2]

//    let index = arr.indexOf(params)
//    console.log(index);

// }

// findIndex(0)

//  2 metodika finish 
// 
//  2 task finished 



//  3 task starts  


// function findValue (params) {
//     let numbers = [5,7,7,8,8,10] 
//     let result = []

//     for(let i = 0 ; i < numbers.length ;i++ ) {
//         if(numbers[i] === params) {
//             result.push(numbers[i])


//         }

//     }
//     if(result.length) {
//         console.log(result)

//     }else{
//         console.log(`Berilgan array ichida hech narsa yuq`);
//     }
// }

// findValue(8) 

//  3 task finished  

//  4 task starts 

// function findDifference (params) {

//     let arr =[1,2,3,4,5,99,6,7,8,9,100] 

//     let max = arr[0]
//     let min = arr[0] 

//     for (let i = 1; i <= arr.length; i++) {
//        if (max < arr[i]) {
//         max = arr[i]  
//        }

//       if (min > arr[i]){
//         min = arr[i]
//       }
//     }

//     console.log(`params max sondan ${max - params} ga kichik`);
//     console.log(`params min sondan ${params - min} ga katta`);
// }

// findDifference(4)




// 4 task finished 


// 5 task starts 


// let objNumber = {number1 : 22, number2 : 2, number3: 3} 

// let values = Object.values(objNumber) 

// function addValues (params) {
//         values.unshift(params)
//         values.push(params)
// }

// addValues (99) 

// console.log(`Berilgan objects ga ham boshidan ham oxiridan ham ${values} qo'shiladi`); 

//  5 task finished  

//  6 task starts 


// function findValue (params) {
    
//     let objOne = {numberOne: 10, numberTwo:20}
//     let objTwo = {number3: 11, number4:21}
//     let addObjects = {...objOne, ...objTwo}

//     let changeObjects = Object.values(addObjects)
//     const max = Math.max(...changeObjects) 
//     const min = Math.min(...changeObjects) 
//     console.log(`Array ichidagi max son ${max} ga teng`);
//     console.log(`Array ichidagi max son ${min} ga teng`);
    
    
//     console.log(`params max sondan ${max - params} ga kichik`);
//     console.log(`params min sondan ${params - min} ga katta`);

// }

// findValue(15)  

// 6 task finished 


// 7 task starts 


// function numbers (params) {
//     let obj1 = {num1:11 , num2: 12}
//     let obj2 = {num3:13 , num4: 14}
//     let obj3 = {num5:15 , num6: 16} 

//     let addObjects = {...obj1, ...obj2, ...obj3}
//     const changeObjects = Object.values(addObjects)
//     let sum = 0 

//     for(let i = 0 ; i < changeObjects.length; i++) {

//        sum += changeObjects[i]
//     }

//     if (sum > params) {
//         console.log(`array valuelari yigindisi  functiondagi qiymatdan ${sum - params} ga katta`); 

//     }else{
//         console.log(`functionda berilgan parametr qiymati array yigindisidan ${params - sum} ga katta`);
//     }

// }

// numbers(1)

// 7 task finished  


//  8 task starts 


// let arr1 = [1,3,2,0,4,5] 
// let max = arr1[0]
// let min = arr1[0] 

// for (let i = 0 ; i < arr1.length; i++) {
//     if (arr1[i] > max) {
//         max = arr1[i]

//     }
//     if (arr1[i] < min) {
//         min = arr1[i]
//     }
// }

// const maxIndex = arr1.indexOf(max) 
// const minIndex = arr1.indexOf(min)  

// arr1[maxIndex] = min 
// arr1[minIndex] = max


// console.log(arr1);

//  8 task finished 


