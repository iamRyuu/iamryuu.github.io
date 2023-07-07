let button = document.getElementById("btn_Photo");
button.addEventListener('click', ()=>{
    navigator.mediaDevices.getUserMedia({video: true}).then((stream)=>{
        alert('Su camara esta siendo usada, sonría :D');
        let foto = document.getElementById('foto');
        foto.srcObject = stream;
        foto.onloadedmetadata = (ev) => foto.play()
    }).catch((err) =>console.log(err))
})

const name = document.getElementById('name');
const mail = document.getElementById('mail');
const num = document.getElementById('num');
const date = document.getElementById('date');
let btn = document.getElementById("btn_send");
let warnings = document.getElementById('warnings');
let warnings1 = document.getElementById('warnings1');
let warnings2 = document.getElementById('warnings2');
let warnings3 = document.getElementById('warnings3');
const input = document.querySelectorAll('input');

btn.addEventListener('click', () =>{
    if(!name.checkValidity()){
        warnings.innerHTML = name.validationMessage;
    }
    if(!mail.checkValidity()){
        warnings1.innerHTML = mail.validationMessage;
    }
    if(!num.checkValidity()){
        warnings2.innerHTML = num.validationMessage;
    }
    if(!date.checkValidity()){
        warnings3.innerHTML = date.validationMessage;
    }

    if(name.checkValidity() && mail.checkValidity() && num.checkValidity() && date.checkValidity()){
        input.forEach(input => input.value = '');
        alert("Datos enviados :D");
    } 

})