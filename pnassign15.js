//Question5
var pnunits=Number(prompt("enter no of units"))
var total_bill
if (pnunits<=50 && pnunits>0){
    total_bill=pnunits*0.50
    console.log("total bill is",total_bill)
}
else if(pnunits>50 && pnunits<150){
    total_bill=50*0.5+(pnunits-50)*0.75
    console.log("total bill is",total_bill)
}
else if(pnunits>150 && pnunits<=250){
    total_bill=50*0.5+100*0.75+(pnunits-150)*1.20
    console.log("total bill is",total_bill)
}
else if(pnunits>250){
    total_bill=50*0.5+100*0.75+100*1.20+(pnunits-250)*1.5
    total_bill=total_bill+0.2*total_bill
    console.log("total bill is",total_bill)
}
else{
    window.alert("enter correct units")
}

