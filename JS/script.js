document.addEventListener("DOMContentLoaded", function() {

let img = document.querySelector("#antiga");

let imgAcender = document.createElement("img");

imgAcender.setAttribute('id', 'foto');

imgAcender.setAttribute ('src', 'imgs/lampadaAc.jpg');

img.addEventListener("click", function() {

    let imgAntiga = document.getElementById("antiga");

    let pai = imgAntiga.parentNode;

    let imgAcenderClone = imgAcender.cloneNode(true);

    pai.replaceChild(imgAcender, imgAntiga);

})

});