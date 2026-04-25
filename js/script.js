document.addEventListener('DOMContentLoaded', () => {
    const statusBox = document.getElementById('status-box');
    const now = new Date();
    const eventDate = new Date('2026-05-11'); 
    
    if (now < eventDate) {
        statusBox.innerText = "Faltan pocos días para el inicio. ¡Prepárate!";
    } else {
        statusBox.innerText = "¡Bienvenidos al Campamento! Disfruta la jornada.";
    }
    
    console.log("Portal GR Camp 2026 cargado correctamente.");
});
