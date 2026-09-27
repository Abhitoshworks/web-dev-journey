const a = "ABHITOSH"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8])
console.log(a.length)

let dost = "harshit";
let realname = "Abhi";
console.log(("My name is ") + realname + (" My friends name is ") + dost);
console.log(`my name is ${realname} My friends name is ${dost}`);
let b = "Saksham";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
//length ke liye paranthysis () ki jarurat nhi but upper lower case ke liye hai
console.log(b.slice(1,5)); //1 included hai 5 included nhi hai
console.log(b.slice(1)); //1 se leke end tak sab slice krdega

console.log(a.replace("ABHI","ALOO"));
console.log(a.concat(b,"Lovis")); // a aur b jud jayenge lovish bhi add hojayega
let c = "   space  ";
console.log(c.trim()); //extra khali space ko htata

//STRING IS IMMUTABLE
