//factorial via loops 
let a = 6;
let factorial = 1;
for (let i = 1; i <= a; i++) {
    factorial = factorial*i;
}
  console.log(factorial);


//factorial via reduced
let b = 6;
let c = [];
for (let i = 1; i <=6 ; i++){
    c.push(i);
}
const fact = c.reduce((a,b)  => a*b);
console.log(fact);