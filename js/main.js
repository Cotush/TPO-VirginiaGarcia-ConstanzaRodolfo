const contactar = (e) => {
    e.preventDefault();
    console.log('Estoy enviándome');
    let inputNombre = document.querySelector("#nombre");
    if(inputNombre.value.length == 0){
        alert('Introduzca su nombre.');
        return false;
    }
    let inputEmail = document.querySelector("#email");
    if(inputEmail.value.includes('@') == false){
        alert('El correo ingresado no es válido.');
        return false;
    }
    let inputAsunto = document.querySelector("#asunto");
    if(inputAsunto.value.length == 0){
        alert('Agregue un asunto.');
        return false;
    }
    let inputMensaje = document.querySelector("#mensaje");
    if(inputMensaje.value.length == 0){
        alert('Introduzca su mensaje.');
        return false;
    }
     alert('Mensaje enviado, en breve nos comunicaremos con usted.');
    document.querySelector("#formContacto").reset()
}