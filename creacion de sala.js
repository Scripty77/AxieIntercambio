// Definir la variable activeRooms como un arreglo vacío
let activeRooms = [];

function crearSala() {
  // Generar un número de identificación único para la sala
  var idSala = Math.random().toString(36).substr(2, 9);

  // Crear un objeto para representar la sala
  let room = {
    code: idSala,
    users: []
  };

  // Agregar la sala al arreglo de salas activas
  activeRooms.push(room);

  // Almacenar el número de la sala en el almacenamiento local del navegador
  localStorage.setItem('idSala', idSala);

  // Redirigir al usuario a la página de la sala
  window.location.href = "sala.html?idSala=" + idSala;
}

// Código para unirse a una sala
let joinRoomForm = document.getElementById('join-room-form');
  
joinRoomForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener el valor del campo de entrada del código de la sala
  let roomCode = document.getElementById('room-code').value;
  
  // Unir al usuario a la sala con el código proporcionado
  joinRoom(roomCode);
});

function joinRoom(roomCode) {
  // Verificar si existe una sala con el código proporcionado
  let room = activeRooms.find(room => room.code === roomCode);
  
  // Si no existe una sala con ese código, mostrar un mensaje al usuario
  if (!room) {
    alert('No se encontró una sala con ese código');
    return;
  }
  
  // Si la sala ya tiene dos usuarios, mostrar un mensaje al usuario
  if (room.users.length >= 2) {
    alert('La sala ya está llena');
    return;
  }
  
  // Agregar al usuario a la lista de usuarios de la sala
  room.users.push(currentUser);
  
  // Redirigir al usuario a la página de la sala
  window.location.href = "sala.html?idSala=" + roomCode;
}
