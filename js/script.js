document.addEventListener('DOMContentLoaded', () => {
    

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


    const filterButtons = document.querySelectorAll('.filter-btn');
    const dayContainers = document.querySelectorAll('.schedule-day-container');


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

// Lógica Slider de Fotos
let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const allSlides = document.querySelectorAll('.slides img');
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


    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
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