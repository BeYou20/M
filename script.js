// رابط Google Apps Script
const webAppUrl = 'https://script.google.com/macros/s/AKfycbw5SQuYxkVhgkcXMFWcq1oVRXTpJlCTDQVvM6rkGGEbm7yg42Vh4VXVZRSirUg3k85oNQ/exec';

// دالة لجلب معرف الدورة من رابط الصفحة
function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // مثال: ?id=hifz-quran
}

// الدالة الرئيسية لجلب البيانات وعرضها
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
                document.body.innerHTML = '<h1>لم يتم العثور على بيانات هذه الدورة.</h1><p style="text-align:center;">يرجى التأكد من الرابط أو مُعرّف الدورة (ID) في ورقة البيانات.</p>';
                return;
            }

            // تحديث محتوى الصفحة
            document.getElementById('page-title').textContent = courseData.title || '';
            document.getElementById('hero-title').textContent = courseData.title || '';
            document.getElementById('hero-description').textContent = courseData.heroDescription || '';
            document.getElementById('marquee-text').textContent = courseData.marqueeText || '';
            document.getElementById('course-about').textContent = courseData.courseAbout || '';
            document.getElementById('course-name-input').value = courseData.title || '';

            // الفيديو
            const videoSection = document.querySelector('.video-section');
            if (courseData.videoUrl) {
                videoSection.style.display = 'block';
                videoSection.querySelector('iframe').src = courseData.videoUrl;
            } else {
                videoSection.style.display = 'none';
            }

            // القوائم
            const objectivesList = document.getElementById('objectives-list');
            const axesList = document.getElementById('axes-list');
            objectivesList.innerHTML = '';
            axesList.innerHTML = '';

            const objectives = courseData.objectives ? courseData.objectives.split('<br>') : [];
            objectives.forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item}`;
                    objectivesList.appendChild(li);
                }
            });

            const axes = courseData.axes ? courseData.axes.split('<br>') : [];
            axes.forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item}`;
                    axesList.appendChild(li);
                }
            });

            // الإنجازات
            const achievementsContainer = document.getElementById('achievements-text');
            const achievements = courseData.achievementsText ? courseData.achievementsText.split('<br>') : [];
            achievementsContainer.innerHTML = achievements.map(a => '• ' + a).join('<br>');

            // المدربين
            const instructorsContainer = document.getElementById('instructors-slider');
            instructorsContainer.innerHTML = '';

            const instructorsData = courseData.instructors || [];
            const instructorSlides = [];
            instructorsData.forEach((item, index) => {
                const parts = item.split(':');
                const name = parts[0] ? parts[0].trim() : '';
                const expertise = parts[1] ? parts[1].trim() : '';
                if(name && expertise){
                    const slide = document.createElement('div');
                    slide.classList.add('instructor-slide');
                    if(index === 0) slide.classList.add('active');
                    slide.innerHTML = `<div class="instructor-card"><h4>${name}</h4><p>${expertise}</p></div>`;
                    instructorsContainer.appendChild(slide);
                    instructorSlides.push(slide);
                }
            });

            // آراء المتدربين
            const testimonialsContainer = document.getElementById('testimonials-slider');
            testimonialsContainer.innerHTML = '';

            const testimonialsData = courseData.testimonials || [];
            const testimonialSlides = [];
            testimonialsData.forEach((item, index) => {
                const parts = item.split(' - ');
                const text = parts[0] ? parts[0].trim() : '';
                const author = parts[1] ? parts[1].trim() : '';
                if(text && author){
                    const slide = document.createElement('div');
                    slide.classList.add('testimonial-slide');
                    if(index === 0) slide.classList.add('active');
                    slide.innerHTML = `<p class="testimonial-text">"${text}"</p><p class="testimonial-author"><b>– ${author}</b></p>`;
                    testimonialsContainer.appendChild(slide);
                    testimonialSlides.push(slide);
                }
            });

            // الأسئلة الشائعة
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

            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = question.classList.toggle('active');
                    answer.style.display = isActive ? 'block' : 'none';
                });
            });

        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.body.innerHTML = '<h1>حدث خطأ في تحميل البيانات.</h1><p style="text-align:center;">يرجى التأكد من أن رابط Google Apps Script صحيح ويعمل.</p>';
        });
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchAndDisplayData); 
