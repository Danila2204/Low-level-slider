class Slider {
    wrap;
    buttonBack;
    buttonFront;

    constructor (parent, startPosition = 0, ...slides) {
        this.parent = parent;
        this.slides = slides;
        this.position = startPosition;
    }

    #createWrap(classes = null) {
        this.wrap = document.createElement("div");
        
        if (classes && typeof(classes) === "string") classes.forEach(elementClass => {
            this.wrap.classList.add(elementClass)
        })
        else this.wrap.classList.add("slider-track");

        this.#setPosition();
    }

    #setPosition() {
        this.wrap.innerHTML = "";
        this.wrap.innerHTML = this.slides[this.position].outerHTML;
        this.#checkButtons();
    }

    #checkButtons() {
        this.buttonBack.disabled = this.position <= 0;
        this.buttonFront.disabled = this.position >= this.slides.length - 1;
    }
    
    back(context = this) {
        context.position -= 1;
        this.disabledBackButton = context.position >= this.slides.length * this.slideWidth;
        context.#setPosition();
    }
    
    front(context = this) {
        context.position += 1;
        this.disabledFrontButton = context.position <= 0;
        context.#setPosition();
    }

    init (classes = false) {
        this.#createWrap(classes);
        this.parent.appendChild(this.wrap);
    }

    setInteractive() {
        this.buttonBack.addEventListener("click", () => this.back(this));
        this.buttonFront.addEventListener("click", () => this.front(this));
        this.#checkButtons();
    }
}