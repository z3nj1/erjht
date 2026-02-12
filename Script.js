// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const dogImg = document.getElementById("letter-dog");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// BACKGROUND MUSIC
const music = document.getElementById("bg-music");
music.volume = 0.3; // adjust volume

// Autoplay on page load (mobile may block until first interaction)
window.addEventListener("load", () => {
    music.play().catch(err => {
        console.log("Autoplay blocked, will start on first tap.", err);
    });
});

// Failsafe: play after first tap anywhere
document.body.addEventListener("click", () => {
    if (music.paused) music.play();
}, { once: true });

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO button
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 200;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "!";
    dogImg.src = "dog-happy.png";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});

