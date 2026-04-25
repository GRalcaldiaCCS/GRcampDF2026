

document.addEventListener('DOMContentLoaded', () => {
    const btnFotos = document.getElementById('btn-fotos');
    const gridFotos = document.getElementById('grid-fotos');

    if (btnFotos && gridFotos) {
        btnFotos.addEventListener('click', (e) => {
            e.preventDefault(); // Evita cualquier comportamiento extraño
            gridFotos.classList.toggle('active');
            console.log("Toggle de fotos ejecutado"); // Revisa esto en la consola (F12)
        });
    }
});
    });
})
