// navbar
const popup= document.getElementById("popup");
const buttonOne= document.getElementById("button-one");
const buttonTwo= document.getElementById("button-two");
const buttonThree= document.getElementById("button-three");
const descrizione = document.getElementById("descrizione");
const buttonHome=document.getElementById("button-home");
const buttonContatti=document.getElementById("button-contatti");
const buttonNoi=document.getElementById("button-noi");
const buttonFitness= document.getElementById("button-fitness");
//pagine
const paginaPiani=document.getElementById("pagina-piani");
const paginaContatti=document.getElementById("pagina-contatti");



//descrizione card
buttonOne.addEventListener("click",() => {
     popup.style.display = "flex"
     descrizione.innerHTML = "Benvenuto nel PIANO BRONZE, questo piano e fatto su misura per persone alle PRIME ARMI, se sei nuovo ed hai deciso di metterti in forma e iniziare un nuovo percorso, questo e il piano adatto a te!"
    });

popup.addEventListener("click",() => {
     popup.style.display = "none"
    });

buttonTwo.addEventListener("click",() => {
    popup.style.display = "flex"
    descrizione.innerHTML= "Benvenuto nel PIANO GOLD, questo piano e fatto su misura per te che ami tenerti in forma e desideri mantenere uno stile di vita sano e sportivo, cosa aspetti? forza!"
})

buttonThree.addEventListener("click", () => {
    popup.style.display ="flex"
    descrizione.innerHTML = "Benvenuto nel PIANO PREMIUM"
})

buttonFitness.addEventListener("click", () => {
    paginaPiani.style.display= ""
    paginaContatti.style.display= "none"
})

buttonContatti.addEventListener("click", () => {
    console.log('droga')
    paginaContatti.style.display= "flex"
    paginaPiani.style.display= "none"
})