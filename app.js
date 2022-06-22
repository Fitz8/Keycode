const pressed = document.getElementById("pressed");
const code = document.getElementById("code");
const key = document.getElementById("key");
const which = document.getElementById("which");


document.addEventListener("keydown", (logkey) => {
    code.textContent = logkey.code;
    which.textContent = logkey.which;
    key.textContent = logkey.key;
    if (logkey.code == "Space") {
        pressed.textContent = "Space was pressed!";
    } else {
        pressed.textContent = `${logkey.key} was pressed!`;
    }
});