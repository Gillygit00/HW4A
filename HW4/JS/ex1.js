// create a calculator 

const calculator = Number(prompt("Enter first number:"));
const calculator2 = Number(prompt("Enter second number:"));
const calculation = prompt("Enter mathematical operation you want calculated (+,-,*,/):");

if (calculation === "+"){
    console.log(calculator + calculator2)
    console.log(calculator+'+'+calculator2+"="+(calculator + calculator2))
};
if (calculation === "-"){
    console.log(calculator - calculator2)
    console.log(calculator+'-'+calculator2+"="+(calculator - calculator2))
};
if (calculation === "*"){
    console.log(calculator * calculator2)
    console.log(calculator+'*'+calculator2+"="+(calculator * calculator2))
};
if (calculation === "/"){
    console.log(calculator / calculator2)
    console.log(calculator+'/'+calculator2+"="+(calculator / calculator2))
};

// const result = ("calculator,calculation,calculator2")


console.log(calculator);
console.log(calculator2);
console.log(calculation);
// console.log(calculator+calculation+calculator2+"="+);
