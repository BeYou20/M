function initializeSlider(containerId, slideClassName, dotClassName) {
    const slidesContainer = document.getElementById(containerId);
    if (!slidesContainer) return;

    const slides = slidesContainer.getElementsByClassName(slideClassName);
    const dots = slidesContainer.getElementsByClassName(dotClassName);
    let slideIndex = 0;
    let autoSlideInterval;

    if (slides.length === 0) {
        slidesContainer.parentElement.style.display = 'none';
        return;
    }

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            plusSlides(1);
        }, 5000); // Change slide every 5 seconds
    }
    
    Array.from(dots).forEach(dot => {
        dot.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.slideIndex);
            currentSlide(index);
        });
    });

    showSlides(slideIndex);
    startAutoSlide();
}

// Call the function for each slider
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('instructors-slider', 'instructor-slide', 'dot');
    initializeSlider('testimonials-slider', 'testimonial-slide', 'dot');
});
