// رابط Google Apps Script اللي يعطي JSON
const DATA_URL = 'https://script.google.com/macros/s/AKfycbwY-4cac3jIZ-OHP1l3p4Fb4oiEgonQvxKu5h7swhpov8iMZXmQ7VpDTX_GG5zq9kIn2g/exec';

async function loadCourseData() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("فشل تحميل البيانات");
    
    const data = await response.json();

    // ✅ عنوان الدورة والوصف
    document.getElementById("hero-title").textContent = data.title || "";
    document.getElementById("hero-description").textContent = data.heroDescription || "";
    document.getElementById("marquee-text").textContent = data.marqueeText || "";
    document.getElementById("course-about").textContent = data.courseAbout || "";

    // ✅ الأهداف
    const objectivesList = document.getElementById("objectives-list");
    objectivesList.innerHTML = "";
    if (data.objectives) {
      data.objectives.split("|").forEach(obj => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${obj.trim()}`;
        objectivesList.appendChild(li);
      });
    }

    // ✅ المحاور
    const axesList = document.getElementById("axes-list");
    axesList.innerHTML = "";
    if (data.axes) {
      data.axes.split("|").forEach(axis => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-book-open"></i> ${axis.trim()}`;
        axesList.appendChild(li);
      });
    }

    // ✅ المدربين
    const instructorsSlider = document.getElementById("instructors-slider");
    if (data.instructors) {
      data.instructors.forEach((inst, index) => {
        const slide = document.createElement("div");
        slide.className = `instructor-slide ${index === 0 ? "active" : ""}`;
        slide.innerHTML = `
          <div class="instructor-card">
            <img src="https://i.ibb.co/4MRTZMp/avatar.png" alt="${inst.name}">
            <h4>${inst.name}</h4>
          </div>
        `;
        instructorsSlider.insertBefore(slide, instructorsSlider.querySelector(".instructor-dots"));
      });
    }

    // ✅ آراء المتدربين
    const testimonialsSlider = document.getElementById("testimonials-slider");
    if (data.testimonials) {
      data.testimonials.forEach((t, index) => {
        const slide = document.createElement("div");
        slide.className = `testimonial-slide ${index === 0 ? "active" : ""}`;
        slide.innerHTML = `<p class="testimonial-text">"${t.text}"</p>`;
        testimonialsSlider.insertBefore(slide, testimonialsSlider.querySelector(".testimonial-dots"));
      });
    }

    // ✅ الأسئلة الشائعة
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = "";
    if (data.faqs) {
      const [q, a] = data.faqs.split(":");
      const item = document.createElement("div");
      item.className = "faq-item";
      item.innerHTML = `
        <div class="faq-question">
          ${q} <i class="fas fa-chevron-down"></i>
        </div>
        <div class="faq-answer">${a}</div>
      `;
      faqContainer.appendChild(item);

      item.querySelector(".faq-question").addEventListener("click", function() {
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
    }

    // ✅ الإنجازات
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.innerHTML = "";
    if (data.achievementsText) {
      data.achievementsText.split("|").forEach(ach => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-star"></i> ${ach.trim()}`;
        achievementsList.appendChild(li);
      });
    }

    // ✅ اسم الدورة في الفورم
    document.getElementById("course-name-input").value = data.title || "";

  } catch (error) {
    console.error(error);
    alert("❌ حدث خطأ في تحميل البيانات. تأكد من الرابط.");
  }
}

// تحميل البيانات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadCourseData);
