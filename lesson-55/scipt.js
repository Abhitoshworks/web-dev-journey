console.log("Bankai katen kyu karamat senju!!")
var a = 58;
var b = 5;
var c = "Abhitosh"
console.log(a + b +4)
console.log(typeof a, typeof b, typeof c)
{
    var a = 67;  // a dono baar 67 print krega kyoki var gloabl variable hai aur agar yaha 
                 // let hota toh wo block element hai toh fir alag alag print hota
    console.log(a);
}   
console.log(a); 

let x = 67;
let y = 6.7;
let z = ("six seven");
const p = true; 
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
//type of null hamesha object rahega ye pehle ek galti hui thi lekin bahot sare codes me pehle
//se use ho rha tha isliye typeof null ko null nhi kr skte wo object hi rahega

let o = {
    "name" : "Abhitosh",
    "roll number" : 2025293205
}
console.log(o);
o.salary = "1M $$" ; //o.xyz add krta o me 
console.log(o);
o.salary = "10M $$"; //o.salary overwrite hojayega
console.log(o); 