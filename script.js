const webAppUrl = 'https://script.google.com/macros/s/AKfycbwY-4cac3jIZ-OHP1l3p4Fb4oiEgonQvxKu5h7swhpov8iMZXmQ7VpDTX_GG5zq9kIn2g/exec';

function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    return courseId || 'defaultCourseId';
}

function fetchAndDisplayData() {
    fetch(webAppUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const courseId = getCourseIdFromUrl();
            const courseData = data.find(row => row && row.id && row.id.toString() === courseId.toString());

            if (!courseData) {
                console.error(`Course with ID "${courseId}" not found in data.`);
                document.body.innerHTML = '<h1>لم يتم العثور على بيانات هذه الدورة.</h1><p style="text-align:center;">يرجى التأكد من الرابط أو مُعرّف الدورة (ID) في ورقة البيانات.</p>';
                return;
            }

            // Update Page Content
            document.getElementById('page-title').textContent = courseData.title || '';
            document.getElementById('hero-title').textContent = courseData.title || '';
            document.getElementById('hero-description').textContent = courseData.heroDescription || '';
            document.getElementById('marquee-text').textContent = courseData.marqueeText || '';
            document.getElementById('course-about').textContent = courseData.courseAbout || '';
            document.getElementById('achievements-text').textContent = courseData.achievementsText || '';
            document.getElementById('course-name-input').value = courseData.title || '';

            const videoSection = document.querySelector('.video-section');
            if (courseData.videoUrl) {
                videoSection.style.display = 'block';
                videoSection.querySelector('iframe').src = courseData.videoUrl;
            } else {
                videoSection.style.display = 'none';
            }

            // Populate Lists (Objectives and Axes)
            const objectivesList = document.getElementById('objectives-list');
            const axesList = document.getElementById('axes-list');
            objectivesList.innerHTML = '';
            axesList.innerHTML = '';

            const objectives = courseData.objectives ? courseData.objectives.split('|').map(item => item.trim()).filter(item => item) : [];
            objectives.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item}`;
                objectivesList.appendChild(li);
            });

            const axes = courseData.axes ? courseData.axes.split('|').map(item => item.trim()).filter(item => item) : [];
            axes.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item}`;
                axesList.appendChild(li);
            });
            
            // Populate Instructors Slider
            const instructorsContainer = document.getElementById('instructors-slider');
            const instructorDotsContainer = document.querySelector('#instructors-slider .slider-dots');
            instructorsContainer.innerHTML = '';
            if (instructorDotsContainer) {
                instructorDotsContainer.innerHTML = '';
            }
            
            const instructorsData = courseData.instructors ? courseData.instructors : [];
            const instructorSlides = [];
            instructorsData.forEach((item, index) => {
                const name = item.name ? item.name.trim() : '';
                const expertise = item.expertise ? item.expertise.trim() : '';
                
                if (name && expertise) {
                    const instructorSlide = document.createElement('div');
                    instructorSlide.classList.add('instructor-slide');
                    if (index === 0) instructorSlide.classList.add('active');
                    
                    instructorSlide.innerHTML = `
                        <div class="instructor-card">
                            <h4>${name}</h4>
                            <p>${expertise}</p>
                        </div>
                    `;
                    instructorsContainer.appendChild(instructorSlide);
                    instructorSlides.push(instructorSlide);

                    if (instructorDotsContainer) {
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        dot.addEventListener('click', () => showSlide(instructorSlides, index, instructorDotsContainer, true));
                        instructorDotsContainer.appendChild(dot);
                    }
                }
            });

            // Populate Testimonials Slider
            const testimonialsContainer = document.getElementById('testimonials-slider');
            const testimonialDotsContainer = document.querySelector('#testimonials-slider .slider-dots');
            testimonialsContainer.innerHTML = '';
            if (testimonialDotsContainer) {
                 testimonialDotsContainer.innerHTML = '';
            }

            const testimonialsData = courseData.testimonials ? courseData.testimonials : [];
            const testimonialSlides = [];
            testimonialsData.forEach((item, index) => {
                const text = item.text ? item.text.trim() : '';
                const author = item.author ? item.author.trim() : '';
                
                if (text && author) {
                    const testimonialSlide = document.createElement('div');
                    testimonialSlide.classList.add('testimonial-slide');
                    if (index === 0) testimonialSlide.classList.add('active');

                    testimonialSlide.innerHTML = `
                        <p class="testimonial-text">"${text}"</p>
                        <p class="testimonial-author"><b>– ${author}</b></p>
                    `;
                    testimonialsContainer.appendChild(testimonialSlide);
                    testimonialSlides.push(testimonialSlide);

                    if (testimonialDotsContainer) {
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        dot.addEventListener('click', () => showSlide(testimonialSlides, index, testimonialDotsContainer, false));
                        testimonialDotsContainer.appendChild(dot);
                    }
                }
            });
            
            // Populate FAQ
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            const faqs = courseData.faqs ? courseData.faqs.split('<br>').map(item => item.trim()).filter(item => item) : [];
            faqs.forEach(item => {
                const parts = item.split(':');
                const question = parts[0] ? parts[0].trim() : '';
                const answer = parts[1] ? parts[1].trim() : '';
                
                if (question && answer) {
                    const faqItem = document.createElement('div');
                    faqItem.classList.add('faq-item');
                    faqItem.innerHTML = `
                        <div class="faq-question">
                            <span>${question}</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>${answer}</p>
                        </div>
                    `;
                    faqContainer.appendChild(faqItem);
                }
            });

            // Populate Achievements
            const achievementsList = document.getElementById('achievements-list');
            if (achievementsList && courseData.achievementsText) {
                const achievements = courseData.achievementsText.split('|').map(item => item.trim()).filter(item => item !== '');
                achievementsList.innerHTML = achievements.map(item => `<li><i class="fa-solid fa-trophy"></i>${item}</li>`).join('');
            }
            
            // Add event listeners for FAQ
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('i');
                    const isActive = question.classList.toggle('active');
                    if (isActive) {
                        answer.style.display = 'block';
                        icon.classList.add('rotated');
                    } else {
                        answer.style.display = 'none';
                        icon.classList.remove('rotated');
                    }
                });
            });

            let currentInstructorSlide = 0;
            let currentTestimonialSlide = 0;
            const instructorDots = document.querySelectorAll('#instructors-slider .slider-dots .dot');
            const testimonialDots = document.querySelectorAll('#testimonials-slider .slider-dots .dot');
            
            function showSlide(slides, index, dotsContainer, isInstructor) {
                slides.forEach(slide => slide.classList.remove('active'));
                dotsContainer.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
                if (slides[index]) slides[index].classList.add('active');
                if (dotsContainer.querySelectorAll('.dot')[index]) dotsContainer.querySelectorAll('.dot')[index].classList.add('active');
                if (isInstructor) currentInstructorSlide = index; else currentTestimonialSlide = index;
            }

            function nextInstructorSlide() {
                if (instructorSlides.length > 0) {
                    currentInstructorSlide = (currentInstructorSlide + 1) % instructorSlides.length;
                    showSlide(instructorSlides, currentInstructorSlide, instructorDotsContainer, true);
                }
            }
            
            function nextTestimonialSlide() {
                if (testimonialSlides.length > 0) {
                    currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialSlides.length;
                    showSlide(testimonialSlides, currentTestimonialSlide, testimonialDotsContainer, false);
                }
            }
            
            if (instructorsData.length > 1) setInterval(nextInstructorSlide, 5000);
            if (testimonialsData.length > 1) setInterval(nextTestimonialSlide, 5000);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.body.innerHTML = '<h1>حدث خطأ في تحميل البيانات.</h1><p style="text-align:center;">يرجى التأكد من أن رابط Google Apps Script صحيح ويعمل.</p>';
        });
}

// Form Submission
function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyR6j1d5YlV04bM9Q2T9H4k5eA6Lg0xT4g5pL8-z5qJ1q9u2X5Q/exec";
    
    fetch(scriptUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('تم إرسال البيانات بنجاح!');
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة لاحقًا.');
    });
}

// AOS and Sticky Buttons
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const registerBtn = document.querySelector('.sticky-register-btn');
    const whatsappBtn = document.querySelector('.sticky-whatsapp-btn');
    const scrollPosition = window.scrollY;

    if (scrollPosition > (heroSection.offsetHeight / 2)) {
        registerBtn.style.display = 'block';
        whatsappBtn.style.display = 'flex';
    } else {
        registerBtn.style.display = 'none';
        whatsappBtn.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
    fetchAndDisplayData();
});

