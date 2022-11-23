

var primCard = document.getElementById("cardMagic");
var segCard = document.getElementById("cardMagic2");
var terCard = document.getElementById("cardMagic3");


function card1(){
    primCard.style.display="block"

    segCard.style.display="none"
    terCard.style.display="none"
}

function card2(){
    segCard.style.display="block"

    primCard.style.display="none"
    terCard.style.display="none"
}

function card3(){
    terCard.style.display="block"

    primCard.style.display="none"
    segCard.style.display="none"
}