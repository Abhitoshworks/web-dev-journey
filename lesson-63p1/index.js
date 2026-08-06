let a = [1,2,3,4,5];


// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// }
// )
let obj = {
    a: 1,
    b: 2,
    c: 3,
}

// for(const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key];
//         console.log(element);
//     }
//}
for (const meow of a) {
    console.log(meow);
}