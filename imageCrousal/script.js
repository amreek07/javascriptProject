const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[n].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Auto-slide every 3 seconds
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);
