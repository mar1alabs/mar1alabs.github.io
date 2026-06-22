const text = "Cybersecurity Analyst";
const typingElement = document.querySelector(".typing");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
