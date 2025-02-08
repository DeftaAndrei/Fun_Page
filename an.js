document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    
    // Configurare animație
    const animationConfig = {
        duration: '1s',
        easing: 'ease-in-out',
        delay: '0.2s'
    };

    // Aplică stiluri CSS pentru animație
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${animationConfig.duration} ${animationConfig.easing} ${animationConfig.delay}`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Adaugă clasa și aplică animația
                    entry.target.classList.add("visible");
                    entry.target.style.opacity = '1';
                    
                    // Opțional: elimină observarea după ce elementul devine vizibil
                    observer.unobserve(entry.target);
                } else {
                    // Opțional: resetează animația când elementul iese din viewport
                    entry.target.classList.remove("visible");
                    entry.target.style.opacity = '0';
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px', // Adaugă margin pentru declanșarea mai devreme/târzie
        }
    );

    // Inițializează observarea pentru fiecare element
    elements.forEach((el) => {
        observer.observe(el);
        
        // Adaugă evenimente pentru efecte hover (opțional)
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05)';
            el.style.transition = 'transform 0.3s ease';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });
    });
});
// Stilizare pentru butonul Fun Page 3D
const funButton = document.querySelector('.fun-button');
if (funButton) {
    // Adăugăm clasa fade-in
    funButton.classList.add('fade-in');
    
    // Modificăm dimensiunile și stilurile inițiale
    funButton.style.background = 'none';
    funButton.style.border = 'none';
    funButton.style.position = 'relative';
    funButton.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    funButton.style.transformStyle = 'preserve-3d';
    funButton.style.transition = 'transform 0.3s ease';
    funButton.style.width = '200px';     // Mai lat
    funButton.style.height = '50px';      // Mai scund
    funButton.style.margin = '10px auto'; // Centrare

    // Adăugăm aceste stiluri noi
    funButton.style.cursor = 'pointer';
    funButton.style.transformOrigin = 'center center';

    // Modificăm crearea textului colorat pentru a include animația
    const text = 'Fun Page';
    const coloredText = text.split('').map((letter, index) => {
        const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493'];
        return `<span style="color: ${colors[index % colors.length]}; 
            display: inline-block; 
            animation: moveUp 1s ease ${index * 0.1}s forwards;">${letter}</span>`;
    }).join('');
    
    // Adăugăm stilul pentru animație în head
    const style = document.createElement('style');
    style.textContent = `
        @keyframes moveUp {
            0% {
                transform: translateY(20px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    funButton.innerHTML = coloredText;

    // Creăm fețele cubului
    const faces = ['front', 'back', 'top', 'bottom', 'left', 'right'];
    faces.forEach(face => {
        const div = document.createElement('div');
        div.className = `cube-face cube-face-${face}`;
        div.style.position = 'absolute';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.background = 'rgba(0, 51, 102, 0.8)'; // Albastru mai închis
        div.style.border = '2px solid rgba(255, 255, 255, 0.5)';
        div.style.boxShadow = 'inset 0 0 20px rgba(255, 255, 255, 0.3)';
        div.style.backfaceVisibility = 'hidden';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        
        // Ajustăm distanța de translare pentru noile dimensiuni
        const distanceZ = 25;  // Jumătate din înălțime
        const distanceX = 100; // Jumătate din lățime
        
        switch(face) {
            case 'front': 
                div.style.transform = `translateZ(${distanceZ}px)`;
                div.innerHTML = coloredText;
                break;
            case 'back':
                div.style.transform = `translateZ(-${distanceZ}px) rotateY(180deg)`;
                break;
            case 'top':
                div.style.transform = `translateY(-${distanceZ}px) rotateX(90deg)`;
                break;
            case 'bottom':
                div.style.transform = `translateY(${distanceZ}px) rotateX(-90deg)`;
                break;
            case 'left':
                div.style.transform = `translateX(-${distanceX}px) rotateY(-90deg)`;
                break;
            case 'right':
                div.style.transform = `translateX(${distanceX}px) rotateY(90deg)`;
                break;
        }
        funButton.appendChild(div);
    });

    // Adăugăm efecte de hover și animație
    funButton.addEventListener('mousemove', (e) => {
        const rect = funButton.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        funButton.style.transform = `
            perspective(1000px)
            rotateX(${-y * 30}deg)
            rotateY(${x * 30}deg)
        `;
    });

    funButton.addEventListener('mouseleave', () => {
        funButton.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });

    // Adăugăm animație continuă subtilă
    const animate = () => {
        const time = Date.now() * 0.001;
        funButton.style.transform = `
            perspective(1000px)
            rotateX(${Math.sin(time) * 5}deg)
            rotateY(${Math.cos(time) * 5}deg)
        `;
        if (!funButton.matches(':hover')) {
            requestAnimationFrame(animate);
        }
    };
    
    animate();
}
