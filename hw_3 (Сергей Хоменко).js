// 1
function strConcat(str1, str2){
return(`${str1} ${str2}`);
}

console.log(strConcat("Привет,", "Мир"));


//2
let arrString = ["Apple","Pinapple","Cucumber","Garlic"];

function arrMerge(arrFn){
 let tmpStr="";
 for (let i=0; i < arrFn.length; i++){
 tmpStr=`${tmpStr}${arrFn[i]} `;
 }
 return (tmpStr);
}
console.log(arrMerge(arrString));


//3
function strReverse(strTmp){
    let idx=strTmp.length-1;
    let tmpStr="";
    for (let i=0; i<strTmp.length; i++){
    tmpStr=tmpStr + strTmp.charAt(idx-i);
    }
    return(tmpStr);
}
console.log(strReverse("Hello"));


//4
function upFirstSymbol(strTmp = "no param"){   
    return(strTmp.charAt(0).toUpperCase() + strTmp.substring(1));
}
console.log(upFirstSymbol("welcome!"));


//5
function maxInRange(min, max){ //локальные одноименные переменные
    return(Math.ceil((Math.random() * (max - min) + min)));
}
const min=3;
const max=10;
console.log("Случайное число между " + min + " и " + max + " = " + maxInRange(min, max));


//6*
const arrNumber = [1,2,3];
let tmpSum=0;
function arrSum(tmpArray){
    for (let i=0; i<tmpArray.length;i++){
    tmpSum=tmpSum + tmpArray[i];
    }
    return(tmpSum);
}
console.log(arrSum(arrNumber));


//7*
//const arrNumber = [1,2,3];
tmpSum=0;
function arrMiddleArithmetic(tmpArray){
    for (let i=0; i<tmpArray.length;i++){
    tmpSum=tmpSum + tmpArray[i];
    }
    return(tmpSum / tmpArray.length);
}
console.log(arrMiddleArithmetic(arrNumber));