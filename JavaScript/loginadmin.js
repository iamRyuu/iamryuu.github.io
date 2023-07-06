const admin_mail = "admin@gmail.com"
const password = "password123";
const parrafo = document.getElementById("warnings")
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');

let login_button = document.getElementById('login-button');
let btn_account = document.getElementById('btn_account');

login_button.addEventListener('click', () => {
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (mail.value == admin_mail && pass.value == password) {
        location.href = "../Pages/admin/admin.html";
    }
    if(!regexEmail.test(mail.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

})


btn_account.addEventListener('click' ,()=>{
    location.href = '../Pages/crearcuenta.html'
})