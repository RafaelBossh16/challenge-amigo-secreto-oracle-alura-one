// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Crear el array para almacenar los nombres
let amigos = [];

// 2. Implementar la función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let textoIngresado = document.getElementById('amigo').value;

  // Validar la entrada para asegurarse que el campo no esté vacío
  if (textoIngresado === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(textoIngresado);

  // Limpiar el campo de entrada
  document.getElementById('amigo').value = '';
  actualizarLista();
}

// 3. Implementar la función para actualizar la lista de amigos
function actualizarLista() {
  // Obtener el elemento de la lista dondé se mostrarán los amigos
  let lista = document.getElementById('listaAmigos');
  
  // Limpiar la lista existente
  lista.innerHTML = '';
  
  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    
    // Agregar elementos a la lista
    lista.innerHTML += `${i + 1}. ${amigos[i]}<br>`;
  }
}

// 4. Implementar la función para sortear los amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("La lista de amigos esta vacía. Agrega amigos en la lista, Por favor.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let ganador = document.getElementById("resultado");

  // Mostrar el resultado 
  ganador.innerHTML = `Resultado del sorteo: ${amigos[indiceAleatorio]}`;
}