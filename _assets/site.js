// Professional Website Interactions - Stryds-inspired

(function() {
    'use strict';

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializeAnimations();
        initializeButtons();
        initializeScrollEffects();
    });

    // Navigation scroll behavior
    function initializeNavigation() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateNav() {
            const scrollY = window.scrollY;
            
            if (scrollY > 50) {
                nav.style.background = 'rgba(250, 250, 250, 0.98)';
                nav.style.backdropFilter = 'blur(25px)';
                nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.08)';
            } else {
                nav.style.background = 'rgba(250, 250, 250, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
                nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
            }
            
            // Hide/show nav on scroll
            if (scrollY > 200 && scrollY > lastScrollY) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateNav);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // Smooth scroll-in animations
    function initializeAnimations() {
        const elements = document.querySelectorAll('.feature-block, .why-item');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -10% 0px'
            });

            elements.forEach(function(element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                observer.observe(element);
            });
        }

        // Stagger animation for grid items
        const gridItems = document.querySelectorAll('.why-grid .why-item');
        gridItems.forEach(function(item, index) {
            item.style.animationDelay = (index * 0.1) + 's';
        });
    }

    // Enhanced button interactions
    function initializeButtons() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(function(button) {
            button.removeEventListener('click', handleButtonClick);
            button.addEventListener('click', handleButtonClick);

            // Enhanced hover effects
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    function handleButtonClick(e) {
        const button = e.currentTarget;
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        // Remove existing ripples
        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(function() {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }

    // Scroll effects for images and cards
    function initializeScrollEffects() {
        const images = document.querySelectorAll('.feature-image, .hero-screenshot');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.style.transform = 'translateY(0) scale(1)';
                        image.style.opacity = '1';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -5% 0px'
            });

            images.forEach(function(image) {
                image.style.opacity = '0.8';
                image.style.transform = 'translateY(20px) scale(0.98)';
                image.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                imageObserver.observe(image);
            });
        }

        // Parallax effect for hero phone
        const heroPhone = document.querySelector('.hero-phone');
        if (heroPhone) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                heroPhone.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(${rate}px)`;
            }, { passive: true });
        }
    }

    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Enhanced hover effects for feature cards
    const featureCards = document.querySelectorAll('.feature-image');
    featureCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Performance: Reduce motion for users who prefer it
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.innerHTML = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .keyboard-navigation .btn:focus {
            outline: 2px solid #2563eb;
            outline-offset: 2px;
        }
        
        .btn {
            position: relative;
        }
    `;
    document.head.appendChild(style);

})();