const buttons = document.querySelectorAll("[data-carousel-button]");
const radioButtons = document.querySelectorAll("[name='radio-btn']");


function handleSlideTransition(index) {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
        slide.removeAttribute("data-active");
    });
    slides[index].setAttribute("data-active", "");
    radioButtons.forEach((radioButton, i) => {
        radioButton.checked = i === index;
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const slides = document.querySelectorAll(".slide");
        const activeSlideIndex = [...slides].findIndex(slide => slide.getAttribute("data-active") === "");
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        let newIndex = (activeSlideIndex + offset + slides.length) % slides.length;
        handleSlideTransition(newIndex);
    });
});

radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("click", () => {
        handleSlideTransition(index);
    });
});

let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    handleSlideTransition(currentIndex); 
}, 3500);
