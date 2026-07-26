function checkPin() {

    let pin = document.getElementById("pin").value;

    if (pin === "127") {
        window.location.href = "birthday.html";
    } else {
        document.getElementById("message").innerHTML = "❌ Wrong PIN";
    }

}
