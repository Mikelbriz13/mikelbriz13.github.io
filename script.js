
const texts = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Mathematician",
    "Data Analyst"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
    current = texts[i];

    if(isDeleting){
        document.querySelector(".typing").textContent =
            current.substring(0, j--);
    }else{
        document.querySelector(".typing").textContent =
            current.substring(0, j++);
    }

    if(!isDeleting && j === current.length){
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if(isDeleting && j === 0){
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
