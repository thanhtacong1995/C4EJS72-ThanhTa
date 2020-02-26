1
// function censoredString(str){
//     let vowels = ['a', 'i', 'u', 'e', 'o']
//     let newStr =''
//     for(let i = 0; i<str.length; i++)
//     if (vowels.includes(str[i])){
//            newStr = newStr + '*'
        
//     } 
//        else{ newStr = newStr + str[i]

//     }
//        return newStr
// }
// 2
// function keysAndValues(obj){
    
//         let result = [];
//             for (let item in obj) {
//              result.push(item);
//         }
//             for (let item in obj) {
//              result.push(obj[item]);
//         }
//         return result;
      
// }

// 3
// function getFrequencies(arr){
//     let res = arr.reduce(function(accu, intiValue) {
//         if (!accu[intiValue]) {
//             accu[intiValue] = 1;
//         } else {
//             accu[IntiValue]++;
//         }  
//         return accu;
//      },{} ) ;
//         return res;
//  }

// 4
//   function khaBanh(str) {
//     let newStr = "";
//     newStr += str[0];
//     for (let i = 1; i < str.length; i++) {
//       if (
//         newStr[i - 1] === newStr[i - 1].toUpperCase() &&
//         newStr[i - 1] !== " "
//       ) {
//         newStr += str[i].toLowerCase();
//       } else if (
//         newStr[i - 1] === newStr[i - 1].toLowerCase() &&
//         newStr[i - 1] !== " "
//       ) {
//         newStr += str[i].toUpperCase();
//       } else if (newStr[i - 1] === " ") {
//         if (newStr[i - 2] === newStr[i - 2].toUpperCase()) {
//           newStr += str[i].toLowerCase();
//         } else if (newStr[i - 2] === newStr[i - 2].toLowerCase()) {
//           newStr += str[i].toUpperCase();
//         }
//       }
//     }
//     return newStr;
//   }
// 5
//   function mapLetters(str) {
//     const arr = str.split("");
//     const result = arr.reduce((accumulator, currentItem, currentIndex) => {
//       if (!accumulator[currentItem]) {
//         accumulator[currentItem] = [];
//         accumulator[currentItem].push(currentIndex);
//       } else {
//         accumulator[currentItem].push(currentIndex);
//       }
//       return accumulator;
//     }, {});
//     return result;
//   }
// 6
//   function reverseObject(obj) {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);
//     const result = {};
//     for (let i = 0; i < keys.length; i++) {
//       result[values[i]] = keys[i];
//     }
//     return result;
//   }