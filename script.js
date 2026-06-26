
const texts = [
    "  Data Scientist  ",
    "  Machine Learning Engineer  ",
    "  Mathematician  ",
    "  Data Analyst  "
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {

    const current = texts[i];

    document.querySelector(".typing").textContent =
        current.substring(0, j);

    if (!isDeleting) {
        j++;
        if (j === current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
