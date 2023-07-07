const name = document.getElementById('name');
const mail = document.getElementById('mail');
const num = document.getElementById('num');
const btnCV = document.getElementById('btnCV');
let button = document.getElementById("btnSend");
let warnings = document.getElementById('warnings');
let warnings1 = document.getElementById('warnings1');
const input = document.querySelectorAll('input');

button.addEventListener('click', () =>{
    if(!name.checkValidity()){
        warnings.innerHTML = name.validationMessage;
    }
    if(!mail.checkValidity()){
        warnings1.innerHTML = mail.validationMessage;
    }
    if(!num.checkValidity()){
        warnings2.innerHTML = num.validationMessage;
    }

    if(name.checkValidity() && mail.checkValidity() && num.checkValidity()){
        input.forEach(input => input.value = '');
        alert("Datos enviados :D");
    } 

})