
/* =========================
   SCROLL ANIMATIONS
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

/* =========================
   TIMELINE TABS
========================= */

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const year = tab.getAttribute("data-year");
        document.getElementById("content-" + year).classList.add("active");
    });
});

/* =========================
   MOBILE NAVBAR
========================= */

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const links = document.querySelectorAll("#nav-links a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

/* =========================
   BACKGROUND ANIMATION (MOBILE OPTIMIZED)
========================= */

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let particlesArray = [];
let isMobile = window.innerWidth < 768;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 768;
    resizeCanvas();
    init();
});

resizeCanvas();

/* =========================
   PARTICLE CLASS
========================= */

class Particle {
    constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = isMobile
            ? "rgba(88, 166, 255, 0.35)"
            : "rgba(88, 166, 255, 0.6)";

        ctx.fill();
    }

    update() {

        if (this.x > canvas.width || this.x < 0) this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

/* =========================
   INIT PARTICLES
========================= */

function init() {
    particlesArray = [];

    let numberOfParticles = isMobile ? 25 : 45;

    for (let i = 0; i < numberOfParticles; i++) {

        let size = Math.random() * 2.2 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        let speed = isMobile ? 0.2 : 0.4;

        let dx = (Math.random() - 0.5) * speed;
        let dy = (Math.random() - 0.5) * speed;

        particlesArray.push(new Particle(x, y, dx, dy, size));
    }
}

/* =========================
   CONNECTION LINES
========================= */

function connect() {
    let limit = isMobile ? 80 : 120;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {

            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < limit) {

                ctx.strokeStyle = isMobile
                    ? "rgba(88, 166, 255, 0.05)"
                    : "rgba(88, 166, 255, 0.08)";

                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

/* =========================
   ANIMATION LOOP (FPS CONTROL MOBILE)
========================= */

let lastTime = 0;
let fpsLimit = isMobile ? 30 : 60;
let interval = 1000 / fpsLimit;

function animate(time = 0) {

    requestAnimationFrame(animate);

    if (time - lastTime < interval) return;

    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => p.update());

    connect();
}

init();
animate();

const languageBtn = document.getElementById("language-btn");
const heroRole = document.getElementById("hero-role");

let isEnglish = true;

languageBtn.addEventListener("click", () => {

    if (isEnglish) {
        heroRole.textContent = "Estudiante de Matemáticas | Futuro Data Scientist";
        languageBtn.textContent = "ES";
    } else {
        heroRole.textContent = "Mathematics Student | Aspiring Data Scientist";
        languageBtn.textContent = "EN";
    }

    isEnglish = !isEnglish;
});

languageBtn.addEventListener("click", () => {
    console.log("Language button clicked");
});
