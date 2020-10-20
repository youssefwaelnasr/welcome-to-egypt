// TYPEWRITER EFFECT
const span = document.getElementById("typed-text"),
    delay = 3000,
    names = [
        "Gift of the Nile",
        "The Everlasting Place",
        "From the Soul of Ptah",
        "Land of the God Horus",
        "The Path of Gold",
    ];

class TypeWriter {
    constructor(span, delay, names) {
        this.span = span;
        this.names = names;
        this.delay = parseInt(delay, 10);
        this.currentPhrase = "";
        this.index = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const i = this.index % this.names.length;
        const fullWord = this.names[i];
        let typeSpeed = 100;
        if (this.isDeleting) {
            typeSpeed /= 3;
            this.currentPhrase = fullWord.substring(
                0,
                this.currentPhrase.length - 1,
            );
        } else {
            this.currentPhrase = fullWord.substring(
                0,
                this.currentPhrase.length + 1,
            );
        }
        span.innerHTML = `<span class="text">${this.currentPhrase}</span>`;
        if (!this.isDeleting && this.currentPhrase == fullWord) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentPhrase == "") {
            this.isDeleting = false;
            this.index++;
            typeSpeed = 500;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

window.onload = new TypeWriter(span, delay, names);

// IMAGE SLIDESHOW
const wrapper = document.getElementById("wrapper"),
    monument = document.getElementById("monument"),
    loc = document.getElementById("loc"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    places = [
        {
            img: "../img/pyramids.jpg",
            monument: "The Great Pyramids",
            location: "Haram, Giza",
        },
        {
            img: "../img/abu-simbel.jpg",
            monument: "Abu Simbel Temple",
            location: "Abu Simbel, Aswan",
        },
        {
            img: "../img/cairo-tower-view.jpg",
            monument: "View from Cairo Tower",
            location: "Zamalek, Cairo",
        },
        {
            img: "../img/karnak-hall-columns.jpg",
            monument: "Karnak Temple Hypostyle Columns",
            location: "Karnak, Luxor",
        },
        {
            img: "../img/khufu-temple.jpg",
            monument: "Mortuary Temple of Khufu",
            location: "Haram, Giza",
        },
        {
            img: "../img/low-cliff-matruh.jpg",
            monument: "Low Mediterranean Seaside Cliff",
            location: "Marsa Matruh, Matruh",
        },
        {
            img: "../img/red-sea-coral.jpg",
            monument: "Coral Reefs in the Red Sea",
            location: "Red Sea Governorate",
        },
        {
            img: "../img/red-sea-dahab.jpg",
            monument: "Coral Reefs in Dahab",
            location: "Dahab, South Sinai",
        },
        {
            img: "../img/sphinx.jpg",
            monument: "The Great Sphinx",
            location: "Haram, Giza",
        },
    ];

let i = 0,
    firstSlide = true;
next.addEventListener("click", nextSlide);
function nextSlide() {
    if (firstSlide) {
        i = 1;
        wrapper.style.background = `url("${places[i].img}") no-repeat center center/cover`;
        monument.innerHTML = places[i].monument;
        loc.innerHTML = places[i].location;
        firstSlide = false;
    } else if (!firstSlide && i < places.length - 1) {
        wrapper.style.background = `url("${
            places[i + 1].img
        }") no-repeat center center/cover`;
        monument.innerHTML = places[i + 1].monument;
        loc.innerHTML = places[i + 1].location;
        i++;
    } else if (i == places.length - 1) {
        wrapper.style.background = `url("${places[i].img}") no-repeat center center/cover`;
        monument.innerHTML = places[i].monument;
        loc.innerHTML = places[i].location;
        i = -1;
        nextSlide();
    }
    const current = monument.innerHTML;
    if (
        current.includes("Abu Simbel") ||
        current.includes("Karnak") ||
        current.includes("Mortuary")
    ) {
        document.getElementById("container").style.textShadow =
            "3px 3px 20px white, -3px -3px 20px white, 3px -3px 20px white, -3px 3px 20px white";
    } else if (current.includes("Red Sea")) {
        document.getElementById("container").style.color = "#f4f4f4";
        document.getElementById("container").style.textShadow =
            "3px 3px 20px black, -3px -3px 20px black, 3px -3px 20px black, -3px 3px 20px black";
        document.getElementsByClassName("text")[0].style.borderRight =
            "2px solid white";
        document.getElementsByClassName("slide-btn")[0].style.color = "white";
        document.getElementsByClassName("slide-btn")[0].style.border =
            "1px solid white";
        document.getElementsByClassName("slide-btn")[1].style.color = "white";
        document.getElementsByClassName("slide-btn")[1].style.border =
            "1px solid white";
    } else if (current.includes("Red Sea")) {
    } else {
        document.getElementById("container").style.color = "initial";
        document.getElementById("container").style.textShadow = "initial";
        document.getElementsByClassName("text")[0].style.borderRight =
            "initial";
        document.getElementsByClassName("slide-btn")[0].style.color = "initial";
        document.getElementsByClassName("slide-btn")[0].style.border =
            "1px solid black";
        document.getElementsByClassName("slide-btn")[1].style.color = "initial";
        document.getElementsByClassName("slide-btn")[1].style.border =
            "1px solid black";
    }
}
prev.addEventListener("click", prevSlide);
function prevSlide() {
    if (firstSlide) {
        i = 8;
        wrapper.style.background = `url("${places[i].img}") no-repeat center center/cover`;
        monument.innerHTML = places[i].monument;
        loc.innerHTML = places[i].location;
        firstSlide = false;
    } else if (!firstSlide && i > 0) {
        wrapper.style.background = `url("${
            places[i - 1].img
        }") no-repeat center center/cover`;
        monument.innerHTML = places[i - 1].monument;
        loc.innerHTML = places[i - 1].location;
        i--;
    } else if (i == 0) {
        wrapper.style.background = `url("${places[i].img}") no-repeat center center/cover`;
        monument.innerHTML = places[i].monument;
        loc.innerHTML = places[i].location;
        i = 9;
        prevSlide();
    }
    const current = monument.innerHTML;
    if (
        current.includes("Abu Simbel") ||
        current.includes("Karnak") ||
        current.includes("Mortuary")
    ) {
        document.getElementById("container").style.textShadow =
            "3px 3px 20px white, -3px -3px 20px white, 3px -3px 20px white, -3px 3px 20px white";
    } else if (current.includes("Red Sea")) {
        document.getElementById("container").style.color = "#f4f4f4";
        document.getElementById("container").style.textShadow =
            "3px 3px 20px black, -3px -3px 20px black, 3px -3px 20px black, -3px 3px 20px black";
        document.getElementsByClassName("text")[0].style.borderRight =
            "2px solid white";
        document.getElementsByClassName("slide-btn")[0].style.color = "white";
        document.getElementsByClassName("slide-btn")[0].style.border =
            "1px solid white";
        document.getElementsByClassName("slide-btn")[1].style.color = "white";
        document.getElementsByClassName("slide-btn")[1].style.border =
            "1px solid white";
    } else {
        document.getElementById("container").style.color = "initial";
        document.getElementById("container").style.textShadow = "initial";
        document.getElementsByClassName("text")[0].style.borderRight =
            "initial";
        document.getElementsByClassName("slide-btn")[0].style.color = "initial";
        document.getElementsByClassName("slide-btn")[0].style.border =
            "1px solid black";
        document.getElementsByClassName("slide-btn")[1].style.color = "initial";
        document.getElementsByClassName("slide-btn")[1].style.border =
            "1px solid black";
    }
}
