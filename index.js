// for (let i = 0; i < 8; i++){
//     console.log(i)
// }

// let n = Number(prompt('Enter n'))
// for(let i = 0; i < n; i++){
//     console.log(i)
// }

// let n = Number(prompt('Enter n'))
// for(let i = 3; i<n; i++){
//     console.log(i)
// }

// let c = Number(prompt('Enter c'))
// let n = Number(prompt('Enter n'))
// for(let i = c; i<n; i++){
//    console.log(i)
//  }

// let c = Number(prompt('Enter c'))
// let n = Number(prompt('Enter n'))
// let s = Number(prompt('Enter s'))
// for(let i = c; i<n; i+=s){
//    console.log(i)
//  }

// let a = Number(prompt())
// let b = 1
// for(let i=a; i>=1; i--){
//  b = b*i
// }
// console.log (b)

// let dob = Number(prompt('Enter date of birth'))
// if (dob>14){
//     console.log('Ok')
// }
// else{
//     console.log('you are not old enough')
// }

// let a = Number(prompt('Enter number'))
// if(a>4.5){
//     console.log('Higher half of 9')
// }
// else{
//     console.log('Lower half of 9')
// }


// for(let i=0; i<3; i++) {
//     console.log('H')
//     }
//     for(let i=0; i<3; i++) {
//         console.log('L')
//         }

// let a = Number(prompt())
// for(let i=0; i<Math.floor(a/2); i++) {
//         console.log('H')
//          }
//          for(let i=0; i<a/2; i++) {
//              console.log('L')
//              }

// for(let i=0; i<4; i++) {
//     console.log(i-i+1)
//     console.log(i-i)
// }

// let a = Number(prompt())
// for(let i=0; i<a/2; i++) {
//     console.log(i-i+1)
//     console.log(i-i)
// }

let mass = Number(prompt())
let height = Number(prompt())
let trueheight = height/100
let BM = mass/(trueheight**2)
console.log(' your BMI is ',BM)
if(BM<16){
    console.log('severly underweight')
} 
else if (16<BM<18.5){
    console.log('underweight')
}
else if (18.5<BM<25){
    console.log('normal')
}
else if (25<BM<30){
    console.log('overweight')
}
else{
    console.log('obese')
}