let arr = [1,2,4,5,7];
arr[0] = 555; 
console.log(arr[0]); //arrays mutable hote toh ye overwrite ho skte isliye 1 se 555 hua
console.log(typeof(arr)); // type of array object hota

// console.log(arr.toString); isse array string me badal jata 
console.log(arr.join(" and ")); 
// ye saare arr ke elements me and join krwa dega

let a = [1,2,3,4,5];
a.pop();  // pop last element nikal dega 
a.push(100) // last element add krta 
a.shift(); // first element ko nikal dega
a.unshift(69); //first element add krta
delete a[3] // 3rd element delete pr uski jaga pe memory allocate hojati length same rehte #####

console.log(a);
console.log(a.length);
console.log(arr.concat(a)); // 2 or more then 2 arrays ko add krta

let b = [1,2,3,4,5,6];

console.log(b.splice(1,3,222,333)); // 1 se 3 index pe jo hai use hta dega aur 222 333 usme nhi hai toh add krdega
console.log(b);
 

let c = [1,2,3,4,5];
console.log(c.slice(1,3)); //slice krke bahar nikal deta end wale index ko ignore

