// Typewriter effect
const tagline = "Web Developer & Designer";
let i = 0;
function typeWriter() {
    if (i < tagline.length) {
        document.getElementById("tagline").innerHTML += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
