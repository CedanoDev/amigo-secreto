let amigos = [];

//Con esta funcion valido que el usuario no entre un dato vacio y
//si no esta vacio se agrega al arreglo.
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    //Validacion de que no esta vacio
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
    }
    else {
        //Agregar amigo si no esta vacio el input
        amigos.push(amigo);
        //console.log(amigos);
        //Limpiar el input
        limpiarCaja();
    }
    mostrarAmigos(amigos);
}

//Funcion para limpiar el input
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function mostrarAmigos(amigos){
    //Obtener los elementos de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = '';

    //Recorriendo el arreglo con for
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let elementoLista = document.createElement("li");

        // Asignar el nombre del amigo como contenido del <li>
        elementoLista.textContent = amigos[i];

        // Agregar el elemento <li> a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

//Sortear amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //En este caso no se le agrega el "+1" al final de la funcion Math.floor
    //como en explicaciones pasadas porque los arreglos empiezan en el indice 0

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento de resultado
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}