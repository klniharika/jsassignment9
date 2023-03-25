//Question4
var pntri1=Number(prompt("enter 1st side"))
var pntri2=Number(prompt("Enter 2nd side"))
var pntri3=Number(prompt("Enter 3rd Number"))
if(pntri1==pntri2&&pntri2==pntri3&&pntri3==pntri1){
    console.log("Equilateral Traingle")
}
else if(pntri1==pntri2||pntri2==pntri3||pntri3==pntri1){
    console.log("Isosceles Traingle")
}
else{
    console.log("Scalene Traingle")
}
