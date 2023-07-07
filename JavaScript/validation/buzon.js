const name = document.getElementById('name');
const comentario = document.getElementById('comentario');
let button = document.getElementById("btnSend");
let warnings = document.getElementById('warnings');
let warnings1 = document.getElementById('warnings1');
const input = document.querySelectorAll('input');

button.addEventListener('click', () =>{
    if(!name.checkValidity()){
        warnings.innerHTML = name.validationMessage;
    }
    if(!comentario.checkValidity()){
        warnings1.innerHTML = comentario.validationMessage;
    }

    if(name.checkValidity() && comentario.checkValidity()){
        input.forEach(input => input.value = '');
        alert("Datos enviados :D");
    } 


})