// Array para almacenar los nombres de los amigos
const listaDeAmigos = [];

// Función para agregar un nombre a la lista de amigos
function agregarAmigo() {
    // Captura el valor del campo de entrada
    const entrada = document.getElementById("amigo");
    const nombre = entrada.value.trim(); // Elimina espacios en blanco innecesarios
    
    // Validación de la entrada: nombre no vacío y sin duplicados
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); 
        return; 
    }
    if (listaDeAmigos.includes(nombre)) {
        alert("El nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
        return;
    }

    // Agrega el nombre al array de amigos
    listaDeAmigos.push(nombre);

    // Limpia el campo de entrada
    entrada.value = "";

    // Actualiza la lista visible de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el HTML
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el array 'listaDeAmigos' y crear elementos <li> para cada amigo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const elementoLista = document.createElement("li"); 
        elementoLista.textContent = listaDeAmigos[i]; 
        lista.appendChild(elementoLista); 
    }
}

// Función para seleccionar aleatoriamente un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles en el array
    if (listaDeAmigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añade amigos antes de realizar el sorteo.");
        return; // Termina la función si el array está vacío
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array - 1
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con el ID "resultado"
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}


