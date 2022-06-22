let pressed = document.getElementById("pressed");
let key = document.getElementById("key");
let which = document.getElementById("which");
let code = document.getElementById("code");

document.addEventListener("keydown", (logkey) => {
    pressed.textContent = `${logkey.key} was pressed!`;
    code.textContent = logkey.code;
    key.textContent = logkey.key;
    which.textContent = logkey.which;
});