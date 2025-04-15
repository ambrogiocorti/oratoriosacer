document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente caricato");
    
    const elementi = {
      prev: document.getElementById("prev"),
      next: document.getElementById("next"),
      immagini: document.getElementById("immagini"),
      indicators: document.getElementById("indicators")
    };
    
    console.log("Elementi trovati:", elementi);
    
    if (!elementi.prev || !elementi.next || !elementi.immagini || !elementi.indicators) {
      console.error("Elementi mancanti nel DOM!");
      return;
    }
  
    let prev = document.getElementById("prev");
let next = document.getElementById("next");
let indicatorsContainer = document.getElementById("indicators");

let carosello = 0;
let immagini = [
    {
        url: "./images/images.jpg",
        didascalia: "Descrizione prima immagine"
    },
    {
        url: "./images/images2.jpg",
        didascalia: "Descrizione seconda immagine"
    },
    {
        url: "./images/images3.jpg",
        didascalia: "Descrizione terza immagine"
    },
    {
        url: "./images/images4.jpg",
        didascalia: "Descrizione quarta immagine"
    },
    {
        url: "./images/images4 copy.jpg",
        didascalia: "Descrizione quinta immagine"
    }
];

function createIndicators() {
    immagini.forEach((_, index) => {
        let indicator = document.createElement("div");
        indicator.classList.add("slide-indicator");
        if(index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => {
            carosello = index;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

function updateCarousel() {
    let divImmagine = document.getElementById("immagini");
    let currentImage = immagini[carosello];
    
    divImmagine.style.backgroundImage = `url('${currentImage.url}')`;
    divImmagine.style.backgroundSize = "cover";
    divImmagine.style.backgroundPosition = "center";
    divImmagine.style.backgroundRepeat = "no-repeat";
    
    let didascaliaElement = document.getElementById("didascalia");
    if (!didascaliaElement) {
        didascaliaElement = document.createElement("div");
        didascaliaElement.id = "didascalia";
        divImmagine.appendChild(didascaliaElement);
    }
    didascaliaElement.textContent = currentImage.didascalia;
    
    document.querySelectorAll(".slide-indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === carosello);
    });
}

console.log("Stato carosello:", {
    index: carosello,
    immagineCorrente: immagini[carosello],
    elemento: document.getElementById("immagini")
});

function avanti() {
    carosello = (carosello + 1) % immagini.length;
    updateCarousel();
}

function indietro() {
    carosello = (carosello - 1 + immagini.length) % immagini.length;
    updateCarousel();
}

document.getElementById("next").addEventListener("click", avanti);
document.getElementById("prev").addEventListener("click", indietro);

createIndicators();
updateCarousel();

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight") avanti();
    if(e.key === "ArrowLeft") indietro();
});
});
