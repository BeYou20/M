// رابط Google Apps Script
const webAppUrl = 'https://script.google.com/macros/s/AKfycbw5SQuYxkVhgkcXMFWcq1oVRXTpJlCTDQVvM6rkGGEbm7yg42Vh4VXVZRSirUg3k85oNQ/exec';

document.addEventListener("DOMContentLoaded", () => {
    fetch(webAppUrl)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) throw new Error("لا توجد بيانات متاحة");

            const courseData = data[0]; // جلب أول دورة مباشرة لاختبار العرض

            // تحديث الصفحة
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

            // الأهداف والمحاور
            const objectivesList = document.getElementById('objectives-list');
            const axesList = document.getElementById('axes-list');
            objectivesList.innerHTML = '';
            axesList.innerHTML = '';

            (courseData.objectives || '').split('<br>').forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${item}`;
                    objectivesList.appendChild(li);
                }
            });

            (courseData.axes || '').split('<br>').forEach(item => {
                if(item.trim()){
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> ${item}`;
                    axesList.appendChild(li);
                }
            });

            // الإنجازات
            const achievementsContainer = document.getElementById('achievements-text');
            achievementsContainer.innerHTML = (courseData.achievementsText || '').split('<br>').map(a => '• ' + a).join('<br>');

            console.log('تم تحميل البيانات بنجاح!');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.body.innerHTML = '<h1>حدث خطأ في تحميل البيانات.</h1><p style="text-align:center;">يرجى التأكد من أن رابط Google Apps Script صحيح ويعمل.</p>';
        });
});
