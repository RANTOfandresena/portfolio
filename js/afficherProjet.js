var baliseAffichage=document.getElementById("row")
var baliseModel=document.getElementById("list")
var bailseApres=document.getElementById("apres")
//afficherProject()
function afficherProject(){
    for(var i=1;i!=5;i++){
        // baliseAffichage.innerHTML=''
        baliseAffichage.innerHTML+=
        `
        <div class="column">
        <img src="img/${i}/1.jpg" style="width:100%" onclick="openModal();afficher(${i});currentSlide(1)" class="hover-shadow cursor">
        </div>
        `
    }
}

function afficher(dossier,nbImage){
    var suppres=document.querySelectorAll(".mySlides")
    var columns=document.querySelectorAll(".column")
    suppres.forEach(balise=>{balise.remove()})
    columns.forEach(balise=>{balise.remove()})
    // var a=(dossier==2)? 13 : 5
    for(var i=1;i!=nbImage;i++){
        var div=document.createElement("div")
        div.innerHTML=
        `
        <div class="mySlides">
            <div class="numbertext">${nbImage-i} / 4</div>
            <img src="img/${dossier}/${nbImage-i}.jpg" style="height: 70vh;">
        </div>
        `
        baliseModel.prepend(div)

        // var apres=document.createElement("div")
        // apres.innerHTML=
        // `
        // <div class="column">
        //     <img class="demo cursor" src="img/${dossier}/${a-i}.jpg" style="height: 20vh;" onclick="currentSlide(${a-i})" alt="Nature and sunrise">
        // </div>
        // `
        // bailseApres.after(apres)

    }
}


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides.length!=0){
        slides[slideIndex-1].style.display = "flex";
        // dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
}