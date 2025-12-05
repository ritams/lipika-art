/* ============================================
   Lipika Art Portfolio - Main JavaScript
   ============================================ */

// Initialize Lucide Icons
lucide.createIcons();

/* --- Background Canvas Animation --- */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 200 + 50;
        this.color = `rgba(${Math.random() * 50 + 50}, ${Math.random() * 50 + 50}, ${Math.random() * 100 + 150}, ${Math.random() * 0.03})`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
    }

    draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.min(window.innerWidth / 30, 20);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

/* --- Scroll Reveal Animation --- */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

/* --- Mobile Menu --- */
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.add('hidden');
}

/* --- Lightbox Gallery --- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbTitle = document.getElementById('lightbox-title');
const lbDesc = document.getElementById('lightbox-desc');

// Artwork data
const artData = [
    { 
        src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2670&auto=format&fit=crop", 
        title: "Chromatics I", 
        desc: "Oil on Canvas, 2024" 
    },
    { 
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
        title: "Neural Net", 
        desc: "Generative Digital, 2023" 
    },
    { 
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop", 
        title: "Void State", 
        desc: "Photography, 2023" 
    },
    { 
        src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", 
        title: "Liquid Dreams", 
        desc: "3D Render, 2024" 
    },
    { 
        src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2545&auto=format&fit=crop", 
        title: "Bloom", 
        desc: "Acrylic Pour, 2023" 
    },
    { 
        src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop", 
        title: "Neon Noir", 
        desc: "Cyberpunk Concept, 2024" 
    }
];

function openLightbox(index) {
    const data = artData[index];
    if (!data) return;

    lbImg.src = data.src;
    lbTitle.innerText = data.title;
    lbDesc.innerText = data.desc;

    lightbox.classList.remove('hidden');
    setTimeout(() => {
        lightbox.classList.remove('opacity-0');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
        lightbox.classList.add('hidden');
        lbImg.src = "";
    }, 300);
    document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Close lightbox on clicking background
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

/* --- Smooth Scroll to Gallery --- */
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}
