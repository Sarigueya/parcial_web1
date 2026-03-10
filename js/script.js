function cambiarTexto() {
    document.getElementById("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!";
}

let oscuro = false;

function modoOscuro(){

    if(!oscuro){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("btnModo").innerText = "Modo claro";
        oscuro = true;
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("btnModo").innerText = "Modo oscuro";
        oscuro = false;
    }

}

let carrito = 0;

function agregarCarrito() {
    carrito++;
    console.log("Productos en carrito: " + carrito);
}

function validarFormulario() {

    let nombre = document.getElementById("inputfirstname").value;
    let apellido = document.getElementById("inputlastname").value;
    let email = document.getElementById("inputEmail4").value;
    let telefono = document.getElementById("inputcel").value;
    let direccion = document.getElementById("inputAddress").value;
    let ciudad = document.getElementById("inputCity").value;
    let edad = document.getElementById("inputedad").value;

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTelefono = /^[0-9]{6,}$/;
    let regexTexto = /^[a-zA-Z\s]{3,}$/;
    let regexEdad = /^[0-9]{1,2}$/;

    if (nombre == "" || apellido == "" || email == "" || telefono == "" || direccion == "" || ciudad == "" || edad == "") {
        alert("Faltan datos");
        return;
    }

    if (!regexTexto.test(nombre)) {
        alert("Nombre inválido");
        return;
    }

    if (!regexTexto.test(apellido)) {
        alert("Apellido inválido");
        return;
    }

    if (!regexEmail.test(email)) {
        alert("Email inválido");
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener mínimo 6 números");
        return;
    }

    if (!regexTexto.test(ciudad)) {
        alert("Ciudad inválida");
        return;
    }

    if (!regexEdad.test(edad)) {
        alert("Edad inválida");
        return;
    }

    if (direccion.length < 5) {
        alert("Dirección inválida");
        return;
    }

    alert(
        "Nombre: " + nombre + " " + apellido +
        ", de la ciudad de " + ciudad +
        ", domicilio en " + direccion +
        ", con " + edad + " años, contacto: " +
        email + " , cel. " + telefono
    );

    document.getElementById("formSingin").reset();
}
