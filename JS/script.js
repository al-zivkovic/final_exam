function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-theme");
};

let switchModes = document.querySelector(".toggle");

switchModes.addEventListener("click", () => {
    darkMode()

});

document.querySelector('button').addEventListener('click', function(event) {
    let fields = {
        email: "",
        name: "",
        message: "",
    };

    fields.email = document.querySelector('#email')[0].value;
    fields.name = document.querySelector('#name')[0].value;
    fields.message = document.getElementsByTagName('textarea')[0].value;

    console.log(fields)
    event.preventDefault()
});