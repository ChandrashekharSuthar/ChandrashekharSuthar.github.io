// Initialize AOS (Animate On Scroll)
AOS.init({
    disable: window.innerWidth <= 768,
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If it's a bottom nav item AND we are on mobile, let the fragment logic handle it
        if (this.classList.contains('bottom-nav-item') && window.innerWidth <= 768) {
            return; // handled by fragment logic
        }
        
        e.preventDefault();
        
        // Custom offset for main-content because it's at the top
        const targetHref = this.getAttribute('href');
        if (targetHref === '#main-content') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const target = document.querySelector(targetHref);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.bottom-nav-item, .desktop-nav-link');

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) return; // Disable scroll spy on mobile fragments
    
    let current = 'main-content'; // Default to top
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 220)) {
            current = section.getAttribute('id');
        }
    });

    // If near the bottom of the page, set contact as active
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
        current = 'contact';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const isMatch = (href === '#main-content' && (current === 'main-content' || current === 'about')) ||
                        (href === '#' + current && current !== 'main-content' && current !== 'about');
        if (isMatch) {
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

// MOBILE FRAGMENTS LOGIC
function initMobileFragments() {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = {
        '#main-content': ['main-content', 'about', 'core-stack'], // Profile tab shows hero + about + core-stack
        '#projects': ['projects'],
        '#services': ['services'],
        '#contact': ['contact']
    };
    
    // Set initial state
    if (window.innerWidth <= 768) {
        document.getElementById('main-content').classList.add('active-fragment');
        document.getElementById('about').classList.add('active-fragment');
        const coreStack = document.getElementById('core-stack');
        if (coreStack) coreStack.classList.add('active-fragment');
        // Footer is ONLY shown on Contact tab
    }

    bottomNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Remove active classes
                bottomNavItems.forEach(nav => nav.classList.remove('active'));
                document.querySelectorAll('.active-fragment').forEach(el => el.classList.remove('active-fragment'));
                
                // Add active to clicked nav
                item.classList.add('active');
                
                // Add active-fragment to target sections
                const targetHref = item.getAttribute('href');
                const targetIds = sections[targetHref];
                
                if (targetIds) {
                    targetIds.forEach(id => {
                        const el = document.getElementById(id);
                        if (el) el.classList.add('active-fragment');
                    });
                }
                
                // Show footer ONLY on contact tab
                if (targetHref === '#contact') {
                    document.querySelector('.footer').classList.add('active-fragment');
                }
                
                // Scroll to top of fragment
                window.scrollTo(0, 0);
            }
        });
    });
    
    // Handle resize events (reset classes when switching to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Remove fragment constraints so normal scrolling works
            document.querySelectorAll('.active-fragment').forEach(el => el.classList.remove('active-fragment'));
        } else {
            // Re-apply fragment to whatever is active in bottom nav
            const activeNav = document.querySelector('.bottom-nav-item.active');
            if (activeNav) {
                const targetHref = activeNav.getAttribute('href');
                const targetIds = sections[targetHref];
                if (targetIds) {
                    targetIds.forEach(id => {
                        const el = document.getElementById(id);
                        if (el) el.classList.add('active-fragment');
                    });
                }
                
                if (targetHref === '#contact') {
                    document.querySelector('.footer').classList.add('active-fragment');
                }
            }
        }
    });
}

// Call on load
document.addEventListener('DOMContentLoaded', initMobileFragments);
// If already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMobileFragments();
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

// Handle Extended FAB click in Services
window.handleServiceToContactClick = function(e) {
    e.preventDefault();
    
    if (window.innerWidth <= 768) {
        // Mobile: Switch fragments to Contact
        const contactNav = document.querySelector('.bottom-nav-item[href="#contact"]');
        if (contactNav) {
            // Remove active classes
            document.querySelectorAll('.bottom-nav-item').forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll('.active-fragment').forEach(el => el.classList.remove('active-fragment'));
            
            // Add active to contact nav
            contactNav.classList.add('active');
            
            // Activate contact fragment
            const el = document.getElementById('contact');
            if (el) el.classList.add('active-fragment');
            
            // Show footer
            document.querySelector('.footer').classList.add('active-fragment');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // Desktop: Smooth scroll to contact section
        const target = document.getElementById('contact');
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};
