// Initialize AOS animation library
AOS.init();

// Initialize Vanta.js 3D background
VANTA.NET({
    el: "#vanta-bg",
    color: 0x00ffff,
    backgroundColor: 0x000000,
    points: 12.0,
    maxDistance: 20.0,
    spacing: 18.0,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
});

// Matrix Rain Effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let chars = '01010101アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
chars = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = 'rgba(0, 255, 140, ' + (Math.random() * 0.2 + 0.8) + ')';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

setInterval(draw, 35);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add Font Awesome
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
document.head.appendChild(fontAwesome);

// Update Progress Bars Animation on Scroll
const skillSection = document.getElementById('skills');
let animated = false;

window.addEventListener('scroll', () => {
    if (!animated && isInViewport(skillSection)) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach((bar) => {
            const width = bar.parentElement.parentElement.querySelector('.skill-name span:last-child').textContent;
            bar.style.width = width;
        });
        animated = true;
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Typing Effect for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const heroP = document.querySelector('.hero-content p');
        const text = heroP.textContent;
        heroP.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroP.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    }, 1000);
});

// Resize handlers
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});