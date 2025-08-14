// Scrybe Landing Page - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initFeatureTabs();
    initInteractiveElements();
    initSmoothScrolling();
    initFormHandling();
    initHowItWorks(); // New function for How It Works section
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// How It Works section functionality
function initHowItWorks() {
    // Demo trigger functionality
    const demoTriggers = document.querySelectorAll('.demo-trigger');
    
    demoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const demoId = this.getAttribute('data-demo');
            const demoPreview = document.getElementById(demoId);
            
            if (demoPreview) {
                // Close any other open demos
                document.querySelectorAll('.demo-preview.active').forEach(demo => {
                    if (demo !== demoPreview) {
                        demo.classList.remove('active');
                    }
                });
                
                // Toggle current demo
                demoPreview.classList.toggle('active');
                
                // Update button text
                const isActive = demoPreview.classList.contains('active');
                if (isActive) {
                    this.innerHTML = '<span class="demo-icon">⏸️</span> Hide Demo';
                } else {
                    this.innerHTML = '<span class="demo-icon">▶️</span> Watch AI Processing Demo';
                }
            }
        });
    });
    
    // Close demos when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.demo-trigger') && !e.target.closest('.demo-preview')) {
            document.querySelectorAll('.demo-preview.active').forEach(demo => {
                demo.classList.remove('active');
            });
            
            // Reset button text
            demoTriggers.forEach(trigger => {
                trigger.innerHTML = '<span class="demo-icon">▶️</span> Watch AI Processing Demo';
            });
        }
    });
    
    // Enhanced hover effects for step cards
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle animation to the icon
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset icon animation
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // File type hover effect for upload step
    const uploadCard = document.querySelector('[data-step="upload"]');
    if (uploadCard) {
        uploadCard.addEventListener('mouseenter', function() {
            const fileTypesHover = this.querySelector('.file-types-hover');
            if (fileTypesHover) {
                fileTypesHover.style.opacity = '1';
                fileTypesHover.style.transform = 'translateY(0)';
            }
        });
        
        uploadCard.addEventListener('mouseleave', function() {
            const fileTypesHover = this.querySelector('.file-types-hover');
            if (fileTypesHover) {
                fileTypesHover.style.opacity = '0';
                fileTypesHover.style.transform = 'translateY(10px)';
            }
        });
    }
    
    // Dashboard preview hover effect for discover step
    const discoverCard = document.querySelector('[data-step="discover"]');
    if (discoverCard) {
        discoverCard.addEventListener('mouseenter', function() {
            const dashboardPreview = this.querySelector('.dashboard-preview');
            if (dashboardPreview) {
                dashboardPreview.style.opacity = '1';
                dashboardPreview.style.transform = 'translateY(0)';
            }
        });
        
        discoverCard.addEventListener('mouseleave', function() {
            const dashboardPreview = this.querySelector('.dashboard-preview');
            if (dashboardPreview) {
                dashboardPreview.style.opacity = '0';
                dashboardPreview.style.transform = 'translateY(10px)';
            }
        });
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Feature tabs functionality
function initFeatureTabs() {
    const tabButtons = document.querySelectorAll('.feature-tab');
    const tabContents = document.querySelectorAll('.feature-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active styling from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'shadow-lg');
                btn.classList.add('text-gray-800', 'bg-gray-100', 'hover:text-gray-900', 'hover:bg-gray-200', 'border', 'border-gray-300');
            });
            
            // Remove active class from all contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Add active styling to clicked button
            this.classList.remove('text-gray-800', 'bg-gray-100', 'hover:text-gray-900', 'hover:bg-gray-200', 'border', 'border-gray-300');
            this.classList.add('active', 'text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'shadow-lg');
            
            // Show corresponding content with animation
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                
                // Add fade-in animation
                targetContent.style.opacity = '0';
                setTimeout(() => {
                    targetContent.style.transition = 'opacity 0.3s ease-in-out';
                    targetContent.style.opacity = '1';
                }, 10);
            }
        });
    });
}

// Interactive elements (hover effects, etc.)
function initInteractiveElements() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form handling
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.classList.add('loading');
                submitButton.textContent = 'Sending...';
            }
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                if (submitButton) {
                    submitButton.classList.remove('loading');
                    submitButton.textContent = 'Message Sent!';
                    submitButton.style.backgroundColor = '#10b981';
                }
                
                // Reset form after success
                setTimeout(() => {
                    form.reset();
                    if (submitButton) {
                        submitButton.textContent = 'Send Message';
                        submitButton.style.backgroundColor = '';
                    }
                }, 2000);
            }, 1500);
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize if screen becomes large
    if (window.innerWidth >= 768) {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Close demo previews on resize
    document.querySelectorAll('.demo-preview.active').forEach(demo => {
        demo.classList.remove('active');
    });
    
    // Reset button text
    document.querySelectorAll('.demo-trigger').forEach(trigger => {
        trigger.innerHTML = '<span class="demo-icon">▶️</span> Watch AI Processing Demo';
    });
}, 250));

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
        z-index: var(--z-fixed);
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
initScrollProgress(); 