function crearSala() {
    // Generar un número de identificación único para la sala
    var idSala = Math.random().toString(36).substr(2, 9);
    
    // Almacenar el número de la sala en el almacenamiento local del navegador
    localStorage.setItem('idSala', idSala);
    
    // Redirigir al usuario a la página de la sala
    window.location.href = "sala.html?idSala=" + idSala;
}
