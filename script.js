function checkPin() {

    let pin = document.getElementById("pin").value;

    if (pin === "127") {
        window.location.href = "birthday.html";
    } else {
        document.getElementById("message").innerHTML = "❌ Wrong PIN";
    }

}
setTimeout(function(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("loading").style.display="none";

    document.getElementById("birthdayContent").style.display="block";

    typeWriter();

},3000);
let text = "🎉 Happy Birthday Raji 💜";

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("birthdayText").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,150);

    }

}
function blowCandles(){

    document.getElementById("flames").innerHTML="💨 💨 💨";

    document.getElementById("wishMessage").innerHTML=
    "✨ Make a Wish Raji... 💜";

    startConfetti();

}
function startConfetti(){

    document.getElementById("wishMessage").innerHTML += "<br><br>🎊 🎉 ✨ 🎊 🎉";

}
function startConfetti() {

    const confetti = document.getElementById("confetti");

    if (!confetti) return;

    const emojis = ["💜", "✨", "🎉", "💖", "🌸"];

    for (let i = 0; i < 40; i++) {

        const piece = document.createElement("span");

        piece.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "-30px";
        piece.style.fontSize = "25px";
        piece.style.zIndex = "9999";
        piece.style.animation = "fall 4s linear forwards";

        confetti.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4000);
    }
}

if (document.getElementById("confetti")) {
    startConfetti();
}
