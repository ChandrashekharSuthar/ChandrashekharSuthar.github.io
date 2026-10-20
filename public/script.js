
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetHref = this.getAttribute('href');
        if (!targetHref || targetHref === '#') return;
        
        e.preventDefault();
        
        // Custom offset for main-content because it's at the top
        if (targetHref === '#main-content') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const target = document.querySelector(targetHref);
        if (target) {
            const offset = window.innerWidth <= 768 ? 20 : 80;
            const offsetTop = target.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav-link');

window.addEventListener('scroll', () => {
    let current = 'main-content'; // Default to top
    const offset = 140;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - offset)) {
            current = section.getAttribute('id');
        }
    });

    // If near the bottom of the page, set contact as active
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 120)) {
        current = 'contact';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + current) {
            link.classList.add('active');
        }
    });
});

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
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            const mailtoLink = `mailto:chandrashekharsuthar.work@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Your default email client should open. If not, please email me directly at chandrashekharsuthar.work@gmail.com';
            contactForm.reset();
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Something went wrong. Please email me directly at chandrashekharsuthar.work@gmail.com';
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
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

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// Number Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower is slower
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNum = +target.getAttribute('data-target');
                const suffix = target.getAttribute('data-suffix') || '';
                
                const updateCount = () => {
                    // Quick stats might have inner text without tags, or might just have text.
                    // The text content might be "0+" initially. We just parse the number.
                    const currentString = target.innerText.replace(suffix, '');
                    const count = +currentString;
                    const inc = targetNum / speed;
                    
                    if (count < targetNum) {
                        target.innerText = Math.ceil(count + inc) + suffix;
                        setTimeout(updateCount, 20);
                    } else {
                        target.innerText = targetNum + suffix;
                    }
                };
                
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initCounters();
} else {
    document.addEventListener('DOMContentLoaded', initCounters);
}

// Handle Contact CTA button click (Services Quote, Hero Hire Me, etc.)
window.handleServiceToContactClick = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
        const offset = window.innerWidth <= 768 ? 20 : 80;
        const offsetTop = target.offsetTop - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};

// Attach event listener to .btn-extended-fab and .hero-hire-btn
function initExtendedFab() {
    document.querySelectorAll('.btn-extended-fab, .hero-hire-btn').forEach(btn => {
        btn.removeEventListener('click', window.handleServiceToContactClick);
        btn.addEventListener('click', window.handleServiceToContactClick);
    });
}
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initExtendedFab();
} else {
    document.addEventListener('DOMContentLoaded', initExtendedFab);
}

