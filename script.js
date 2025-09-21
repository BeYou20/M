const webAppUrl = 'https://script.google.com/macros/s/AKfycbw5SQuYxkVhgkcXMFWcq1oVRXTpJlCTDQVvM6rkGGEbm7yg42Vh4VXVZRSirUg3k85oNQ/exec';

function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    return courseId || 'defaultCourseId';
}

function fetchAndDisplayData() {
    fetch(webAppUrl)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const courseId = getCourseIdFromUrl();
            const courseData = data.find(row => row && row.id && row.id.toString() === courseId.toString());

            if (!courseData) {
                console.error(`Course with ID "${courseId}" not found.`);
                document.body.innerHTML = '<h1>لم يتم العثور على بيانات هذه الدورة.</h1><p style="text-align:center;">يرجى التأكد من الرابط أو مُعرّف الدورة (ID) في ورقة البيانات.</p>';
                return;
            }

            // تحديث المحتوى العام
            document.getElementById('page-title').textContent = courseData.title || '';
            document.getElementById('hero-title').textContent = courseData.title || '';
            document.getElementById('hero-description').textContent = courseData.heroDescription || '';
            document.getElementById('marquee-text').textContent = courseData.marqueeText || '';
            document.getElementById('course-about').textContent = courseData.courseAbout || '';
            document.getElementById('achievements-text').textContent = courseData.achievementsText || '';
            document.getElementById('course-name-input').value = courseData.title || '';

            // الفيديو
            const videoSection = document.querySelector('.video-section');
            if (courseData.videoUrl) {
                videoSection.style.display = 'block';
                videoSection.querySelector('iframe').src = courseData.videoUrl;
            } else {
                videoSection.style.display = 'none';
            }

            // الأهداف والمحاور
            const objectivesList = document.getElementById('objectives-list');
            const axesList = document.getElementById('axes-list');
            objectivesList.innerHTML = '';
            axesList.innerHTML = '';

            (courseData.objectives ? courseData.objectives.split('|') : []).forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item}`;
                    objectivesList.appendChild(li);
                }
            });

            (courseData.axes ? courseData.axes.split('|') : []).forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item}`;
                    axesList.appendChild(li);
                }
            });

            // المدربون
            const instructorsContainer = document.getElementById('instructors-slider');
            instructorsContainer.innerHTML = '';
            if(courseData.instructors){
                courseData.instructors.split('<br>').forEach(item => {
                    if(item.trim()){
                        const div = document.createElement('div');
                        div.classList.add('instructor-item');
                        div.textContent = item;
                        instructorsContainer.appendChild(div);
                    }
                });
            } else {
                instructorsContainer.innerHTML = 'لا يوجد بيانات للمدربين.';
            }

            // آراء المتدربين (testimonials)
            const testimonialsContainer = document.getElementById('testimonials-slider');
            testimonialsContainer.innerHTML = '';
            if(courseData.testimonials){
                courseData.testimonials.split('<br>').forEach(item => {
                    if(item.trim()){
                        const div = document.createElement('div');
                        div.classList.add('testimonial-item');
                        div.textContent = item;
                        testimonialsContainer.appendChild(div);
                    }
                });
            } else {
                testimonialsContainer.innerHTML = 'لا يوجد آراء للمتدربين.';
            }

            // الأسئلة الشائعة (FAQ)
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            const faqs = courseData.faqs ? courseData.faqs.split('<br>') : [];
            faqs.forEach(item => {
                const parts = item.split(':');
                const question = parts[0] ? parts[0].trim() : '';
                const answer = parts[1] ? parts[1].trim() : '';
                if(question && answer){
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

            // تفعيل طي وفك الأسئلة
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('i');
                    const isActive = question.classList.toggle('active');
                    answer.style.display = isActive ? 'block' : 'none';
                    icon.classList.toggle('rotated', isActive);
                });
            });

            console.log('تم تحميل البيانات بنجاح!');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.body.innerHTML = '<h1>حدث خطأ في تحميل البيانات.</h1><p style="text-align:center;">يرجى التأكد من أن رابط Google Apps Script صحيح ويعمل.</p>';
        });
}

// إرسال النموذج
function submitForm(event){
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyR6j1d5YlV04bM9Q2T9H4k5eA6Lg0xT4g5pL8-z5qJ1q9u2X5Q/exec";

    fetch(scriptUrl, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(data => { alert('تم إرسال البيانات بنجاح!'); form.reset(); })
        .catch(error => { console.error('Error!', error.message); alert('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة لاحقًا.'); });
}

// تفعيل أزرار التمرير
window.addEventListener('scroll', function(){
    const heroSection = document.querySelector('.hero');
    const registerBtn = document.querySelector('.sticky-register-btn');
    const whatsappBtn = document.querySelector('.sticky-whatsapp-btn');
    const scrollPosition = window.scrollY;

    if(scrollPosition > (heroSection.offsetHeight / 2)){
        registerBtn.style.display = 'block';
        whatsappBtn.style.display = 'flex';
    } else {
        registerBtn.style.display = 'none';
        whatsappBtn.style.display = 'none';
    }
});

// تفعيل AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    fetchAndDisplayData();
});
