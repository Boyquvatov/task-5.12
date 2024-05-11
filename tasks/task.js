// 1-masala
// function isprime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Test uchun
// let son = parseInt(prompt("Istalgan sonni kiriting: "));
// if (isprime(son)) {
//     console.log(son + " tub son.");
// } else {
//     console.log(son + " tub son emas.");
// }


//2-masala
// function hisoblash() {
//     let matn = document.getElementById('matn').value;
//     let sozlar = matn.split(" ");
//     let tozalanganSozlar = sozlar.filter(element => element !== "");
//     let sozlarSoni = tozalanganSozlar.length;
//     document.getElementById('natija').innerText = "Matnda " + sozlarSoni + " ta so'z bor";
//   }
  

// 3-masala
// function hisoblash() {
//     let soz = prompt("Istalgan so'zni kiriting:");
//     let harflar = soz.toLowerCase().split("");
//     let undoshlar = 0;
//     let unliHarflar = 0;
//     const undoshlarSet = new Set(["a", "e", "i", "o", "u" ,"o'"]);
    
//     harflar.forEach(harf => {
//       if (undoshlarSet.has(harf)) {
//         undoshlar++;
//       } else if (harf >= "a" && harf <= "z") {
//         unliHarflar++;
//       }
//     });
//     console.log("Kiritilgan so'zda " + unliHarflar + " ta undosh harf va " + undoshlar + " ta unli harf bor.");
//   }
  
//   hisoblash();


// 4-masala
// function shiftKElements(arr, k) {
//     const length = arr.length;
//     const extracted = arr.slice(length - k, length);
//     const result = extracted.concat(arr.slice(0, length - k));
//     return result;
//   }
//   let arr = [1, 2, 3, 4, 5];
//   let k = 2;
//   let result = shiftKElements(arr, k);
//   console.log(result);
  
  
//5-masala
// function subarraySum(nums, target) {
//     let count = 0
//     for(let i = 0 ; i < nums.length ; i++){
//         for(let j = 0 ; j < i ; j++){
//             if(nums[i] + nums[j] == 7){
//                 count++
//             }
//         }
//     }
//     return count
// }
//   let nums = [2, 3, 1, 2, 4, 3];
//   let target = 7;
//   let result = subarraySum(nums, target);
//   console.log("Arrayda", result, "ta sonning yig'indisi", target, "ga teng bo'ladi.");
  

//6-masala
// function isPowerOfTwo(n) {
//     return (n !== 0) && ((n & (n - 1)) === 0);
//   }
// let n = +prompt("enter number")

// console.log(isPowerOfTwo(n));


//7-masala
// function palindromeCheck(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindromeCheck([1, 2, 8, 1]));
// console.log(palindromeCheck([1, 2, 2, 1]));

// 8-masala
// function calculateLengths(arr) {
//     let lengthsObject = {};
//     for (let i = 0; i < arr.length; i++) {
//         lengthsObject[arr[i]] = arr[i].length;
//     }
//     return lengthsObject;
// }
// const arr = ["text", "world", "laptop"];
// console.log(calculateLengths(arr));


// 9-masala 
// function moveZerosToEnd(arr) {
//     let nonZeroElements = arr.filter(element => element !== 0);
//     let zeroCount = arr.length - nonZeroElements.length;
//     let zeroArray = Array(zeroCount).fill(0)
//     let newarr = [...nonZeroElements,...zeroArray]
//     return newarr
// }
// const inputArray = [0, 3, 0, 4, 3];
// console.log(moveZerosToEnd(inputArray));


// 10 - masala
// function findCommonElements(arr1, arr2) {
//     let commonElements = arr1.filter(element => arr2.includes(element));
//     return commonElements;
// }

// const arr1 = [8, 3, 5, 1]
// const arr2 = [3, 5, 9]
// console.log(findCommonElements(arr1, arr2))
