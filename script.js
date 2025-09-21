const webAppUrl = 'https://script.google.com/macros/s/AKfycbw5SQuYxkVhgkcXMFWcq1oVRXTpJlCTDQVvM6rkGGEbm7yg42Vh4VXVZRSirUg3k85oNQ/exec';

function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id'); // تم التغيير هنا من 'courseId' إلى 'id'
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

            const objectives = courseData.objectives ? courseData.objectives.split('|') : [];
            objectives.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item}`;
                objectivesList.appendChild(li);
            });

            const axes = courseData.axes ? courseData.axes.split('|') : [];
            axes.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item}`;
                axesList.appendChild(li);
            });
            
            // Populate Instructors (as simple text with <br>)
            const instructorsContainer = document.getElementById('instructors-slider');
            if (instructorsContainer && courseData.instructors) {
                instructorsContainer.innerHTML = courseData.instructors;
            } else {
                instructorsContainer.innerHTML = 'لا يوجد بيانات للمدربين.';
            }

            // Populate Testimonials (as simple text with <br>)
            const testimonialsContainer = document.getElementById('testimonials-slider');
            if (testimonialsContainer && courseData.testimonials) {
                testimonialsContainer.innerHTML = courseData.testimonials;
            } else {
                testimonialsContainer.innerHTML = 'لا يوجد آراء للمتدربين.';
            }
            
            // Populate FAQ (as simple text with <br> and :)
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            const faqs = courseData.faqs ? courseData.faqs.split('<br>') : [];
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
