// 1
// Swap variable values using a temporary variable

// Using a Temp Variable
// let x = 5;
// let y = 6;
// let tmp = x;
// x = y;
// y = tmp;
// console.log("Value of X=" + x + " and value of Y=" + y)

// Without using a temp variable
// let x = 5;
// let y = 6;
// x = x + y;
// y = x - y;
// x = x - y;
// console.log("Value of X=" + x + " and value of Y=" + y)

// 2

// let a = 'what do you want'
// let array=a.split(" ")
// console.log(array)

// 3

// const a = [4, 5, 7, -8];
// console.log(...a)

// 4
// let quanAo = ['ao dai', 'ao ngan', 'ao so mi']
// let luachon = prompt('What you want to do (C,R,U,D').toUpperCase()

// if(luachon == 'C'){
//     let newItem = prompt(' them do moi')
//     quanAo.push(newItem)
// }
// else if(luachon == 'U'){
//     let index = Number(prompt('sua o vi tri so may')) -1
//     if (Number.isNaN())
//     console.log(' add a number')
//     else{
//     if (index>= luachon.length){
//         console.log('so to qua')
//     }
//     else{

//        let newValue = prompt('thanh cai gi')
//     quanAo[index] = newValue
//     }
// }
// }
//     else if(luachon == 'R'){
//      console.log('quan ao cua ban')
//     }
// else if(luachon == 'D'){
//     let index = prompt('chon vi tri ban muon xoa') -1
//     quanAo.splice(index, 1)
// }
// for(i=0; i<quanAo.length; i++){
//     console.log(i +1, quanAo[i])
// }

// 5
// let a = prompt('Enter numbers').split(',')
// let b = 0
// for (let i=0; i<a.length; i++) {
//         b += Number(a[i])
//     }

// console.log(`The sum is $b`)

// 6

// let a = prompt('Enter numbers').split(',')
// let min = a.sort((a, b) => a - b)   
//      console.log('the smallest number is', min[0])

// 7

// const arr = [3, 4, 6, -9, 10, -88, 2];
// let a = Number(prompt("Enter a numbers"))
//     let b = 0
//     for(let i = 0; i < arr.length; i++)
            
//         {
//             if(a == arr[i])
//                 {
//                   console.log("the index of the number in array is: ",i)
                  
//                 }
//         }
//         if(b == 0)
//         {
//             console.log("can't found the number in array")
//         }
// 8.1
// let flock = [5, 7, 300, 24, 50, 75] 
// console.log('My name is Thanh and this is my sheep size', ...flock)   

// 8.2
// let a = Math.max(...flock)
// console.log('Now my biggest sheep has size of', a ,
// 'let shave it')

// 8.3
// flock[flock.indexOf(a)] = 8
// console.log('My name is Thanh and this is my sheep size', ...flock)

// 8.4
// for ( let i=0; i<6; i++){
//     flock[i] += 50
// }
// console.log('One month has passed, my sheep has grown, here are the size', 
// ...flock)

// 8.5

// // Month 1
// let b = Math.max(...flock)
// console.log('Now my biggest sheep has size of', b ,
// 'let shave it')
// flock[flock.indexOf(b)] = 8
// console.log('My name is Thanh and this is my sheep size', ...flock)
// for ( let i=0; i<6; i++){
//     flock[i] += 50
// }
// console.log('One month has passed, my sheep has grown, here are the size', 
// ...flock)
// // Month 2
// let c = Math.max(...flock)
// console.log('Now my biggest sheep has size of', c ,
// 'let shave it')
// flock[flock.indexOf(c)] = 8
// console.log('My name is Thanh and this is my sheep size', ...flock)
// for ( let i=0; i<6; i++){
//     flock[i] += 50
// }
// console.log('One month has passed, my sheep has grown, here are the size', 
// ...flock)

// 8.6
// let e = 0
// for (let i=0; i<6; i++){
//         e += Number(flock[i])
// }
// console.log('My flock has size in total :', e ,
//             'I would get', e*2,'$')

// 9
// clear
// let a = 50
// const colors = ['red','gray','blue','purple','cyan']
// for( let i=0; i< colors.length; i++){
//     for(let k=0; k<4; k++){
//         color(colors[i])
//         fd(a)
//         rt(90)
//     }
// a +=50
// }
