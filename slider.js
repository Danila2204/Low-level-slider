class Slider {
    wrap;
    buttonBack;
    buttonFront;

    position = 0;
    duration = 0;
    slideToShow = 1;
    slidesToScroll = 1;

    constructor (parent, ...slides) {
        this.parent = parent;
        this.slides = slides;
        
        let computedStyleParent = getComputedStyle(this.parent);
        
        this.slideWidth = parseFloat(computedStyleParent.getPropertyValue("width")) / this.slideToShow;
        this.movePosition = this.slidesToScroll * this.slideWidth;
        console.log("Скорость", this.movePosition);
    }

    #createWrap(classes = null) {
        this.wrap = document.createElement("div");
        if (classes == true && typeof(classes) === "string" || typeof(classes) === "string") classes.forEach(elementClass => {
            this.wrap.classList.add(elementClass)
        })
        else this.wrap.classList.add("slider-track");

        return this.wrap;
    }

    #setPosition() {
        this.wrap.style.transform = `translateX(${this.position}px)`;
        this.#checkButtons();
    }
    
    #back(context = this) {
        context.position += context.movePosition;
        this.disabledBackButton = context.position >= this.slides.length * this.slideWidth;
        console.log("Позиция после back -", context.position);
        console.log("Предел -", this.slides.length * this.slideWidth);
        context.#setPosition();
    }
    
    #front(context = this) {
        context.position -= context.movePosition;
        this.disabledFrontButton = context.position <= 0;
        console.log("Позиция после front -", context.position);
        context.#setPosition();
    }

    #checkButtons() {
        this.buttonBack.disabled = this.position >= this.slides.length * this.slideWidth;
        this.buttonFront.disabled = this.position <= 0;

    }

    init (classes = false) {
        this.#createWrap(classes);
        this.slides.forEach(element => this.wrap.appendChild(element));
        this.parent.appendChild(this.wrap);
        
    }

    set buttonBack(value) {
        if (typeof value == "HTMLELement") {
            this.buttonBack = value;
        }
    }

    hideParent(value = false) {
        if (value && typeof(value) === "boolean") this.parent.style.overflow = "hidden";
    }

    setButtons(backButton, frontButton) {
        this.buttonBack = backButton;
        this.buttonFront = frontButton;
    }

    setInteractive() {
        this.buttonBack.addEventListener("click", () => this.#back(this));
        this.buttonFront.addEventListener("click", () => this.#front(this));
        this.#checkButtons();
    }

    setTransition(duration = 0) {
        this.wrap.style.transitionDuration = `${duration}s`;
    }

    setToShow(value) {
        if (value && typeof(value) === "number") this.slideToShow = value;
    }

    setSlidesToScroll(value) {
        if (value && typeof(value) === "number") this.slidesToScroll = value;
    }
}