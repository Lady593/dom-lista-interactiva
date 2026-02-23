// SELECCION DE ELEMENTOS DEL DOM
//Seleccionar por ID
const mainTitle = document.getElementById("main-title");
const descriptionText = document.getElementById("description-text");
const mainCard = document.getElementById("main-card");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const btnLimpiarLista = document.getElementById("btn-limpiar-lista");
const taskList = document.getElementById("task-list");
const btnTema = document.getElementById("btn-tema");
const btnEjemplo = document.getElementById("btn-ejemplo");
const btnResaltarTitulo = document.getElementById("btn-resaltar-titulo");

//Seleccion usando querySelector
//primer elemento dentro de la lista de instrucciones
const primeraInstruccion = document.querySelector("#instructions-list li");

//Cambiar el texto de este item
primeraInstruccion.textContent = "Modifica este laboratorio usando JS y DOM";


//MODIFICACION DE CONTENIDO Y ESTILOS
//Cambiar el texto del titulo principal
mainTitle.textContent = "Laboratorio DOM: Lista Interactiva";

//Cambiar la descripcion usando el metodo innerHTML
descriptionText.innerHTML = "Este laboratorio ayudara a practicar <strong>manipulacion de DOM</strong> con JavaScript";

//Añadir una clase de Bootstrap para sombrear la card
mainCard.classList.add("shadow");

//Funcion para alternar una clase en el titulo
//Combinar la clase de Bootstrap con la clase personalizada de nuestro CSS

function alternarResaltadoTitulo() {
    //toggle añade la clase si no está, o la quita si ya está
    mainTitle.classList.toggle("text-primary");
    mainTitle.classList.toggle("fw-bold");
    mainTitle.classList.toggle("custom-highlight");
}

//Asociar la funcion al boton Resaltar titulo
btnResaltarTitulo.addEventListener("click", alternarResaltadoTitulo);

//MANEJO DE EVENTOS EN FORMULARIOS
//Funcion para crear un nuevo elemento de lista (li) de forma dinamica
function crearItemTarea(textoTarea) {
    //crear el li
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    )

    //Crear un span para el texto
    const spanTexto = document.createElement("span");
    spanTexto.textContent = textoTarea;

    //Crear un boton de eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("btn", "btn-sm", "btn-outline-danger");

    //Asociar un evento
    btnEliminar.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    //Agregar el texto y el boton al li
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);

    return li;
}

//Manejamos el evento "submit" del formulario
taskForm.addEventListener("submit", function (evento) {
    //Evitar que la pagina se recargue
    evento.preventDefault();

    //Obtenemos el texto del input para eliminar espacios al inicio y al final
    const texto = taskInput.value.trim();

    //Validamos que no este vacio
    if(texto === ""){
        alert("Por favor escribe una tarea antes de agregarla.")
        return;
    }

    //Creamos un nuevo li usando la funcion creada
    const nuevoItem = crearItemTarea(texto);

    //Agregamos a la lista
    taskList.appendChild(nuevoItem);

    //Limpiar el input
    taskInput.value = "";
});

//BOTONES ADICIONALES
//Cambiar tema claro/oscuro de la tarjeta principal
btnTema.addEventListener("click", function() {
    //Alternamos clases de fondo y texto en la card
    mainCard.classList.toggle("bg-dark");
    mainCard.classList.toggle("text-white");
});

btnEjemplo.addEventListener("click", function () {
    const ejemplo = crearItemTarea("Ejemplo de tarea generada por JavaScript");
    taskList.appendChild(ejemplo);
});

//Limpiar toda la lista
btnLimpiarLista.addEventListener("click", function () {
    //Opcion 1: remover todos los hijos uno por uno

    //Opcion 2: vaciar el contenido HTML
    taskList.innerHTML = "";
});