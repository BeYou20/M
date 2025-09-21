// =======================
// جلب بيانات الدورات من JSON
// =======================
fetch('DataMatrix.json')
  .then(response => response.json())
  .then(data => {

    // قراءة id الدورة من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id'); // مثال: index.html?id=active-learning

    // البحث عن الدورة المناسبة
    let course;
    if (Array.isArray(data)) {
      course = data.find(c => c.id === courseId) || data[0]; // إذا لم يوجد id، نأخذ الأولى
    } else {
      course = data; // إذا كان JSON يحتوي دورة واحدة فقط
    }

    // =======================
    // Hero Section
    // =======================
    document.getElementById("hero-title").textContent = course.title;
    document.getElementById("hero-description").textContent = course.heroDescription;
    document.getElementById("marquee-text").textContent = course.marqueeText;

    // =======================
    // نبذة عن الدورة
    // =======================
    document.getElementById("course-about").textContent = course.courseAbout;

    // =======================
    // الأهداف
    // =======================
    const objectivesList = document.getElementById("objectives-list");
    objectivesList.innerHTML = '';
    course.objectives.split("|").forEach(obj => {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa fa-check-circle"></i> ${obj.trim()}`;
      objectivesList.appendChild(li);
    });

    // =======================
    // المحاور
    // =======================
    const axesList = document.getElementById("axes-list");
    axesList.innerHTML = '';
    course.axes.split("|").forEach(axis => {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa fa-lightbulb"></i> ${axis.trim()}`;
      axesList.appendChild(li);
    });

    // =======================
    // المدربين
    // =======================
    const instructorsSlider = document.getElementById("instructors-slider");
    instructorsSlider.querySelectorAll('.instructor-slide').forEach(e => e.remove());
    course.instructors.forEach((inst, index) => {
      let div = document.createElement("div");
      div.classList.add("instructor-slide");
      if (index === 0) div.classList.add("active");
      div.innerHTML = `
        <div class="instructor-card">
          <img src="https://i.ibb.co/z5z6tXz/default-avatar.png" alt="${inst.name}">
          <h4>${inst.name}</h4>
        </div>
      `;
      instructorsSlider.insertBefore(div, instructorsSlider.querySelector(".instructor-dots"));
    });

    // =======================
    // آراء المتدربين
    // =======================
    const testimonialsSlider = document.getElementById("testimonials-slider");
    testimonialsSlider.querySelectorAll('.testimonial-slide').forEach(e => e.remove());
    course.testimonials.forEach((test, index) => {
      let div = document.createElement("div");
      div.classList.add("testimonial-slide");
      if (index === 0) div.classList.add("active");
      div.innerHTML = `<p class="testimonial-text">"${test.text}"</p>`;
      testimonialsSlider.insertBefore(div, testimonialsSlider.querySelector(".testimonial-dots"));
    });

    // =======================
    // الأسئلة الشائعة
    // =======================
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = '';
    course.faqs.split("|").forEach(faq => {
      const [q, a] = faq.split(":");
      let div = document.createElement("div");
      div.classList.add("faq-item");
      div.innerHTML = `
        <div class="faq-question">${q} <i class="fa fa-chevron-down"></i></div>
        <div class="faq-answer">${a}</div>
      `;
      faqContainer.appendChild(div);
    });

    // =======================
    // الإنجازات بعد الدورة
    // =======================
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.innerHTML = '';
    course.achievementsText.split("|").forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa fa-trophy"></i> ${item.trim()}`;
      achievementsList.appendChild(li);
    });

    // =======================
    // تعبئة اسم الدورة في الفورم
    // =======================
    document.getElementById("course-name-input").value = course.title;

  })
  .catch(error => console.error("خطأ في تحميل بيانات الدورة:", error));
