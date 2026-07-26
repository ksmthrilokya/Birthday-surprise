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
