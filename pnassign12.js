//Question2
var pnalpha= prompt("enter value")
pnalpha=pnalpha.toLowerCase()
var npalpha=["a","e","i","o","u"]
switch(true){
    case pnalpha in npalpha:console.log("vowel");break
    case (pnalpha>="a")&&(pnalpha<="z"):console.log("consonant");break
    default:console.log("non-alphabet")
}