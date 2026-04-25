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


const btnFotos = document.getElementById('btn-fotos');
    const gridFotos = document.getElementById('grid-fotos');

    btnFotos.addEventListener('click', () => {
        // Toggle de la clase active para mostrar/ocultar los cuadros
        gridFotos.classList.toggle('active');
        
        // Opcional: Desplazar la pantalla un poco hacia abajo para ver los botones
        if(gridFotos.classList.contains('active')){
            setTimeout(() => {
                gridFotos.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
    });
})
