const nameStr="Сергей";
const secnameStr="Михайлович";
const surnameStr="Хоменко";
const yearStr="1982"; 
const curYearStr="2024"; 
const age = 0;
const studyBool = true; // учусь; 
const workBool = true; // работаю; 
let ageNum = parseInt(curYearStr) - parseInt(yearStr); //let, потому что ниже использую эту же переменную
console.table([
    {index: "firstName", values: nameStr},
    {index: "middleName", values: secnameStr},
    {index: "lastName", values: surnameStr},
    {index: "yearOfBirth",values: yearStr},
    {index: "currentYear", values: curYearStr},
    {index: "age", values: ageNum},
    {index: "studying", values: studyBool},
    {index: "working", values: workBool}
]);


//ЗАДАНИЕ СО ЗВЕЗДОЧКОЙ
const date = new Date();
const curYearStrDate = date.getFullYear();
ageNum = curYearStrDate - parseInt(yearStr);

console.log("через Объект:");
//const Obj = new(); 
const object = {
    firstName: nameStr,
    middleName: secnameStr,
    lastName:surnameStr,
    yearOfBirth:yearStr,
    currentYear:curYearStr,
    age:ageNum,
    studying:studyBool,
    working:workBool
};

console.table([
    {index: "firstName", values: object.firstName},
    {index: "middleName", values: object.middleName},
    {index: "lastName", values: object.lastName},
    {index: "yearOfBirth",values: object.yearOfBirth},
    {index: "currentYear", values: object.currentYear},
    {index: "age", values: object.age},
    {index: "studying", values: object.studying},
    {index: "working", values: object.working}
]);
