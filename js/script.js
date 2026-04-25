document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-fotos');
    const grilla = document.getElementById('grid-fotos');

    if (boton && grilla) {
        boton.onclick = function() {
            grilla.classList.toggle('active');
            console.log("Estado de la grilla cambiado");
        };
    } else {
        console.error("No se encontraron los elementos. Revisa los IDs en el HTML.");
    }
});
