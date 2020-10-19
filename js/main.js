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
            typeSpeed /= 2;
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
