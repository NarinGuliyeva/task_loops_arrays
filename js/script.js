// FIBONACCI
// let x = 1;
// let b = 1;
// let c;
// function findNumber(a) {
//     if( a ==1 || a==2) {
//         return 1
//     }
//   for (let i = 1; i <= a - 2; i++) {
//     c = x + b;
//     x = b;
//     b = c;
//   }
//   return c;
// }
// // n-ci siradaki fibonacci ededini tap.
// console.log(findNumber(4));

// TASK A

// let newArray = [...new Set(myArray)] // [1,2,"salam","narin",3,22,"a"]
// console.log(newArray);
//   let a = 0;
//   let x ;
//   function say(myArray) {
    //     for (let i = 0; i < newArray.length; i++) {
        //     for (let j = 0; j < myArray.length; j++) {
//       if (newArray[i] === myArray[j]) {
//         a++;
//       }
//     }
//     console.log(`  ${myArray[i]} ==> ${a} eded `);
//     a = 0;
//   }
//   }
//  say(myArray)

// II YOL
// let myArray = [1, 2, "salam", 2, "narin", 3, 22, "a", 2, "salam"];

// let newArray = myArray.filter((item,index)=> index === myArray.indexOf(item))
// // newArray = [1,2,"salam","narin",3,22,"a"]

// newArray.forEach((item)=> {
//  let count = myArray.filter((element) => element ===item).length
//  console.log( ` ${item} sayi ${count} ` );
// } )


// TASK B
// function arrayEquality(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       return false;
//     }
//     if (!arr1.includes(arr2[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arrayEquality([3,2,1], [2,2,3]));

// II YOL
// function equality(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
   
//     for (let key of arr1) {
//         let a = 0;
//         let b = 0;
//       for (let key1 of arr1) {
//         if (key === key1) {
//           a++;
//         }
//       }
//       for (let key2 of arr2) {
//         if (key === key2) {
//           b++;
//         }
//       }
//       if (a !== b) {
//         return false;
//       } 
//     }
//   return true
//   }
//   console.log(equality([1, 2, 3], [3, 2, 1]));

//   TASK C

//   function findNum(numberArr) {
//     numberArr.sort((a, b) => a - b);
//   console.log(`En boyuk ikinci ${numberArr[numberArr.length-2]}`);
//   console.log(`En boyuk ikinci ${numberArr[1]}`);
//   }
//   let numberArr = [1, 9, 5, 3, 7, 8, 2];
//   findNum(numberArr)

// TASK D

// let positive=0
// let negative =0
// function sum(arr) {
//     for( let num of arr) {
//         if( num >0 ) {
//             positive+=num;
//         }
//         else {
//           negative +=num
//         }
//     }
//     console.log(`Müsbət toplam ${positive},Mənfi toplam ${negative} `);
// }
// let arr = [10,30,5,20,-1,-4,-8]
// sum(arr)

// TASK E
//   let array = [12, 3, 4, 6, 8];
//   let limit = 3
//   let newArray =array.filter((item) => item >limit)
//   console.log(newArray);

// TASK F

//   let arr = [2, true, 3, false, 7, true, 4, true, 6, false];
//   let result = 1;
//   function findd(arr) {
//     for (let index in arr) {
//       if (index % 2 !== 0) {
//         if (arr[index]) {
//           result *= arr[index - 1];
//         }
//       }
//     }
//     return result;
//   }
//   console.log(findd(arr));

// TASK G
// let array = [ 11,"11","narin", "baki","narin",22,76,"salam"]
// for(let i=0 ;i<array.length ;i++) {
//     array[i]= array[i].toString()
// }
// let newArray = new Set(array)
// console.log(...newArray);
