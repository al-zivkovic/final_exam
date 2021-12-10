function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-theme")
};

let switchModes = document.querySelector("input")

document.addEventListener("click", () => {
    darkMode()

});