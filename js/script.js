document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: GALERÍA DE FOTOS (Para index.html) ---
   const botonFotos = document.getElementById('btn-fotos');
const grillaFotos = document.getElementById('grid-fotos');

if (botonFotos && grillaFotos) {
    botonFotos.onclick = function() {
        grillaFotos.classList.toggle('active');
        
        if(grillaFotos.classList.contains('active')) {
            setTimeout(() => {
                grillaFotos.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };
}

    // --- LÓGICA 2: FILTROS DEL CRONOGRAMA (Para cronograma.html) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dayContainers = document.querySelectorAll('.schedule-day-container');

    // Solo ejecutamos si existen botones de filtro en la página actual
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

          
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

// Lógica 3: Menú Lateral
const menuToggle = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');


const closeMenu = () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');

    const spans = document.querySelectorAll('.hamburger-lines span');
    
  
    spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '1';
    });
};

if (menuToggle) {
    menuToggle.onclick = function() {
        const isOpening = !sideMenu.classList.contains('active');
        
        if (isOpening) {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('menu-open'); 
            
            const spans = menuToggle.querySelectorAll('.hamburger-lines span');
            if (isOpening) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
}
        } else {
            closeMenu();
        }
    };
}


if (overlay) {
    overlay.onclick = closeMenu;
}

// Lógica 4: Slider de Fotos
let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
// CHANGE: We now count the 'slide-item' divs, not just images
const allSlides = document.querySelectorAll('.slide-item'); 
const totalSlides = allSlides.length;

const updateSlider = () => {
    if (slidesContainer) {
        const offset = -(currentSlide * 100);
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }
};

if (slidesContainer && totalSlides > 0) {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
    }

    // Auto-slide every 8 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 8000);
}


function startCountdown() {
    const targetDate = new Date("May 11, 2026 00:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

   
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

    
        document.getElementById("days").innerText = d < 10 ? "0" + d : d;
        document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
        document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
        document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;


        if (distance < 0) {
            clearInterval(timer);
            document.querySelector(".countdown-container").innerHTML = "<h2 class='countdown-title'>¡El campamento ha comenzado!</h2>";
        }
    }, 1000);
}
startCountdown();


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const textWrapper = this.previousElementSibling;
            
            if (textWrapper.classList.contains('collapsed')) {
                textWrapper.classList.remove('collapsed');
                textWrapper.style.maxHeight = textWrapper.scrollHeight + "px";
                this.textContent = 'Leer menos';
            } else {
                textWrapper.classList.add('collapsed');
                textWrapper.style.maxHeight = '100px';
                this.textContent = 'Leer más';
            }
        });
    });
});

// LÓGICA PARA MOSTRAR FOTOS
let currentImages = [];
let currentIndex = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// 1. Open Lightbox and gather all images in that specific grid
document.querySelectorAll('.news-media').forEach(grid => {
    const images = Array.from(grid.querySelectorAll('img'));
    
    images.forEach((img, index) => {
        img.onclick = () => {
            currentImages = images; // Save the current grid's images
            currentIndex = index;   // Start at the clicked image
            showImage();
        };
    });
});

function showImage() {
    lightbox.style.display = 'flex';
    lightboxImg.src = currentImages[currentIndex].src;
}

// 2. Navigation Logic
document.getElementById('next-btn').onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage();
};

document.getElementById('prev-btn').onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage();
};

// 3. Keyboard Navigation (Bonus)
document.onkeydown = (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === "ArrowRight") document.getElementById('next-btn').click();
        if (e.key === "ArrowLeft") document.getElementById('prev-btn').click();
        if (e.key === "Escape") lightbox.style.display = 'none';
    }
};

// Close the lightbox when clicking the X
document.querySelector('.close-lightbox').onclick = function() {
    lightbox.style.display = 'none';
};

// Close the lightbox when clicking anywhere on the dark background
lightbox.onclick = function(event) {
    // This ensures clicking the image or the buttons doesn't close it
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
};

