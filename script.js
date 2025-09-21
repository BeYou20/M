const webAppUrl = 'https://script.google.com/macros/s/AKfycbwY-4cac3jIZ-OHP1l3p4Fb4oiEgonQvxKu5h7swhpov8iMZXmQ7VpDTX_GG5zq9kIn2g/exec';

function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'defaultCourseId';
}

function fetchAndDisplayData() {
    fetch(webAppUrl)
        .then(response => response.json())
        .then(data => {
            const courseId = getCourseIdFromUrl();
            const courseData = data.find(row => row && row.id === courseId);

            if (!courseData) {
                document.body.innerHTML = '<h1>لم يتم العثور على بيانات هذه الدورة.</h1><p style="text-align:center;">يرجى التأكد من الرابط أو مُعرّف الدورة (ID) في ورقة البيانات.</p>';
                return;
            }

            // Update page text
            document.getElementById('page-title').textContent = courseData.title || '';
            document.getElementById('hero-title').textContent = courseData.title || '';
            document.getElementById('hero-description').textContent = courseData.heroDescription || '';
            document.getElementById('marquee-text').textContent = courseData.marqueeText || '';
            document.getElementById('course-about').textContent = courseData.courseAbout || '';
            document.getElementById('achievements-text').textContent = courseData.achievementsText || '';
            document.getElementById('course-name-input').value = courseData.title || '';

            // Video
            const videoSection = document.querySelector('.video-section');
            if (courseData.videoUrl) {
                videoSection.style.display = 'block';
                videoSection.querySelector('iframe').src = courseData.videoUrl;
            } else {
                videoSection.style.display = 'none';
            }

            // Objectives & Axes
            const objectivesList = document.getElementById('objectives-list');
            const axesList = document.getElementById('axes-list');
            objectivesList.innerHTML = '';
            axesList.innerHTML = '';

            (courseData.objectives ? courseData.objectives.split('|') : []).forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item.trim()}`;
                objectivesList.appendChild(li);
            });

            (courseData.axes ? courseData.axes.split('|') : []).forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item.trim()}`;
                axesList.appendChild(li);
            });

            // Instructors Slider
            const instructorsContainer = document.getElementById('instructors-slider');
            const instructorDotsContainer = document.querySelector('#instructors-slider + .instructor-dots');
            instructorsContainer.innerHTML = '';
            if (instructorDotsContainer) instructorDotsContainer.innerHTML = '';

            const instructors = courseData.instructors || [];
            const instructorSlides = [];
            instructors.forEach((ins, index) => {
                if (!ins.name) return;

                const instructorSlide = document.createElement('div');
                instructorSlide.classList.add('instructor-slide');
                if (index === 0) instructorSlide.classList.add('active');
                instructorSlide.innerHTML = `<div class="instructor-card"><h4>${ins.name}</h4><p>${ins.expertise || ''}</p></div>`;
                instructorsContainer.appendChild(instructorSlide);
                instructorSlides.push(instructorSlide);

                if (instructorDotsContainer) {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    dot.addEventListener('click', () => showSlide(instructorSlides, index, instructorDotsContainer, true));
                    instructorDotsContainer.appendChild(dot);
                }
            });

            // Testimonials Slider
            const testimonialsContainer = document.getElementById('testimonials-slider');
            const testimonialDotsContainer = document.querySelector('#testimonials-slider + .testimonial-dots');
            testimonialsContainer.innerHTML = '';
            if (testimonialDotsContainer) testimonialDotsContainer.innerHTML = '';

            const testimonials = courseData.testimonials || [];
            const testimonialSlides = [];
            testimonials.forEach((t, index) => {
                if (!t.text) return;

                const testimonialSlide = document.createElement('div');
                testimonialSlide.classList.add('testimonial-slide');
                if (index === 0) testimonialSlide.classList.add('active');
                testimonialSlide.innerHTML = `<p class="testimonial-text">"${t.text}"</p><p class="testimonial-author"><b>– ${t.author || ''}</b></p>`;
                testimonialsContainer.appendChild(testimonialSlide);
                testimonialSlides.push(testimonialSlide);

                if (testimonialDotsContainer) {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    dot.addEventListener('click', () => showSlide(testimonialSlides, index, testimonialDotsContainer, false));
                    testimonialDotsContainer.appendChild(dot);
                }
            });

            // FAQ
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            (courseData.faqs ? courseData.faqs.split('<br>') : []).forEach(item => {
                const parts = item.split(':');
                const question = parts[0]?.trim();
                const answer = parts[1]?.trim();
                if (question && answer) {
                    const faqItem = document.createElement('div');
                    faqItem.classList.add('faq-item');
                    faqItem.innerHTML = `<div class="faq-question"><span>${question}</span><i class="fa-solid fa-chevron-down"></i></div><div class="faq-answer"><p>${answer}</p></div>`;
                    faqContainer.appendChild(faqItem);
                }
            });

            // FAQ toggle
            document.querySelectorAll('.faq-question').forEach(q => {
                q.addEventListener('click', () => {
                    const ans = q.nextElementSibling;
                    const icon = q.querySelector('i');
                    const active = q.classList.toggle('active');
                    ans.style.display = active ? 'block' : 'none';
                    icon.classList.toggle('rotated', active);
                });
            });

            // Slider functions
            let currentInstructorSlide = 0;
            let currentTestimonialSlide = 0;

            function showSlide(slides, index, dotsContainer, isInstructor) {
                const dots = dotsContainer?.querySelectorAll('.dot') || [];
                slides.forEach(s => s.classList.remove('active'));
                dots.forEach(d => d.classList.remove('active'));
                if (slides[index]) slides[index].classList.add('active');
                if (dots[index]) dots[index].classList.add('active');
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

            if (instructors.length > 1) setInterval(nextInstructorSlide, 5000);
            if (testimonials.length > 1) setInterval(nextTestimonialSlide, 5000);

        })
        .catch(err => {
            console.error(err);
            document.body.innerHTML = '<h1>حدث خطأ في تحميل البيانات.</h1><p style="text-align:center;">يرجى التأكد من أن رابط Google Apps Script صحيح ويعمل.</p>';
        });
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyR6j1d5YlV04bM9Q2T9H4k5eA6Lg0xT4g5pL8-z5qJ1q9u2X5Q/exec";
    
    fetch(scriptUrl, { method: 'POST', body: formData })
        .then(r => r.text())
        .then(d => { alert('تم إرسال البيانات بنجاح!'); form.reset(); })
        .catch(e => { console.error(e); alert('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة لاحقًا.'); });
}

// Sticky buttons & AOS
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const regBtn = document.querySelector('.sticky-register-btn');
    const waBtn = document.querySelector('.sticky-whatsapp-btn');
    const scrollY = window.scrollY;
    if (scrollY > (hero.offsetHeight / 2)) { regBtn.style.display='block'; waBtn.style.display='flex'; } 
    else { regBtn.style.display='none'; waBtn.style.display='none'; }
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    fetchAndDisplayData();
});
