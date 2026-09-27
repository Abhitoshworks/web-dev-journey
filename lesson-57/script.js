console.log("this lesson is about loops")
const a = 1;
for (let i = 0; i < 100; i++) {

   console.log (a+i);
    
}
let obj = {
    "name": "Abhitosh",
    "Branch": "ECE",
    "Roll no.": "8725203"
}
for (const key in obj) {  //forin = for objects
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key , element)
for (const c of "Abhitosh") {  //forof = for string and arrays
    console.log(c)
}

    
    
}