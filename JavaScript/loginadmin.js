const usuario = "Jorge69";
const admin_mail = "admin@gmail.com"
const admin_password = "rombo140"


let login_button = document.getElementById('login-button');

login_button.addEventListener('click', () => {
    let mail = document.getElementById('mail');
    let name = document.getElementById('name');

    console.log(mail.value);
    console.log(name.value);
    if (mail.value == admin_mail && name.value == usuario) {
        location.href = "../Pages/admin.html";
    } else {
        location.href = "../index.html";
    }    
})
