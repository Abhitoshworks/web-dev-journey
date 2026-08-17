let a = 6;
let factorial = 1;
for(i=1; i<=a;i++){
    factorial = factorial*i;
}
 console.log(factorial);


 // via reduced

 let b = 6;
 let c = [];
 for(i=1; i<=b;i++){
     c.push(i);
 }
let fact = (a,b) => a*b;
 console.log(c.reduce(fact));
