let btnSend = document.getElementById('btnSend');
const name = document.getElementById('name');
const proov = document.getElementById('proov');
const precio = document.getElementById('precio');
const select = document.getElementById('select');
const input = document.querySelectorAll('input');

btnSend.addEventListener('click' , ()=>{
    if(!name.checkValidity()){
        warnings.innerHTML = name.validationMessage;
    }
    if(!select.checkValidity()){
        warnings1.innerHTML = select.validationMessage;
    }
    if(!proov.checkValidity()){
        warnings2.innerHTML = proov.validationMessage;
    }
    if(!precio.checkValidity()){
        warnings3.innerHTML = precio.validationMessage;
    }

    if(name.checkValidity() && proov.checkValidity() && precio.checkValidity()){
        input.forEach(input => input.value = '');
        alert("Producto agregado :D");
    } 
    
})