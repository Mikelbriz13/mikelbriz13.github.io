let currentLang = "en";


function setLanguage(lang) {

    const t = translations[lang];

    document.getElementById("hero-intro").textContent = t.heroIntro;
    document.getElementById("hero-role").textContent = t.heroRole;
    document.getElementById("hero-description").textContent = t.heroDescription;

    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-p1").textContent = t.aboutP1;
    document.getElementById("about-p2").textContent = t.aboutP2;
    document.getElementById("about-p3").textContent = t.aboutP3;

    document.getElementById("timeline-title").textContent = t.timelineTitle;

    document.getElementById("t2019-title").textContent = t.t2019Title;
    document.getElementById("t2019-text").textContent = t.t2019Text;

    document.getElementById("t2024-title").textContent = t.t2024Title;
    document.getElementById("t2024-text").textContent = t.t2024Text;

    document.getElementById("t2025-title").textContent = t.t2025Title;
    document.getElementById("t2025-text").textContent = t.t2025Text;

    document.getElementById("t2026-title").textContent = t.t2026Title;
    document.getElementById("t2026-text").textContent = t.t2026Text;

    document.getElementById("projects-title").textContent = t.projectsTitle;
    document.getElementById("projects-text").textContent = t.projectsText;

    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("learning-title").textContent = t.learningTitle;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("contact-text").textContent = t.contactText;

    document.getElementById("footer-text").textContent = t.footerText;

    document.getElementById("language-btn").textContent = t.langBtn;
}

/* botón */
document.getElementById("language-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    setLanguage(currentLang);
});

/* init */
setLanguage("en");


/* TIMELINE */
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {

        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const year = tab.dataset.year;
        document.getElementById("content-" + year).classList.add("active");
    });
});
