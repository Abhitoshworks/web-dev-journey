// let a = [1,2,3,4,5];
// let b = [];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     b.push(element**2);    
// }
//   console.log(b); 
//   ek tarika ye hai new array me element dalne ka
 
let a = [1,2,3,4,5];
let b = a.map((meow)=>{
    return meow**2;
   
}

);console.log(b);

let d = [2,3,4,5,6];
const isGreaterThenThree = (e)=> e>3;
console.log(d.filter(isGreaterThenThree));
