
// TASK A

// let myArray = [1, 2, "salam", 2, "narin", 3, 22, "a", 2, "salam"];
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

//  TASK B

//   let x = 0;
//   function equality(firstArr, secondArr) {
//     for (let i = 0; i < firstArr.length; i++) {
//       for (let j = 0; j < secondArr.length; j++) {
//         if (firstArr[i] == secondArr[j]) {
//           x++;
//         }
//       }
//     }
//     if (firstArr.length === x && secondArr.length === x) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//  console.log( equality([1, 2], [1, 2]));

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

//   let array = [ 11,11,"narin", "baki","narin",22,76,"salam"]
//   let newArray = new Set(array)
//   console.log(...newArray);
