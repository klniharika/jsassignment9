
//Question3
var pnnum1=Number(prompt("Enter 1st number"))
var pnnum2=Number(prompt("Enter 2nd number"))
var pnoper=String(prompt("Enter operator"))
switch(pnoper){
    case "+":console.log("addition is",(pnnum1+pnnum2));break
    case "-":console.log("subtraction is",(pnnum1-pnnum2));break
    case "*":console.log("multiplication is",(pnnum1*pnnum2));break
    case "/":console.log("division is",(pnnum1/pnnum2));break
    default:console.log("Enter relative symbol")
}