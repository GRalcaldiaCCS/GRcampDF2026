document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: GALERÍA DE FOTOS (Para index.html) ---
    const botonFotos = document.getElementById('btn-fotos');
    const grillaFotos = document.getElementById('grid-fotos');

    if (botonFotos && grillaFotos) {
        botonFotos.onclick = function() {
            grillaFotos.classList.toggle('active');
            console.log("Galería: Toggle ejecutado");
        };
    }

    // --- LÓGICA 2: FILTROS DEL CRONOGRAMA (Para cronograma.html) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dayContainers = document.querySelectorAll('.schedule-day-container');

    // Solo ejecutamos si existen botones de filtro en la página actual
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Manejo de clases en los botones
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // 2. Manejo de visibilidad de los días
                dayContainers.forEach(container => container.classList.remove('active'));
                
                const targetId = btn.getAttribute('data-target');
                const targetContainer = document.getElementById(targetId);

                if (targetContainer) {
                    targetContainer.classList.add('active');
                } else {
                    console.error(`Error: No se encontró el contenedor con ID: ${targetId}`);
                }
            });
        });
    }
});