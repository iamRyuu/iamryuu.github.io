const admin_mail = "admin@gmail.com"
const password = "password123";


let login_button = document.getElementById('login-button');

login_button.addEventListener('click', () => {
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');

    console.log(mail.value);
    console.log(pass.value);
    if (mail.value == admin_mail && pass.value == password) {
        location.href = "../Pages/admin.html";
    } else {
        location.href = "../index.html";
    }    
})
