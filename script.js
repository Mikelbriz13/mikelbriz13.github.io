
const texts = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Mathematician"
];

let i = 0;
let j = 0;
let deleting = false;

function type() {

    const current = texts[i];

    const element = document.querySelector(".typing");

    element.textContent = current.substring(0, j);

    if (!deleting) {
        j++;
        if (j === current.length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            deleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(type, deleting ? 60 : 90);
}

type();
