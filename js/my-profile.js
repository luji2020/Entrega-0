var Datos = {
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
    celular: "",
    direccion: "",
    ciudad: "",
    departamento: "",

};

// función que guarda los datos si estan completas las casillas
// se guardan los datos del formulario con class "form-control"

function guardar() {
    var elementos_campos = document.getElementsByClassName("form-control");
    invalidos = 0;

    for (let i = 0; i < elementos_campos.length; i++) {
        if (elementos_campos[i].value === "" || elementos_campos[i].value === "") {
            elementos_campos[i].classList.add("is-invalid");
            elementos_campos[i].classList.remove("is-valid");
        } else {
            elementos_campos[i].classList.add("is-valid");
            elementos_campos[i].classList.remove("is-invalid");
        }
    }

    for (let i = 0; i < elementos_campos.length; i++) {
        if (elementos_campos[i].classList.contains("is-invalid")) {
            invalidos = invalidos + 1;
        }
    }

    if (invalidos) {
        alert("Detalle más su perfil"); // Alerta si no se registran todos los datos
    } else {
        Datos.nombre = document.getElementById("inputNombre").value;
        Datos.apellido = document.getElementById("inputApellido").value;
        Datos.edad = document.getElementById("inputAge").value;
        Datos.email = document.getElementById("inputEmail").value;
        Datos.celular = document.getElementById("inputCelular").value;
        Datos.direccion = document.getElementById("inputDireccion").value;
        Datos.ciudad = document.getElementById("inputCiudad").value;
        Datos.departamento = document.getElementById("inputDepartamento").value;

        localStorage.setItem("datos_usuario", JSON.stringify(Datos));
        // Guarda los datos con JSON
    }
}

// Función que recarga los datos del JSON.stringifly  cada vez
// que el usuario envía "guardar los cambios"

function recargar() {
    let datos_aux = localStorage.getItem("datos_usuario");
    Datos = JSON.parse(datos_aux);

    document.getElementById("inputNombre").value = Datos.nombre;
    document.getElementById("inputApellido").value = Datos.apellido;
    document.getElementById("inputAge").value = Datos.edad;
    document.getElementById("inputEmail").value = Datos.email;
    document.getElementById("inputCelular").value = Datos.celular;
    document.getElementById("inputDireccion").value = Datos.direccion;
    document.getElementById("inputCiudad").value = Datos.ciudad;
    document.getElementById("inputDepartamento").value = Datos.departamento;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("datos_usuario") != undefined) {
        recargar();
    }

});
