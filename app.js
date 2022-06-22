const pressed = document.getElementById("pressed");
const code = document.getElementById("code");
const key = document.getElementById("key");
const which = document.getElementById("which");


document.addEventListener("keydown", (logkey) => {
    pressed.textContent = `${logkey.key} was pressed!`;
    code.textContent = logkey.code;
    key.textContent = logkey.key;
    which.textContent = logkey.which;
});