document.addEventListener('DOMContentLoaded', () => {
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbyGsaRyOVSIiSpsP5zrlXsVSpXyLDIvyACFDkwtNhcVxhVl62mn7ziAn1WaVnG7iURoGw/exec';

    const testimonialsHTML = `
        <div class="section" data-aos="fade-up">
            <h2>آراء طلابنا</h2>
            <div class="slider-container">
                <div id="testimonials-container"></div>
                <div class="slider-dots"></div>
            </div>
        </div>
    `;

    document.getElementById('testimonials-section').innerHTML = testimonialsHTML;

    function fetchTestimonials() {
        fetch(webAppUrl)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('testimonials-container');
                const dotsContainer = document.querySelector('.slider-dots');
                container.innerHTML = '';
                dotsContainer.innerHTML = '';
                
                let slideIndex = 0;
                
                data.forEach((testimonial, index) => {
                    // إنشاء شريحة الرأي
                    const testimonialDiv = document.createElement('div');
                    testimonialDiv.classList.add('testimonial');
                    if (index === 0) {
                        testimonialDiv.classList.add('active');
                    }
                    testimonialDiv.innerHTML = `"${testimonial.testimonial}" – ${testimonial.name} (${testimonial.country})`;
                    container.appendChild(testimonialDiv);

                    // إنشاء نقطة التنقل (dot)
                    if (index < 10) { //  <--- هذا هو التعديل المطلوب: إظهار 10 نقاط فقط
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        if (index === 0) {
                          dot.classList.add('active');
                        }
                        dot.addEventListener('click', () => showSlide(index));
                        dotsContainer.appendChild(dot);
                    }
                });
                
                const testimonials = document.querySelectorAll('.testimonial');
                const dots = document.querySelectorAll('.dot');
                
                function showSlide(index) {
                    testimonials.forEach(t => t.classList.remove('active'));
                    dots.forEach(d => d.classList.remove('active'));
                    testimonials[index].classList.add('active');
                    if (index < 10) { // تأكد من وجود النقطة قبل تفعيلها
                        dots[index].classList.add('active');
                    }
                    slideIndex = index;
                }
                
                function nextSlide() {
                    showSlide((slideIndex + 1) % testimonials.length);
                }
                
                setInterval(nextSlide, 4000);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
                document.getElementById('testimonials-container').innerHTML = '<p style="text-align:center;">تعذر تحميل الآراء. حاول مرة أخرى لاحقًا.</p>';
            });
    }

    fetchTestimonials();
});
