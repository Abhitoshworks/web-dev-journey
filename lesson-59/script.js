function faulty(num1,num2,operator){
    let random = Math.random();
    if (random<0.9){
        console.log("Calculator");
        if(operator === '+') return num1 + num2;
        if(operator === '-') return num1 - num2;
        if(operator === '*') return num1 * num2;
        if(operator === '/') return num1 / num2;
    }
    else{
        console.log("Faulty calculator");
        if(operator === '+') return num1 - num2;
        if(operator === '-') return num1 + num2;
        if(operator === '*') return num1 / num2;
        if(operator === '/') return num1 * num2;
    }
    
}
console.log(faulty(10,5,'+'))