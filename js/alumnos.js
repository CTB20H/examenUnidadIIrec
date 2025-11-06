// Declaración de variables
const matr = document.getElementById("matricula")
const nombre = document.getElementById("name")
const promedio = document.getElementById("promedio")
const nivel = document.getElementById("nivel")
const turno = document.getElementById("turno")
const btnlimpiar = document.getElementById("limpiar")
const btnfiltrar = document.getElementById("limpiar")
// Función de limpieza de tablas
function limpiar(){
    matr.value = "";
    nombre.value = "";
    promedio.value = "";
    nivel.value = "";
    turno.value = "";
}

// Función para filtrar tablas
function filtrar(){

}

// Eventos
btnlimpiar.addEventListener("click",limpiar)
btnfiltrar.addEventListener("click",filtrar)
