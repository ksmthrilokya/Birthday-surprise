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

},3000);
