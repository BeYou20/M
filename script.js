// جلب ID من الرابط (?id=...)
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('id');

// رابط Web App
const webAppUrl = "https://script.google.com/macros/s/AKfycbwY-4cac3jIZ-OHP1l3p4Fb4oiEgonQvxKu5h7swhpov8iMZXmQ7VpDTX_GG5zq9kIn2g/exec";

// استدعاء البيانات
fetch(webAppUrl)
  .then(response => response.json())
  .then(data => {
    // إذا كانت مصفوفة، البحث عن الدورة بالـ id
    let course = Array.isArray(data) 
        ? data.find(c => c.id === courseId) || data[0]
        : data;

    if(!course) {
      console.error("❌ لم يتم العثور على الدورة.");
      return;
    }

    // ملأ العناصر بالبيانات مع حماية ضد القيم الفارغة
    document.getElementById("page-title").textContent = course.title || "";
    document.getElementById("hero-title").textContent = course.title || "";
    document.getElementById("hero-description").textContent = course.heroDescription || "";
    document.getElementById("marquee-text").textContent = course.marqueeText || "";
    document.getElementById("course-about").textContent = course.courseAbout || "";

    // الأهداف
    const objectivesList = document.getElementById("objectives-list");
    objectivesList.innerHTML = "";
    (course.objectives || "").split('|').forEach(obj => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fas fa-check-circle"></i>${obj.trim()}`;
      objectivesList.appendChild(li);
    });

    // المحاور
    const axesList = document.getElementById("axes-list");
    axesList.innerHTML = "";
    (course.axes || "").split('|').forEach(ax => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fas fa-circle"></i>${ax.trim()}`;
      axesList.appendChild(li);
    });

    // المدربين
    const instructorsSlider = document.getElementById("instructors-slider");
    instructorsSlider.innerHTML = "";
    course.instructors?.forEach(inst => {
      const div = document.createElement("div");
      div.classList.add("instructor-slide", "active");
      div.innerHTML = `<div class="instructor-card"><h4>${inst.name}</h4></div>`;
      instructorsSlider.appendChild(div);
    });

    // آراء المتدربين
    const testimonialsSlider = document.getElementById("testimonials-slider");
    testimonialsSlider.innerHTML = "";
    course.testimonials?.forEach(test => {
      const div = document.createElement("div");
      div.classList.add("testimonial-slide", "active");
      div.innerHTML = `<p class="testimonial-text">"${test.text}"</p>`;
      testimonialsSlider.appendChild(div);
    });

    // الأسئلة الشائعة
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = "";
    if(course.faqs){
      (course.faqs || "").split('|').forEach(faq => {
        const [question, answer] = faq.split(':');
        if(question && answer){
          const div = document.createElement("div");
          div.classList.add("faq-item");
          div.innerHTML = `
            <div class="faq-question">${question}<i class="fas fa-chevron-down"></i></div>
            <div class="faq-answer">${answer}</div>
          `;
          faqContainer.appendChild(div);
        }
      });
    }

    // الإنجازات
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.innerHTML = "";
    (course.achievementsText || "").split('|').forEach(a => {
      const li = document.createElement("li");
      li.textContent = a.trim();
      achievementsList.appendChild(li);
    });

    // الفيديو
    if(course.videoUrl){
      const videoSection = document.querySelector(".video-section iframe");
      if(videoSection) videoSection.src = course.videoUrl;
    }

    // تحديث اسم الدورة في النموذج
    const courseNameInput = document.getElementById("course-name-input");
    if(courseNameInput) courseNameInput.value = course.title || "";

  })
  .catch(error => console.error("خطأ في تحميل بيانات الدورة:", error));

// FAQ toggle
document.addEventListener("click", function(e){
  if(e.target.classList.contains("faq-question")){
    e.target.classList.toggle("active");
    const answer = e.target.nextElementSibling;
    if(answer) answer.classList.toggle("visible");
  }
});
