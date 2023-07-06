let btnSend = document.getElementById('btnSend');
const name = document.getElementById('name');
const apellido = document.getElementById('Apellido');
const ced = document.getElementById('ced');
const num = document.getElementById('num');
const input = document.querySelectorAll('input');

btnSend.addEventListener('click' , ()=>{
    if(!name.checkValidity()){
        warnings.innerHTML = name.validationMessage;
    }
    if(!apellido.checkValidity()){
        warnings1.innerHTML = apellido.validationMessage;
    }
    if(!ced.checkValidity()){
        warnings2.innerHTML = ced.validationMessage;
    }
    if(!num.checkValidity()){
        warnings3.innerHTML = num.validationMessage;
    }

    if(name.checkValidity() && Apellido.checkValidity() && ced.checkValidity() && num.checkValidity()){
        input.forEach(input => input.value = '');
        alert("Producto agregado :D");
    } 
    
})