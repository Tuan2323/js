// check.js

//Event "click" sur le bouton

document.getElementById("bt-check" ).onclick = check;
document.getElementById("bt-check").addEventListener("click",check);

//
function check() {
 // au moindre souci on passe a "false"
 let validationFinale = true;

 document.getElementById("err-user").innerHTML="";
 document.getElementById("err-pass").innerHTML="";
 document.getElementById("err-size").innerHTML="";
 document.getElementById("err-topping").innerHTML="";
 document.getElementById("err-payment").innerHTML="";
}
//-------------------------------------------------------
//valid user

if(document.getElementById("user").value.length<10 || document.getElementById("user").value.length>20){
    document.getElementById("err-user").innerHTML="Min : 10 Max : 20 !";
    validationFinale=false;
}

//valid pass

if(document.getElementById("pass").value.length<5 || document.getElementById("pass").value.length>10){
    document.getElementById("err-pass").innerHTML="entre 5 et 10 caracteres !";
    validationFinale = false;
}

//valid size
var size = document.getElementsByName("size");
var tailleOK = false;
for(let i=0;i< size.length;i++)
{
    if(size[i].checked=== true) tailleOK=true;
}
if(!tailleOK){
    document.getElementById("err-size").innerHTML="SVP saisissez une taille";
    validationFinale = false;
}

//valid Toppings
let topppings = document.getElementsByName("topping[]");
let toppingCount=0;
for(let i=0;i<topppings.length;i++)
{
    if(topppings[i].checked===true) ++toppingCount
}

if(toppingCount<3){
    document.getElementById("err-topping").innerHTML="SVP 3 ingredient";
    validationFinale = false;
}

//valid payment
// en 2 instrictooion

var laListe = document.getElementById("payment").options;
console.log(laListe);
var optionSelectionne = document.getElementById("payment").selectedindex;
console.log(optionSelectionne);
var optionPaiement = laListe[optionSelectionne].value;

//en 1 instruction
//var optionPaiement= document.getElementById("payment").options[document.getElementById("payment").selectedindex].value;

//validationfinale

if(validationFinale) document.getElementById("zepizzaForm").onsubmit();