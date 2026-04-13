const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
];

const content = {
  ar: {
    dir: "rtl",
    schoolName: "مدرسة سمارت كيدز",
    tagline: "تعلّم • لعب • إبداع • تألق",
    nav: { home: "الرئيسية", about: "من نحن", programs: "البرامج", activities: "الأنشطة", apply: "قدّم الآن", contact: "تواصل معنا" },
    heroTitle: "مدرسة ملوّنة وممتعة يتعلم فيها الأطفال بفرح",
    heroDesc: "مدرسة سمارت كيدز تساعد الأطفال على النمو من خلال التفكير النقدي، والإبداع، والتعلم متعدد اللغات، وتجارب تقنية ممتعة داخل بيئة آمنة وداعمة.",
    heroApply: "قدّم الآن",
    heroActivities: "شاهد الأنشطة",
    highlightsTitle: "لماذا يحب الأطفال مدرسة سمارت كيدز؟",
    highlights: [
      { icon: "🌍", title: "تعلم متعدد اللغات", text: "الإنجليزية والألمانية والإسبانية والعربية مع بناء مهارات تواصل قوية من سن مبكرة." },
      { icon: "🧠", title: "تفكير وإبداع", text: "حل المشكلات والخيال والثقة بالنفس والفضول في كل حصة." },
      { icon: "✨", title: "أنشطة ممتعة", text: "رسم وموسيقى ورياضة وأنشطة تقنية تفاعلية بشكل أسبوعي." }
    ],
    galleryTitle: "صور الأطفال والفصول والأنشطة",
    aboutTitle: "عن مدرسة سمارت كيدز",
    aboutIntro: "نصنع تجربة تعليمية دافئة ومرحة وحديثة للأطفال والعائلات.",
    visionTitle: "الرؤية",
    visionText: "إعداد أطفال سعداء وواثقين وفضوليين وجاهزين للتعلّم والتواصل والقيادة في المستقبل.",
    missionTitle: "الرسالة",
    missionText: "تقديم تعليم ابتدائي ممتع يجمع بين قوة المناهج واللغات وتطوير الشخصية والابتكار المناسب للأطفال.",
    goalsTitle: "أهداف المدرسة",
    goals: ["تطوير مهارات التفكير", "تعزيز القدرات اللغوية", "بناء شخصية الطفل"],
    programsTitle: "البرامج الأكاديمية",
    programs: [
      { cls: "yellow", icon: "📘", title: "المواد الأساسية", items: ["الرياضيات", "العلوم", "العربية"] },
      { cls: "pink", icon: "🗣️", title: "اللغات", items: ["الإنجليزية", "الألمانية", "الإسبانية"] },
      { cls: "blue", icon: "💡", title: "تنمية المهارات", items: ["حل المشكلات", "الإبداع", "البرمجة الأساسية (اختياري)"] }
    ],
    activitiesTitle: "الأنشطة الطلابية",
    activities: [
      { icon: "🎨", title: "الرسم", text: "التعبير الإبداعي من خلال الألوان والرسم والخيال.", image: galleryImages[1] },
      { icon: "⚽", title: "الرياضة", text: "حركة وتعاون ولياقة وعادات صحية.", image: galleryImages[3] },
      { icon: "🎵", title: "الموسيقى", text: "إيقاع وغناء وأداء في أجواء ممتعة.", image: galleryImages[4] },
      { icon: "💻", title: "أنشطة تقنية", text: "تعلم رقمي بسيط وألعاب منطق واستكشاف تقني ممتع.", image: galleryImages[5] }
    ],
    applyTitle: "قدّم الآن",
    applyDesc: "املأ النموذج وسيتواصل معك فريق القبول قريباً.",
    labels: {
      childName: "اسم الطفل", age: "العمر", grade: "الصف", phone: "رقم هاتف ولي الأمر", preferredLanguage: "اللغة المفضلة",
      contactTitle: "تواصل معنا", phoneLabel: "الهاتف:", emailLabel: "البريد الإلكتروني:", locationLabel: "الموقع:",
      locationText: "مدرسة سمارت كيدز، وسط المدينة، حي التعليم العائلي",
      contactFormTitle: "أرسل لنا رسالة", contactName: "اسمك", contactEmail: "بريدك الإلكتروني", contactMessage: "الرسالة",
      submitApp: "إرسال الطلب", submitMsg: "إرسال الرسالة", appSuccess: "تم إرسال الطلب بنجاح.", msgSuccess: "تم إرسال الرسالة بنجاح."
    },
    grades: ["روضة 1", "روضة 2", "الصف 1", "الصف 2", "الصف 3", "الصف 4", "الصف 5", "الصف 6"],
    languages: ["العربية", "الإنجليزية", "الألمانية", "الإسبانية"],
    footerText: "مدرسة سمارت كيدز • مكان مشرق وآمن لكل طفل",
    langToggle: "العربية / English"
  },
  en: {
    dir: "ltr",
    schoolName: "Smart Kids School",
    tagline: "Learn • Play • Create • Shine",
    nav: { home: "Home", about: "About Us", programs: "Programs", activities: "Activities", apply: "Apply Now", contact: "Contact" },
    heroTitle: "A colorful school where children learn with joy",
    heroDesc: "Smart Kids School helps children grow through critical thinking, creativity, multilingual learning, and fun technology-based experiences in a safe and caring environment.",
    heroApply: "Apply Now",
    heroActivities: "See Activities",
    highlightsTitle: "Why children love Smart Kids School",
    highlights: [
      { icon: "🌍", title: "Multilingual Learning", text: "English, German, Spanish, Arabic, and strong communication from an early age." },
      { icon: "🧠", title: "Thinking & Creativity", text: "Problem solving, imagination, confidence, and curiosity in every class." },
      { icon: "✨", title: "Fun Activities", text: "Drawing, music, sports, and interactive technology sessions every week." }
    ],
    galleryTitle: "Children, classrooms, and activities",
    aboutTitle: "About Smart Kids School",
    aboutIntro: "We create a warm, playful, and modern educational experience for children and families.",
    visionTitle: "Vision",
    visionText: "To raise happy, confident, curious children who are ready to learn, communicate, and lead in the future.",
    missionTitle: "Mission",
    missionText: "To deliver a joyful primary education that combines strong academics, languages, personal growth, and child-friendly innovation.",
    goalsTitle: "School Goals",
    goals: ["Improving thinking skills", "Enhancing language abilities", "Building children's personality"],
    programsTitle: "Academic Programs",
    programs: [
      { cls: "yellow", icon: "📘", title: "Core Subjects", items: ["Math", "Science", "Arabic"] },
      { cls: "pink", icon: "🗣️", title: "Languages", items: ["English", "German", "Spanish"] },
      { cls: "blue", icon: "💡", title: "Skills Development", items: ["Problem Solving", "Creativity", "Basic Programming (optional)"] }
    ],
    activitiesTitle: "Student Activities",
    activities: [
      { icon: "🎨", title: "Drawing", text: "Creative expression through colors, painting, and imagination.", image: galleryImages[1] },
      { icon: "⚽", title: "Sports", text: "Movement, teamwork, fitness, and healthy habits.", image: galleryImages[3] },
      { icon: "🎵", title: "Music", text: "Rhythm, singing, and performance in a joyful setting.", image: galleryImages[4] },
      { icon: "💻", title: "Technology Activities", text: "Simple digital learning, logic games, and playful tech discovery.", image: galleryImages[5] }
    ],
    applyTitle: "Apply Now",
    applyDesc: "Fill out the form and our admissions team will contact you soon.",
    labels: {
      childName: "Child's name", age: "Age", grade: "Grade", phone: "Parent's phone number", preferredLanguage: "Preferred language",
      contactTitle: "Contact Us", phoneLabel: "Phone:", emailLabel: "Email:", locationLabel: "Location:",
      locationText: "Smart Kids School, City Center, Family Education District",
      contactFormTitle: "Send us a message", contactName: "Your name", contactEmail: "Your email", contactMessage: "Message",
      submitApp: "Submit Application", submitMsg: "Send Message", appSuccess: "Application submitted successfully.", msgSuccess: "Message sent successfully."
    },
    grades: ["KG 1", "KG 2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
    languages: ["English", "Arabic", "German", "Spanish"],
    footerText: "Smart Kids School • A bright and safe place for every child",
    langToggle: "العربية / English"
  }
};

let currentLang = "ar";

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => [...document.querySelectorAll(sel)];

function renderHighlights(items) {
  qs("#highlightsGrid").innerHTML = items.map(item => `
    <article class="feature-card">
      <div class="icon">${item.icon}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderGallery() {
  qs("#galleryGrid").innerHTML = galleryImages.map(src => `
    <div class="gallery-item"><img src="${src}" alt="school activity"></div>
  `).join("");
}

function renderGoals(goals) {
  qs("#goalsGrid").innerHTML = goals.map(goal => `
    <article class="goal-card">
      <div class="icon">🧩</div>
      <h4>${goal}</h4>
    </article>
  `).join("");
}

function renderPrograms(programs) {
  qs("#programsGrid").innerHTML = programs.map(item => `
    <article class="program-card ${item.cls}">
      <div class="icon">${item.icon}</div>
      <h4>${item.title}</h4>
      <ul>${item.items.map(x => `<li>${x}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderActivities(activities) {
  qs("#activitiesGrid").innerHTML = activities.map(item => `
    <article class="activity-card">
      <div class="activity-image"><img src="${item.image}" alt="${item.title}"></div>
      <div class="icon">${item.icon}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function fillSelect(selectId, values, placeholder) {
  const select = qs(selectId);
  select.innerHTML = `<option value="">${placeholder}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = content[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.style.fontFamily = lang === "ar" ? "'Cairo','Nunito',sans-serif" : "'Nunito','Cairo',sans-serif";

  qs("#schoolName").textContent = t.schoolName;
  qs("#tagline").textContent = t.tagline;
  qs("#heroTitle").textContent = t.heroTitle;
  qs("#heroDesc").textContent = t.heroDesc;
  qs("#heroApply").textContent = t.heroApply;
  qs("#heroActivities").textContent = t.heroActivities;
  qs("#highlightsTitle").textContent = t.highlightsTitle;
  qs("#galleryTitle").textContent = t.galleryTitle;
  qs("#aboutTitle").textContent = t.aboutTitle;
  qs("#aboutIntro").textContent = t.aboutIntro;
  qs("#visionTitle").textContent = t.visionTitle;
  qs("#visionText").textContent = t.visionText;
  qs("#missionTitle").textContent = t.missionTitle;
  qs("#missionText").textContent = t.missionText;
  qs("#goalsTitle").textContent = t.goalsTitle;
  qs("#programsTitle").textContent = t.programsTitle;
  qs("#activitiesTitle").textContent = t.activitiesTitle;
  qs("#applyTitle").textContent = t.applyTitle;
  qs("#applyDesc").textContent = t.applyDesc;
  qs("#contactTitle").textContent = t.labels.contactTitle;
  qs("#phoneLabel").textContent = t.labels.phoneLabel;
  qs("#emailLabel").textContent = t.labels.emailLabel;
  qs("#locationLabel").textContent = t.labels.locationLabel;
  qs("#locationText").textContent = t.labels.locationText;
  qs("#contactFormTitle").textContent = t.labels.contactFormTitle;
  qs("#footerText").textContent = t.footerText;
  qs("#langToggle").textContent = t.langToggle;

  qs("#labelChildName").textContent = t.labels.childName;
  qs("#labelAge").textContent = t.labels.age;
  qs("#labelGrade").textContent = t.labels.grade;
  qs("#labelPhone").textContent = t.labels.phone;
  qs("#labelPreferredLanguage").textContent = t.labels.preferredLanguage;
  qs("#contactNameLabel").textContent = t.labels.contactName;
  qs("#contactEmailLabel").textContent = t.labels.contactEmail;
  qs("#contactMessageLabel").textContent = t.labels.contactMessage;
  qs("#applySubmit").textContent = t.labels.submitApp;
  qs("#contactSubmit").textContent = t.labels.submitMsg;

  qsa(".nav-link").forEach(btn => {
    btn.textContent = t.nav[btn.dataset.key];
  });

  renderHighlights(t.highlights);
  renderGallery();
  renderGoals(t.goals);
  renderPrograms(t.programs);
  renderActivities(t.activities);
  fillSelect("#grade", t.grades, t.labels.grade);
  fillSelect("#preferredLanguage", t.languages, t.labels.preferredLanguage);

  qsa(".main-nav .nav-link").forEach(link => {
    link.style.textAlign = t.dir === "rtl" ? "right" : "left";
  });
}

function showPage(id) {
  qsa(".page").forEach(p => p.classList.remove("active"));
  qsa(".nav-link").forEach(b => b.classList.remove("active"));
  qs("#" + id).classList.add("active");
  const activeBtn = qsa(".nav-link").find(b => b.dataset.target === id);
  if (activeBtn) activeBtn.classList.add("active");
  qs("#mainNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

qsa("[data-target]").forEach(el => {
  el.addEventListener("click", () => showPage(el.dataset.target));
});

qs("#menuBtn").addEventListener("click", () => {
  qs("#mainNav").classList.toggle("open");
});

qs("#langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

qs("#applyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = content[currentLang].labels.appSuccess;
  qs("#applySuccess").textContent = msg;
  e.target.reset();
  setTimeout(() => qs("#applySuccess").textContent = "", 3000);
});

qs("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = content[currentLang].labels.msgSuccess;
  qs("#contactSuccess").textContent = msg;
  e.target.reset();
  setTimeout(() => qs("#contactSuccess").textContent = "", 3000);
});

applyLanguage("ar");
showPage("home");
