function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-theme")
};


let switchModes = document.querySelector(".toggle")

document.addEventListener("click", () => {
    darkMode()

});

document.querySelector('#frm-btn').addEventListener('click', function(event) {
    let fields = {
        email: "",
        name: "",
        message: "",
    }

    fields.email = document.getElementsByName('email')[0].value;
    fields.name = document.getElementsByName('name')[0].value;
    fields.message = document.getElementsByName('email')[0].value;

    console.log(fields)
    event.preventDefault()
});