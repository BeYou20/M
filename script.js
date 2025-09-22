// --- رابط Google Apps Script ---
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwY-4cac3jIZ-OHP1l3p4Fb4oiEgonQvxKu5h7swhpov8iMZXmQ7VpDTX_GG5zq9kIn2g/exec';

// --- عند تحميل الصفحة ---
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');
  loadCourseData(courseId);
});

// --- جلب بيانات الدورة ---
async function loadCourseData(courseId) {
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();

    // اختيار الدورة المطلوبة
    let course;
    if (Array.isArray(data)) {
      course = data.find(c => c.id === courseId) || data[0];
    } else {
      course = data;
    }

    if (!course) return;

    // --- تحديث الصفحة ---
    document.getElementById("page-title").textContent = course.title || "مؤسسة كن أنت";
    document.getElementById("hero-title").textContent = course.title || "";
    document.getElementById("hero-description").textContent = course.heroDescription || "";
    document.getElementById("marquee-text").textContent = course.marqueeText || "";
    document.getElementById("course-about").textContent = course.courseAbout || "";

    // --- الأهداف ---
    const objectivesList = document.getElementById("objectives-list");
    objectivesList.innerHTML = "";
    if (course.objectives) {
      course.objectives.split('|').forEach(obj => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${obj.trim()}`;
        objectivesList.appendChild(li);
      });
    }

    // --- المحاور ---
    const axesList = document.getElementById("axes-list");
    axesList.innerHTML = "";
    if (course.axes) {
      course.axes.split('|').forEach(ax => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-circle"></i> ${ax.trim()}`;
        axesList.appendChild(li);
      });
    }

    // --- المدربين ---
    const instructorsSlider = document.getElementById("instructors-slider");
    instructorsSlider.innerHTML = "";
    if (course.instructors && course.instructors.length) {
      course.instructors.forEach((inst, i) => {
        const div = document.createElement("div");
        div.classList.add("instructor-slide");
        if (i === 0) div.classList.add("active");
        div.innerHTML = `
          <div class="instructor-card">
            <img src="${inst.photo || 'https://via.placeholder.com/150'}" alt="${inst.name}">
            <h4>${inst.name}</h4>
            <p>${inst.role || ''}</p>
          </div>`;
        instructorsSlider.appendChild(div);
      });
    }

    // --- آراء المتدربين ---
    const testimonialsSlider = document.getElementById("testimonials-slider");
    testimonialsSlider.innerHTML = "";
    if (course.testimonials && course.testimonials.length) {
      course.testimonials.forEach((t, i) => {
        const div = document.createElement("div");
        div.classList.add("testimonial-slide");
        if (i === 0) div.classList.add("active");
        div.innerHTML = `<p class="testimonial-text">"${t.text}"</p><p><strong>${t.name}</strong></p>`;
        testimonialsSlider.appendChild(div);
      });
    }

    // --- الأسئلة الشائعة ---
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = "";
    if (course.faqs) {
      course.faqs.split('|').forEach(faq => {
        const [question, answer] = faq.split(':');
        if (question && answer) {
          const div = document.createElement("div");
          div.classList.add("faq-item");
          div.innerHTML = `
            <div class="faq-question">${question}<i class="fas fa-chevron-down"></i></div>
            <div class="faq-answer">${answer}</div>`;
          faqContainer.appendChild(div);
        }
      });
      // --- تفعيل فتح وإغلاق FAQ ---
      document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
          q.classList.toggle('active');
          const ans = q.nextElementSibling;
          ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
        });
      });
    }

    // --- الشهادات / الإنجازات ---
    const achievementsText = document.getElementById("achievements-text");
    if (course.achievementsText) {
      achievementsText.textContent = course.achievementsText.split('|').join(' | ');
    }

    // --- الفيديو ---
    if (course.videoUrl) {
      const videoSection = document.querySelector(".video-section iframe");
      videoSection.src = course.videoUrl;
    }

    // --- نموذج التسجيل: وضع اسم الدورة تلقائياً ---
    const courseNameInput = document.getElementById("course-name-input");
    if (courseNameInput) courseNameInput.value = course.title;

  } catch (err) {
    console.error("خطأ في تحميل البيانات:", err);
  }
}

// --- إرسال النموذج ---
document.getElementById("registrationForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = {
    name: this.fullname.value,
    age: this.age.value,
    gender: this.gender.value,
    country: this.country.value,
    qualification: this.qualification.value,
    specialization: this.specialization.value,
    experience: this.experience.value,
    skills: this.skills.value,
    courses: this.courses.value,
    phone: this.phone.value,
    email: this.email.value,
    telegram: this.telegram.value,
    field: this.field.value,
    cv: this.cv.value,
    courseName: document.getElementById("course-name-input").value
  };

  try {
    const res = await fetch(WEB_APP_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.json();
    alert(result.status || "تم إرسال البيانات بنجاح!");
    this.reset();
  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء إرسال البيانات.");
  }
});
