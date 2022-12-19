// nombre_del_alumno
//Miguel Sánchez Linares
// Completar JS aqui
var modalito = document.getElementById("myModal");
var cerrar = document.getElementsById("cerrar");
var ver = document.getElementById("ok");



function cerrar() {
  modalito.style.display = "none";
  formulario.style.display="block";
}


function alerta(){
  var nombre = document.getElementById("nombreForm");
  if(nombre.value != ""){
    alert('Datos enviados con exito');
    window.location("index.html");
  }
}
function modal(){
    modalito.style.display = "block";
    ver.style.visibility="hidden";
}