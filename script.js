// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Update navbar background based on scroll position and theme
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        nav.style.background = newTheme === 'dark' ? 'rgba(10, 14, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = newTheme === 'dark' ? 'rgba(10, 14, 39, 0.7)' : 'rgba(255, 255, 255, 0.7)';
    }
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}


// Cursor Trail Effect in Hero Section
const hero = document.querySelector('.hero');
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let cursorTrail = [];
const maxTrailLength = 20;

// Set canvas size
function resizeCanvas() {
    const rect = hero.getBoundingClientRect();
    canvas.width = Math.min(rect.width, window.innerWidth);
    canvas.height = rect.height;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Track mouse position in hero section
let mouseX = 0;
let mouseY = 0;
let isInHero = false;

hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isInHero = true;
    
    // Add trail point
    cursorTrail.push({
        x: mouseX,
        y: mouseY,
        size: Math.random() * 15 + 10,
        life: 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(102, 126, 234, '
    });
    
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

hero.addEventListener('mouseleave', () => {
    isInHero = false;
});

// Floating scientific symbols and coding elements
const symbols = [
    // Math & Science
    '⚛', '∞', '∑', '∫', '√', 'π', 'Δ', '∇', 'Ω', '≈', '≠', '∂', 'λ', 'μ', 'σ',
    // Coding symbols
    '{', '}', '<', '>', '/', '\\', '(', ')', '[', ']', ';', ':', '=', '+', '-',
    // Programming
    '0', '1', 'fn', 'if', 'AI', 'ML', 'API', 'DB', 'UI', 'UX',
    // Special
    '⌘', '⚡', '★', '◆', '●', '■', '▲', '▼', '◀', '▶', '♦', '♣', '♠', '♥'
];
let floatingElements = [];

class FloatingElement {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.type = Math.random();
        
        if (this.type < 0.7) {
            // Text symbol
            this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
            this.size = Math.random() * 30 + 12; // Varied size: 12-42px
            this.isShape = false;
        } else {
            // Geometric shape
            this.shapeType = Math.floor(Math.random() * 4); // 0: circle, 1: square, 2: triangle, 3: hexagon
            this.size = Math.random() * 25 + 8; // Varied size: 8-33px
            this.isShape = true;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        }
        
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = 0;
        this.vy = 0;
        // Smaller elements are more transparent
        this.opacity = (this.size / 40) * 0.4 + 0.1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        if (this.isShape) {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.strokeStyle = 'rgba(56, 189, 248, 1)';
            ctx.lineWidth = 2;
            
            switch(this.shapeType) {
                case 0: // Circle
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.stroke();
                    break;
                case 1: // Square
                    ctx.strokeRect(-this.size, -this.size, this.size * 2, this.size * 2);
                    break;
                case 2: // Triangle
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(this.size, this.size);
                    ctx.lineTo(-this.size, this.size);
                    ctx.closePath();
                    ctx.stroke();
                    break;
                case 3: // Hexagon
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const x = this.size * Math.cos(angle);
                        const y = this.size * Math.sin(angle);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.stroke();
                    break;
            }
            this.rotation += this.rotationSpeed;
        } else {
            ctx.font = `${this.size}px monospace`;
            ctx.fillStyle = 'rgba(56, 189, 248, 1)';
            ctx.fillText(this.symbol, this.x, this.y);
        }
        
        ctx.restore();
    }

    update() {
        if (isInHero) {
            // Calculate distance from cursor
            let dx = mouseX - this.x;
            let dy = mouseY - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            // Move away from cursor
            if (distance < 150) {
                let angle = Math.atan2(dy, dx);
                let force = (150 - distance) / 150;
                this.vx -= Math.cos(angle) * force * 3;
                this.vy -= Math.sin(angle) * force * 3;
            }
        }
        
        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Friction
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Return to base position
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;
        
        // Keep in bounds
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
}

// Initialize floating elements
function initFloatingElements() {
    floatingElements = [];
    for (let i = 0; i < 35; i++) {
        floatingElements.push(new FloatingElement());
    }
}
initFloatingElements();

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw floating elements
    floatingElements.forEach(element => {
        element.update();
        element.draw();
    });
    
    // Draw cursor trail
    cursorTrail.forEach((point, index) => {
        point.life -= 0.02;
        point.x += point.vx;
        point.y += point.vy;
        point.size *= 0.96;
        
        if (point.life > 0) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fillStyle = point.color + (point.life * 0.3) + ')';
            ctx.fill();
            
            // Glow effect
            ctx.shadowBlur = 20;
            ctx.shadowColor = point.color + '0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });
    
    // Remove dead trail points
    cursorTrail = cursorTrail.filter(point => point.life > 0);
    
    requestAnimationFrame(animate);
}
animate();

// Reinitialize on resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initFloatingElements();
});

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}



// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    const currentTheme = html.getAttribute('data-theme');
    if (window.scrollY > 100) {
        if (currentTheme === 'dark') {
            nav.style.background = 'rgba(10, 14, 39, 0.95)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    } else {
        if (currentTheme === 'dark') {
            nav.style.background = 'rgba(10, 14, 39, 0.7)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.7)';
        }
    }
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle (optional enhancement)
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Removed parallax effect - keeping it simple

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add cursor trail effect (optional - can be removed if too much)
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length === 0) {
    // Create cursor trail circles
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        document.body.appendChild(circle);
    }
}

const allCircles = document.querySelectorAll('.circle');

allCircles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    allCircles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.transform = `scale(${(allCircles.length - index) / allCircles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = allCircles[index + 1] || allCircles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

// Uncomment to enable cursor trail
// animateCircles();

console.log('Portfolio loaded successfully! 🚀');


// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend endpoint)
        try {
            // For now, we'll use a mailto link as fallback
            const mailtoLink = `mailto:shekharsuthar1030@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Show success message
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Your default email client should open. If not, please email me directly at shekharsuthar1030@gmail.com';
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Something went wrong. Please email me directly at shekharsuthar1030@gmail.com';
        } finally {
            // Restore button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}


// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
