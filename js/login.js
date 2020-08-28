//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function login(){
    var usuario=document.getElementById('username').value;
    var contrasena =document.getElementById('password').value;
    
    if(usuario.trim()=== "") {
    alert("Debe ingresar un usuario válido") } // Alerta cuando hay espacios
    
    if(contrasena.trim()=== "") {
    alert("Debe ingresar una contraseña válida") }

    else {
        localStorage.setItem("usururio", usuario.trim());
        alert ("Usuario: " + usuario + " " + "Password: " + contrasena); // Avisar los datos al usuario
        location.href="home.html"; // Redireccionar
    }
};
