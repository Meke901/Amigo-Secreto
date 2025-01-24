// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios al inicio y al final

    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = ""; // Limpia el campo de entrada
        input.focus();
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para actualizar la lista en la pantalla
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo y reiniciar el juego automáticamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }

    // Escoger un amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</p>`;

    // Reiniciar el juego automáticamente después de 3 segundos
    setTimeout(reiniciarJuego, 3000); // Llamar directamente a la función de reinicio
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado en pantalla
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    document.getElementById("amigo").focus(); // Enfocar el campo de entrada
}


