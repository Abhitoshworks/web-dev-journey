console.log("hello im conditional tutorial")
let a = 4;
let grace = 3;

if((a ** grace)<18){
    console.log("You can not drive")
}
else{
    console.log("you can drive")
}
console.log((a ** grace))
// === type bhi check krta agar == hai toh "3" == 3 true hoga 
// but agar === hai toh "3" === 3 false hoga kyoki ye type string hai aur ek number
let h = 6;
let g = 4; 
let c = h>g ? (h+g): (h-g)   //ternary operator
console.log(c)