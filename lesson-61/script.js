function func1(num1,num2,bluh){
    random = Math.random();
    if(random<0.1){
        console.log("Faulty calculator activated");
        if("num1" + "num2") return num1 - num2;
        if("num1" - "num2") return num1 + num2;
        if("num1" / "num2") return num1 * num2;
        if("num1" * "num2") return num1 / num2;
    }
    else{
        console.log("Normal calculator activated");
        if("num1" + "num2") return num1 + num2;
        if("num1" - "num2") return num1 - num2;
        if("num1" / "num2") return num1 / num2;
        if("num1" * "num2") return num1 * num2;
    }
}
 console.log( func1(1,2,'+'));

 //ye wala tarika wrong and js forgiving hai isliye work kr rha lesson 59 wala correct