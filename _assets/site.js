// Rowhni - Awwwards Level Interactive Experience
// Advanced GSAP animations with magnetic cursor, parallax, and micro-interactions

gsap.registerPlugin(ScrollTrigger, TextPlugin);

class RowhniExperience {
    constructor() {
        this.mouse = { x: 0, y: 0 };
        this.cursor = { x: 0, y: 0 };
        this.isHovering = false;
        this.isClicking = false;
        
        this.init();
    }

    init() {
        this.setupGSAPDefaults();
        this.initializeMagneticCursor();
        this.initializeTextAnimations();
        this.initializeScrollAnimations();
        this.initializeParallaxEffects();
        this.initializeCounterAnimations();
        this.initializeVoiceDemo();
        this.initializeQuranProgress();
        this.initializePrayerTimes();
        this.initializeDhikrProgress();
        this.initializeQuranProgress();
        this.initializeNavigation();
        this.initializeMicroInteractions();
        this.initializeFloatingElements();
        this.initializeDesignShowcase();
        this.initializePremiumHeroAnimations();
        this.initializePremiumFeatureAnimations();
        this.initializeExitIntentPopup();
        this.initializeServiceWorker();
        this.optimizePerformance();
    }

    initializePremiumHoverEffects() {
        // Premium card hover animations
        gsap.utils.toArray('.feature-block-premium, .stat-card, .insight-card').forEach(card => {
            const tl = gsap.timeline({ paused: true });
            
            tl.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.6,
                ease: "power3.out"
            })
            .to(card.querySelector('*'), {
                filter: "brightness(1.1)",
                duration: 0.6,
                ease: "power3.out"
            }, 0);

            card.addEventListener('mouseenter', () => tl.play());
            card.addEventListener('mouseleave', () => tl.reverse());
        });

        // Enhanced text reveal on scroll
        gsap.utils.toArray('.section-title, .feature-title-hero').forEach(title => {
            gsap.fromTo(title, 
                { 
                    opacity: 0, 
                    y: 50,
                    filter: "blur(10px)" 
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    initializeIntelligentScrollAnimations() {
        // Progressive reveal system
        gsap.utils.toArray('[data-animate-up]').forEach((element, index) => {
            const delay = element.dataset.delay || 0;
            
            gsap.fromTo(element,
                { 
                    opacity: 0, 
                    y: 60,
                    scale: 0.95 
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8 + (index * 0.1),
                    delay: delay / 1000,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Parallax background elements
        gsap.utils.toArray('[data-parallax]').forEach(element => {
            gsap.to(element, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Staggered animations for lists
        gsap.utils.toArray('[data-animate-stagger]').forEach(container => {
            const children = container.children;
            const delay = container.dataset.delay || 0;
            
            gsap.fromTo(children,
                { 
                    opacity: 0, 
                    x: -30,
                    rotationY: 15 
                },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 0.6,
                    stagger: {
                        amount: 0.8,
                        from: "start"
                    },
                    delay: delay / 1000,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    initializeAdvancedCursorInteractions() {
        // Magnetic cursor effects for premium elements
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) return;

        const magneticElements = gsap.utils.toArray('.magnetic-btn, .btn-hero-primary, .trust-badge');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    scale: 1.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(element, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.6)"
                });
            });
        });
    }

    initializePremiumLoadingSequence() {
        // Page entrance sequence
        const entranceTL = gsap.timeline();
        
        entranceTL
            .from('body', {
                opacity: 0,
                duration: 0.5
            })
            .from('.nav', {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, '-=0.3')
            .from('.hero-background', {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            }, '-=0.5');

        // Remove loading state
        document.body.classList.remove('loading');
    }

    optimizePerformance() {
        // Performance optimization for GSAP animations
        gsap.config({
            force3D: true,
            nullTargetWarn: false,
            trialWarn: false,
            autoSleep: 60
        });

        // Optimize ScrollTrigger refresh
        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
            ignoreMobileResize: true
        });

        // Lazy load animations for better performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px 0px'
        };

        const lazyAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Initialize animations only when element is visible
                    if (element.dataset.lazyAnimation) {
                        const animationType = element.dataset.lazyAnimation;
                        this.initializeLazyAnimation(element, animationType);
                        lazyAnimationObserver.unobserve(element);
                    }
                }
            });
        }, observerOptions);

        // Observe elements with lazy animations
        document.querySelectorAll('[data-lazy-animation]').forEach(element => {
            lazyAnimationObserver.observe(element);
        });

        // Debounce resize events for better performance
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        });

        // Optimize cursor movement tracking
        let cursorFrame;
        document.addEventListener('mousemove', (e) => {
            if (cursorFrame) return;
            
            cursorFrame = requestAnimationFrame(() => {
                this.updateCursorPosition(e.clientX, e.clientY);
                cursorFrame = null;
            });
        });

        // Memory cleanup on page unload
        window.addEventListener('beforeunload', () => {
            ScrollTrigger.killAll();
            gsap.killTweensOf("*");
        });

        // Reduce motion for accessibility
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            gsap.globalTimeline.timeScale(0.1);
            ScrollTrigger.config({
                autoRefreshEvents: "none"
            });
        }

        console.log('🚀 Rowhni: Performance optimizations applied');
    }

    initializeExitIntentPopup() {
        const popup = document.getElementById('exitPopup');
        const closeBtn = document.getElementById('closePopup');
        const subscribeBtn = document.getElementById('subscribeBtn');
        const emailInput = document.getElementById('popupEmail');
        const overlay = popup.querySelector('.popup-overlay');
        
        let hasShownPopup = false;
        let mouseLeaveCount = 0;
        let isPopupOpen = false;

        // Check if user has already subscribed (localStorage)
        if (localStorage.getItem('rowhni_subscribed') === 'true') {
            return; // Don't show popup if already subscribed
        }

        // Exit intent detection
        const handleMouseLeave = (e) => {
            if (isPopupOpen || hasShownPopup) return;
            
            // Check if mouse is leaving from top of viewport
            if (e.clientY <= 10 && e.relatedTarget === null) {
                mouseLeaveCount++;
                
                // Show popup after 2nd attempt to leave (less aggressive)
                if (mouseLeaveCount >= 2) {
                    showPopup();
                }
            }
        };

        // Time-based trigger (backup - 45 seconds)
        const timeBasedTrigger = setTimeout(() => {
            if (!isPopupOpen && !hasShownPopup) {
                showPopup();
            }
        }, 45000);

        // Scroll-based trigger (80% of page)
        const scrollTrigger = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 80 && !isPopupOpen && !hasShownPopup) {
                showPopup();
            }
        };

        const showPopup = () => {
            if (hasShownPopup) return;
            
            hasShownPopup = true;
            isPopupOpen = true;
            clearTimeout(timeBasedTrigger);
            
            popup.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Focus email input after animation
            setTimeout(() => {
                emailInput.focus();
            }, 400);

            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'popup_shown', {
                    event_category: 'engagement',
                    event_label: 'exit_intent'
                });
            }
        };

        const closePopup = () => {
            popup.classList.remove('show');
            document.body.style.overflow = '';
            isPopupOpen = false;
            
            // Mark as seen to prevent re-showing in this session
            sessionStorage.setItem('rowhni_popup_seen', 'true');
        };

        const handleSubscribe = async (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email || !isValidEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }

            // Show loading state
            subscribeBtn.querySelector('.btn-text').style.display = 'none';
            subscribeBtn.querySelector('.btn-loading').classList.remove('hidden');
            subscribeBtn.disabled = true;

            try {
                // Simulate API call (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Success state
                localStorage.setItem('rowhni_subscribed', 'true');
                localStorage.setItem('rowhni_email', email);
                
                // Show success message
                popup.querySelector('.popup-header').innerHTML = `
                    <div class="popup-icon">
                        <span style="font-size: 3rem;">🎉</span>
                    </div>
                    <h3 class="popup-title">Welcome to the Family!</h3>
                    <p class="popup-subtitle">Check your email for exclusive Islamic productivity tips and early access to new features.</p>
                `;
                
                popup.querySelector('.popup-benefits').style.display = 'none';
                popup.querySelector('.popup-form').style.display = 'none';
                popup.querySelector('.popup-social-proof').style.display = 'none';
                
                // Analytics tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'newsletter_signup', {
                        event_category: 'conversion',
                        event_label: 'exit_intent_popup'
                    });
                }
                
                // Auto-close after 3 seconds
                setTimeout(closePopup, 3000);
                
            } catch (error) {
                console.error('Subscription error:', error);
                showToast('Something went wrong. Please try again.', 'error');
                
                // Reset button state
                subscribeBtn.querySelector('.btn-text').style.display = 'block';
                subscribeBtn.querySelector('.btn-loading').classList.add('hidden');
                subscribeBtn.disabled = false;
            }
        };

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const showToast = (message, type = 'info') => {
            // Simple toast notification
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 24px;
                background: ${type === 'error' ? '#ff4757' : '#2ed573'};
                color: white;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10001;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.transform = 'translateX(0)';
            }, 100);
            
            setTimeout(() => {
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        // Event listeners
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', scrollTrigger, { passive: true });
        
        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);
        subscribeBtn.addEventListener('click', handleSubscribe);
        
        // Enter key in email field
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSubscribe(e);
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isPopupOpen) {
                closePopup();
            }
        });

        // Don't show if already seen in this session
        if (sessionStorage.getItem('rowhni_popup_seen') === 'true') {
            hasShownPopup = true;
        }

        console.log('🎯 Exit-intent popup initialized');
    }

    initializeServiceWorker() {
        // Register Service Worker for PWA functionality and caching
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    const registration = await navigator.serviceWorker.register('/sw.js', {
                        scope: '/'
                    });

                    console.log('✅ Service Worker registered successfully:', registration.scope);

                    // Listen for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New version available
                                this.showUpdateNotification();
                            }
                        });
                    });

                    // Listen for controller change (new SW took control)
                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                        window.location.reload();
                    });

                    // Check for updates periodically
                    setInterval(() => {
                        registration.update();
                    }, 60000); // Check every minute

                } catch (error) {
                    console.error('❌ Service Worker registration failed:', error);
                }
            });
        }

        // PWA Install Prompt
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('📱 PWA install prompt available');
            e.preventDefault();
            deferredPrompt = e;
            
            // Show custom install button after some interaction
            setTimeout(() => {
                this.showPWAInstallPrompt(deferredPrompt);
            }, 30000); // Show after 30 seconds
        });

        // Track PWA installation
        window.addEventListener('appinstalled', () => {
            console.log('🎉 PWA was installed');
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'pwa_installed', {
                    event_category: 'engagement',
                    event_label: 'app_install'
                });
            }
            
            deferredPrompt = null;
        });
    }

    showUpdateNotification() {
        // Create update notification
        const notification = document.createElement('div');
        notification.className = 'update-notification';
        notification.innerHTML = `
            <div class="update-content">
                <span class="update-icon">🔄</span>
                <div class="update-text">
                    <strong>New version available!</strong>
                    <p>Refresh to get the latest features</p>
                </div>
                <button class="update-btn" id="updateBtn">Update</button>
                <button class="update-close" id="updateClose">×</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 350px;
            background: var(--surface-elevated);
            border: 1px solid rgba(244, 208, 63, 0.3);
            border-radius: 12px;
            padding: var(--space-lg);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s var(--ease-smooth);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Handle update button
        notification.querySelector('#updateBtn').addEventListener('click', () => {
            window.location.reload();
        });

        // Handle close button
        notification.querySelector('#updateClose').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
    }

    showPWAInstallPrompt(deferredPrompt) {
        if (!deferredPrompt) return;

        // Create install prompt
        const installPrompt = document.createElement('div');
        installPrompt.className = 'pwa-install-prompt';
        installPrompt.innerHTML = `
            <div class="install-content">
                <div class="install-icon">📱</div>
                <div class="install-text">
                    <strong>Install Rowhni App</strong>
                    <p>Get faster access with our web app!</p>
                </div>
                <div class="install-actions">
                    <button class="install-btn" id="installBtn">Install</button>
                    <button class="install-later" id="installLater">Later</button>
                </div>
            </div>
        `;

        installPrompt.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            max-width: 400px;
            margin: 0 auto;
            background: var(--surface-elevated);
            border: 1px solid rgba(244, 208, 63, 0.3);
            border-radius: 16px;
            padding: var(--space-lg);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
            z-index: 10001;
            transform: translateY(100%);
            transition: transform 0.4s var(--ease-bounce);
        `;

        document.body.appendChild(installPrompt);

        // Animate in
        setTimeout(() => {
            installPrompt.style.transform = 'translateY(0)';
        }, 100);

        // Handle install button
        installPrompt.querySelector('#installBtn').addEventListener('click', async () => {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('✅ User accepted PWA install');
            } else {
                console.log('❌ User dismissed PWA install');
            }

            installPrompt.remove();
            deferredPrompt = null;
        });

        // Handle later button
        installPrompt.querySelector('#installLater').addEventListener('click', () => {
            installPrompt.style.transform = 'translateY(100%)';
            setTimeout(() => installPrompt.remove(), 400);
            
            // Don't show again for 7 days
            localStorage.setItem('pwa_prompt_dismissed', Date.now() + (7 * 24 * 60 * 60 * 1000));
        });

        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (installPrompt.parentNode) {
                installPrompt.style.transform = 'translateY(100%)';
                setTimeout(() => installPrompt.remove(), 400);
            }
        }, 10000);
    }

    initializeLazyAnimation(element, type) {
        switch (type) {
            case 'fadeUp':
                gsap.fromTo(element, 
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
                break;
            case 'scaleIn':
                gsap.fromTo(element,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
                break;
        }
    }

    updateCursorPosition(x, y) {
        const cursor = document.querySelector('.magnetic-cursor');
        if (cursor) {
            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power3.out"
            });
        }
    }

    setupGSAPDefaults() {
        gsap.config({
            force3D: true,
            nullTargetWarn: false,
            trialWarn: false
        });

        // Remove loading class and reveal page
        gsap.set("body", { opacity: 1 });
        document.body.classList.remove('loading');

        // DISABLED - Set initial states for hero animations (was hiding text)
        // gsap.set(".hero-badge", { opacity: 0, y: 30 });
        // gsap.set(".hero-title .title-line", { opacity: 0, y: 100 });
        // gsap.set(".hero-subtitle", { opacity: 0, y: 50 }); // ← This was hiding the text!
        // gsap.set(".hero-actions", { opacity: 0, y: 40 });
        // gsap.set(".hero-stats .stat", { opacity: 0, y: 30, scale: 0.8 });
        // gsap.set(".app-showcase", { opacity: 0, x: 100, rotationY: 15 });
        // gsap.set(".floating-pills .pill", { opacity: 0, scale: 0, rotation: "random(-15, 15)" });
        
        console.log('🚫 GSAP initial states disabled - text should be visible now');

        // Set initial states for sections
        gsap.set("[data-animate-up]", { opacity: 0, y: 60 });
        gsap.set("[data-animate-left]", { opacity: 0, x: -80 });
        gsap.set("[data-animate-right]", { opacity: 0, x: 80 });
        gsap.set("[data-animate-scale]", { opacity: 0, scale: 0.8 });
    }

    initializeMagneticCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) {
            console.warn('❌ Magnetic cursor element not found');
            return;
        }
        
        console.log('✅ Initializing magnetic cursor');

        const cursorInner = cursor.querySelector('.cursor-inner');

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Smooth cursor follow
        gsap.ticker.add(() => {
            const speed = 0.15;
            
            this.cursor.x += (this.mouse.x - this.cursor.x) * speed;
            this.cursor.y += (this.mouse.y - this.cursor.y) * speed;
            
            gsap.set(cursor, {
                x: this.cursor.x,
                y: this.cursor.y,
                xPercent: -50,
                yPercent: -50
            });
        });

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .app-frame, .stat-card, .dhikr-card, .progress-pill');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.isHovering = true;
                cursor.classList.add('hovering');
                
                // Magnetic effect
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const moveX = (this.mouse.x - centerX) * 0.3;
                const moveY = (this.mouse.y - centerY) * 0.3;
                
                gsap.to(el, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            el.addEventListener('mouseleave', () => {
                this.isHovering = false;
                cursor.classList.remove('hovering');
                
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => {
            this.isClicking = true;
            cursor.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            this.isClicking = false;
            cursor.classList.remove('clicking');
        });
    }

    initializeTextAnimations() {
        // DISABLED - Text animations were breaking the display
        console.log('📝 Text animations disabled to prevent text destruction');
        
        // Ensure all text elements are immediately visible
        const textElements = document.querySelectorAll('.hero-title, .hero-subtitle, .title-line-primary, .title-line-gradient, .subtitle-highlight');
        textElements.forEach(el => {
            el.style.opacity = '1 !important';
            el.style.transform = 'translateY(0) !important';
            el.style.visibility = 'visible !important';
            el.style.display = 'inline !important';
            console.log('🔍 Fixed element:', el.className, el.textContent);
        });
        
        // Also fix the hero subtitle paragraph specifically
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1 !important';
            heroSubtitle.style.visibility = 'visible !important';
            console.log('🔍 Hero subtitle content:', heroSubtitle.innerHTML);
        }
        
        console.log('✅ All text elements are now visible without destructive animations');
    }

    initializeScrollAnimations() {
        // Hero entrance - masterful timeline
        const heroTl = gsap.timeline({ delay: 0.5 });
        
        heroTl
            .to(".hero-badge", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out" 
            })
            .to(".hero-title .title-line span", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: { 
                    each: 0.02,
                    from: "start"
                },
                ease: "back.out(1.7)" 
            }, "-=0.4")
            .to(".hero-subtitle", { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out" 
            }, "-=0.6")
            .to(".hero-actions", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out" 
            }, "-=0.6")
            .to(".hero-stats .stat", { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 0.6, 
                stagger: 0.15,
                ease: "back.out(1.7)" 
            }, "-=0.4")
            .to(".app-showcase", { 
                opacity: 1, 
                x: 0, 
                rotationY: 0,
                duration: 1.2, 
                ease: "power3.out" 
            }, "-=1")
            .to(".floating-pills .pill", {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                stagger: { 
                    each: 0.2,
                    from: "random"
                },
                ease: "back.out(1.7)"
            }, "-=0.8");

        // Advanced scroll-triggered animations
        gsap.utils.toArray("[data-animate-up]").forEach((el, index) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-left]").forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, x: -80, rotationY: -15 },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-right]").forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, x: 80, rotationY: 15 },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-stagger]").forEach(container => {
            const children = container.children;
            
            gsap.fromTo(children,
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: { 
                        each: 0.1,
                        from: "start"
                    },
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    initializeParallaxEffects() {
        // Hero parallax
        gsap.to(".floating-pills .pill", {
            y: -100,
            rotation: 360,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // App mockups parallax
        gsap.to(".main-mockup", {
            y: -80,
            rotationY: 5,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
        });

        gsap.to(".secondary-mockup", {
            y: -120,
            rotationY: -5,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        });

        // Feature screenshots parallax
        gsap.utils.toArray(".feature-screenshot").forEach(img => {
            gsap.to(img, {
                y: -60,
                rotationX: 2,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        // Background elements parallax
        gsap.utils.toArray(".float-element").forEach((el, index) => {
            gsap.to(el, {
                y: -100 * (index + 1),
                rotation: 360,
                scrollTrigger: {
                    trigger: el.closest('section'),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        });
    }

    initializeCounterAnimations() {
        // Enhanced counter animations with custom easing
        gsap.utils.toArray('[data-counter]').forEach(counter => {
            const targetValue = parseInt(counter.dataset.counter) || parseInt(counter.textContent.replace(/[^\d]/g, ''));
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: () => {
                    gsap.fromTo({ count: 0 }, 
                        { count: targetValue },
                        {
                            duration: 2.5,
                            ease: "power2.out",
                            onUpdate: function() {
                                const current = Math.round(this.targets()[0].count);
                                const originalText = counter.textContent;
                                
                                if (originalText.includes('M+')) {
                                    counter.textContent = current + 'M+';
                                } else if (originalText.includes('K+')) {
                                    counter.textContent = current + 'K+';
                                } else if (originalText.includes('%')) {
                                    counter.textContent = current + '%';
                                } else {
                                    counter.textContent = current.toLocaleString();
                                }
                            }
                        }
                    );
                }
            });
        });
    }

}

// Standalone Theme Toggle Implementation
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle state based on current theme
    updateThemeToggle(savedTheme);
    
    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeToggle(newTheme);
    });
}

function updateThemeToggle(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const sunIcon = themeToggle.querySelector('.sun');
    const moonIcon = themeToggle.querySelector('.moon');
    
    if (theme === 'light') {
        sunIcon?.style.setProperty('opacity', '1');
        sunIcon?.style.setProperty('transform', 'rotate(0deg)');
        moonIcon?.style.setProperty('opacity', '0');
        moonIcon?.style.setProperty('transform', 'rotate(180deg)');
    } else {
        sunIcon?.style.setProperty('opacity', '0');
        sunIcon?.style.setProperty('transform', 'rotate(180deg)');
        moonIcon?.style.setProperty('opacity', '1');
        moonIcon?.style.setProperty('transform', 'rotate(0deg)');
    }
}

// Standalone Mobile Menu Implementation
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle?.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu?.classList.toggle('mobile-open');
        
        // Prevent body scroll when menu is open
        if (navMenu?.classList.contains('mobile-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
            mobileToggle?.classList.remove('active');
            navMenu?.classList.remove('mobile-open');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking nav links
    navMenu?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle?.classList.remove('active');
            navMenu?.classList.remove('mobile-open');
            document.body.style.overflow = '';
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileToggle?.classList.remove('active');
            navMenu?.classList.remove('mobile-open');
            document.body.style.overflow = '';
        }
    });
}

// Enhanced initialization with better error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize main experience
        const experience = new RowhniExperience();
        console.log('✅ RowhniExperience initialized');
        
        // Initialize additional features
        initializeThemeToggle();
        console.log('✅ Theme toggle initialized');
        
        initializeMobileMenu();
        console.log('✅ Mobile menu initialized');
        
        console.log('🎯 Rowhni website initialized successfully with all features');
    } catch (error) {
        console.error('❌ Failed to initialize Rowhni app:', error);
        
        // Fallback initialization for critical features
        const fallbackInit = () => {
            console.log('🔄 Running fallback initialization...');
            
            // Basic theme toggle fallback
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                });
                console.log('✅ Fallback theme toggle active');
            }
            
            // Basic mobile menu fallback
            const mobileToggle = document.getElementById('mobileMenuToggle');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', () => {
                    mobileToggle.classList.toggle('active');
                    navMenu.classList.toggle('mobile-open');
                });
                console.log('✅ Fallback mobile menu active');
            }
        };
        
        fallbackInit();
    }
});

// Professional Islamic AI Assistant
class IslamicChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationContext = [];
        this.userPreferences = {};
        this.typing = false;
        this.responses = {
            'prayer-times': {
                text: "🕌 **Precision Prayer Times & Qibla**\n\n✨ **Advanced Features:**\n• High-precision astronomical calculations (±1 minute accuracy)\n• 12+ calculation methods (Umm al-Qura, ISNA, Muslim World League, etc.)\n• Auto location-based times with GPS accuracy\n• Beautiful sun path visualization and countdown timers\n• Smart notification system with gentle reminders\n• Qibla compass with magnetic declination correction\n• Monthly/yearly prayer calendar with Hijri dates\n• Customizable Adhan sounds from Makkah & Madinah\n• Works offline worldwide\n\n**Perfect for Muslims in 195+ countries worldwide** 🌍",
                buttons: ['Download App', 'Voice Features', 'Quran Tracker']
            },
            'voice-features': {
                text: "🎤 **Revolutionary Voice-Powered Dhikr**\n\n🚀 **World's First Voice Dhikr Counter:**\n• 99.7% speech recognition accuracy in Arabic & English\n• Recognizes \"SubhanAllah\", \"Alhamdulillah\", \"Allahu Akbar\"\n• 100% on-device processing (complete privacy)\n• Perfect for meditation and focused worship\n• Intelligent noise filtering for clear recognition\n• Visual feedback with beautiful animations\n• Works in any environment - mosque, home, outdoors\n• Supports different pronunciation styles\n• Battery optimized with advanced algorithms\n\n**Used by 2M+ Muslims for 52M+ counted dhikr** 📿\n\n*\"This feature has transformed my dhikr practice!\"* - Ahmad K., London",
                buttons: ['Try Voice Demo', 'Prayer Times', 'AI Assistant']
            },
            'quran-tracker': {
                text: "📖 **Intelligent Quran Progress Tracking**\n\n🎯 **Smart Learning Features:**\n• Automatic reading progress tracking (Juz, Surah, Ayah level)\n• 40+ language translations with scholarly annotations\n• Word-by-word translation and root word analysis\n• Audio recitations by world-renowned Qaris\n• Personalized daily reading goals with AI recommendations\n• Beautiful typography with multiple Mushaf styles\n• Bookmark system with notes and reflections\n• Search functionality across translations\n• Study streaks and achievement system\n• Offline reading with synchronized progress\n\n**Average users read 3x more Quran with our tracker** 📈",
                buttons: ['Start Reading', 'Voice Features', 'Download App']
            },
            'ai-assistant': {
                text: "🤖 **Your Personal Islamic Scholar Assistant**\n\n🧠 **Powered by Advanced AI:**\n• Comprehensive Islamic knowledge base with authentic sources\n• Instant answers to Fiqh, Aqeedah, and Hadith questions\n• References from Quran, Sahih Bukhari, Muslim, and major scholars\n• Multiple madhab perspectives when applicable\n• 24/7 availability in multiple languages\n• Context-aware conversations that remember your questions\n• Safe, filtered responses aligned with Islamic principles\n• Explains complex topics in simple, understandable terms\n• Covers prayer, fasting, Hajj, Zakat, and daily Islamic practices\n\n**Trusted by scholars and students worldwide** 🎓\n\n*Ask me anything about Islam - I'm here to help guide your faith journey!*",
                buttons: ['Ask Question', 'Prayer Times', 'Voice Features']
            },
            'features': {
                text: "✨ **Rowhni: Complete Islamic Companion**\n\n🎯 **Core Features:**\n\n🔊 **Voice Dhikr Counter** (99.7% accuracy)\n   • First-ever voice recognition for Islamic dhikr\n   • Works in Arabic and English pronunciation\n   • Complete privacy with on-device processing\n\n📿 **Digital Tasbih** (Traditional + Modern)\n   • Beautiful Islamic designs and themes\n   • Haptic feedback and sound customization\n   • Multiple dhikr presets and custom counters\n\n📖 **Quran Progress Tracker** (40+ translations)\n   • Smart reading goals and achievement system\n   • Audio recitations and word-by-word translation\n   • Offline access with cloud synchronization\n\n🕌 **Precision Prayer Times** (±1min accuracy)\n   • 12+ calculation methods for global accuracy\n   • Beautiful Adhan sounds from holy cities\n   • Qibla compass with magnetic correction\n\n🤖 **AI Islamic Assistant** (24/7 scholar)\n   • Authentic Islamic knowledge with references\n   • Context-aware conversations in multiple languages\n   • Safe, filtered guidance aligned with Quran & Sunnah\n\n🎨 **iOS 18 Glass Design** (Premium UI/UX)\n   • Translucent interfaces with depth effects\n   • Dark/light modes with system integration\n   • Optimized for all iPhone models\n\n**Rated 4.8/5 ⭐ by 2M+ Muslims worldwide**",
                buttons: ['Download Now', 'Voice Demo', 'Prayer Times', 'AI Chat']
            },
            'download': {
                text: "📱 **Download Rowhni - #1 Islamic App**\n\n🏆 **Award-Winning App:**\n⭐ **4.8/5 Stars** (12,847+ reviews)\n📈 **2M+ Active Users** worldwide\n🆓 **Completely Free** - No subscriptions or hidden costs\n🔒 **Privacy First** - Your data never leaves your device\n🌍 **Global Reach** - Used in 195+ countries\n\n💎 **What Makes Us Special:**\n• World's first voice-powered dhikr counter\n• Astronomical precision for prayer times\n• Beautiful iOS 18 glass design interface\n• 100% offline functionality\n• Regular updates with new features\n• Excellent customer support\n\n📲 **Compatible with:**\n• iPhone (iOS 15.0 or later)\n• iPad (optimized for all sizes)\n• Apple Watch (coming soon)\n\n🚀 **Download from App Store:** [Get Rowhni Now](https://apps.apple.com/app/rowhni)\n\n*Join millions of Muslims enhancing their spiritual practice with technology*",
                buttons: ['Open App Store', 'See Features', 'Contact Support']
            },
            'support': {
                text: "💬 **Professional Support & Help Center**\n\n🎯 **Get Expert Help:**\n📧 **Priority Support:** support@rowhni.com\n⚡ **Response Time:** Within 6-12 hours\n🌍 **Languages:** English, Arabic, Urdu, Turkish, French, German\n📱 **Platform:** iOS technical support\n\n📚 **Self-Help Resources:**\n• Comprehensive FAQ with 50+ common questions\n• Video tutorials for all features\n• Troubleshooting guides\n• Islamic guidance resources\n• Privacy policy and terms\n\n🛡️ **Security & Privacy:**\n• End-to-end encryption for all data\n• GDPR compliant privacy practices\n• No data sharing with third parties\n• Complete transparency in data handling\n\n🔧 **Technical Support:**\n• iOS compatibility issues\n• Voice recognition troubleshooting\n• Prayer time calculation questions\n• Feature requests and feedback\n• Bug reports and app improvements\n\n**Our support team includes Islamic scholars and tech experts**",
                buttons: ['Contact Support', 'FAQ', 'Privacy Policy', 'Download App']
            },
            'greeting': {
                text: "السلام عليكم وبركاته وأهلاً وسهلاً 🌙\n\n**Welcome to Rowhni's AI Assistant!** I'm here to provide comprehensive support for your Islamic journey.\n\n🎯 **I can help you with:**\n\n📱 **App Features & Capabilities**\n   • Voice dhikr counter demonstration\n   • Prayer time calculation methods\n   • Quran progress tracking system\n   • Advanced AI assistant features\n\n🕌 **Islamic Practice & Guidance**\n   • Prayer times and Qibla direction\n   • Dhikr and Tasbih recommendations\n   • Quran reading goals and plans\n   • Islamic knowledge and Q&A\n\n🔧 **Technical Support**\n   • Download and installation help\n   • Troubleshooting and bug reports\n   • Feature requests and feedback\n   • Privacy and security questions\n\nI'm powered by advanced AI with authentic Islamic knowledge. How may I assist you in your spiritual practice today?\n\n**Ask me anything - I'm here to help! 🤝**",
                buttons: ['App Features', 'Voice Demo', 'Prayer Times', 'Islamic Q&A', 'Download']
            },
            'islamic-qa': {
                text: "🕌 **Islamic Knowledge & Guidance**\n\n📚 **I can help with authentic Islamic knowledge:**\n\n🤲 **Worship & Practices:**\n   • Prayer (Salah) - timings, procedures, conditions\n   • Fasting (Sawm) - Ramadan rules, voluntary fasting\n   • Zakat - calculation and distribution\n   • Hajj & Umrah - rituals and preparation\n\n📖 **Quran & Hadith:**\n   • Verse explanations and context\n   • Hadith authenticity and meanings\n   • Islamic history and stories\n   • Scholarly interpretations\n\n🌙 **Daily Islamic Living:**\n   • Halal/Haram guidance\n   • Islamic etiquette and manners\n   • Family and social relations\n   • Business and financial matters\n\n⚠️ **Important:** For complex religious matters, always consult qualified local scholars. I provide general guidance based on authentic sources.\n\n**What Islamic topic would you like to learn about?**",
                buttons: ['Prayer Questions', 'Quran Guidance', 'Daily Islam', 'Back to Features']
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showInitialNotification();
    }
    
    bindEvents() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const input = document.getElementById('chatbotInput');
        const send = document.getElementById('chatbotSend');
        const messages = document.getElementById('chatbotMessages');
        
        toggle?.addEventListener('click', () => this.toggleChat());
        close?.addEventListener('click', () => this.closeChat());
        send?.addEventListener('click', () => this.sendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Quick buttons event delegation
        messages?.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-btn')) {
                const question = e.target.getAttribute('data-question');
                this.handleQuickResponse(question);
            }
        });
    }
    
    showInitialNotification() {
        setTimeout(() => {
            const notification = document.getElementById('chatbotNotification');
            if (notification && !this.isOpen) {
                notification.style.display = 'flex';
            }
        }, 3000);
    }
    
    toggleChat() {
        const window = document.getElementById('chatbotWindow');
        const notification = document.getElementById('chatbotNotification');
        
        if (this.isOpen) {
            this.closeChat();
        } else {
            window?.classList.add('open');
            notification.style.display = 'none';
            this.isOpen = true;
        }
    }
    
    closeChat() {
        const window = document.getElementById('chatbotWindow');
        window?.classList.remove('open');
        this.isOpen = false;
    }
    
    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input?.value.trim();
        
        if (!message || this.typing) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        input.disabled = true;
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate realistic typing delay based on response length
        const baseDelay = 800;
        const typingDelay = Math.min(baseDelay + (message.length * 30), 3000);
        
        setTimeout(() => {
            this.hideTypingIndicator();
            this.processMessage(message);
            input.disabled = false;
            input.focus();
        }, typingDelay);
    }
    
    showTypingIndicator() {
        this.typing = true;
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot typing-message';
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator-advanced">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
                <span class="typing-text">AI Assistant is thinking...</span>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typing = false;
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    handleQuickResponse(questionType) {
        const response = this.responses[questionType];
        if (response) {
            setTimeout(() => {
                this.addBotMessage(response.text, response.buttons);
            }, 300);
        }
    }
    
    processMessage(message) {
        // Add to conversation context
        this.conversationContext.push({ role: 'user', message: message, timestamp: Date.now() });
        
        // Keep context length manageable
        if (this.conversationContext.length > 10) {
            this.conversationContext = this.conversationContext.slice(-8);
        }
        
        const lowerMessage = message.toLowerCase();
        let response;
        
        // Advanced contextual and keyword matching
        if (this.matchKeywords(lowerMessage, ['prayer', 'salah', 'salat', 'qibla', 'adhan', 'times', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha'])) {
            response = this.responses['prayer-times'];
        } else if (this.matchKeywords(lowerMessage, ['voice', 'dhikr', 'tasbih', 'count', 'subhanallah', 'alhamdulillah', 'allahu akbar', 'speech', 'recognition'])) {
            response = this.responses['voice-features'];
        } else if (this.matchKeywords(lowerMessage, ['quran', 'reading', 'progress', 'surah', 'ayah', 'juz', 'translation', 'tracker', 'book'])) {
            response = this.responses['quran-tracker'];
        } else if (this.matchKeywords(lowerMessage, ['ai', 'assistant', 'questions', 'islamic', 'scholar', 'knowledge', 'ask', 'guidance', 'fiqh'])) {
            response = this.responses['ai-assistant'];
        } else if (this.matchKeywords(lowerMessage, ['feature', 'what', 'can', 'do', 'capabilities', 'functions', 'about', 'app'])) {
            response = this.responses['features'];
        } else if (this.matchKeywords(lowerMessage, ['download', 'install', 'app store', 'get', 'free', 'ios', 'iphone'])) {
            response = this.responses['download'];
        } else if (this.matchKeywords(lowerMessage, ['help', 'support', 'contact', 'problem', 'bug', 'issue', 'technical'])) {
            response = this.responses['support'];
        } else if (this.matchKeywords(lowerMessage, ['salam', 'hello', 'hi', 'greet', 'peace', 'assalam'])) {
            response = this.responses['greeting'];
        } else if (this.matchKeywords(lowerMessage, ['islam', 'islamic', 'teach', 'learn', 'religion', 'faith', 'muslim', 'knowledge'])) {
            response = this.responses['islamic-qa'];
        } else {
            // Intelligent fallback based on context
            response = this.generateContextualResponse(message, lowerMessage);
        }
        
        // Add to conversation context
        this.conversationContext.push({ role: 'assistant', message: response.text, timestamp: Date.now() });
        
        this.addBotMessage(response.text, response.buttons);
    }
    
    matchKeywords(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
    
    generateContextualResponse(originalMessage, lowerMessage) {
        // Check recent conversation context for better responses
        const recentContext = this.conversationContext.slice(-4);
        const hasDiscussedFeatures = recentContext.some(ctx => 
            ctx.message && ctx.message.includes('features') || ctx.message.includes('capabilities')
        );
        
        // More sophisticated fallback responses
        if (lowerMessage.length < 3) {
            return {
                text: "I'd love to help you! Could you please be a bit more specific about what you'd like to know?",
                buttons: ['App Features', 'Prayer Times', 'Voice Demo', 'Islamic Q&A']
            };
        }
        
        if (this.matchKeywords(lowerMessage, ['why', 'how', 'when', 'where', 'which'])) {
            return {
                text: "Great question! I'm here to provide detailed information about Rowhni and Islamic practices. Let me know which specific topic interests you most:",
                buttons: ['Voice Features', 'Prayer Times', 'Quran Tracker', 'Islamic Guidance']
            };
        }
        
        if (this.matchKeywords(lowerMessage, ['price', 'cost', 'pay', 'subscription', 'money', 'free'])) {
            return {
                text: "💰 **Rowhni is 100% FREE!**\n\n✅ No subscriptions required\n✅ No hidden costs or fees\n✅ All features included at no cost\n✅ No ads in the core experience\n\nWe believe Islamic tools should be accessible to all Muslims worldwide. Download now and enjoy the complete experience!",
                buttons: ['Download Now', 'See All Features', 'Voice Demo']
            };
        }
        
        if (hasDiscussedFeatures) {
            return {
                text: "Based on our conversation, you might be interested in exploring specific features in more detail. Which aspect of Rowhni would you like to dive deeper into?",
                buttons: ['Voice Demo', 'Prayer Precision', 'Quran Study', 'AI Assistant']
            };
        }
        
        // Default intelligent response
        return {
            text: `I understand you're asking about "${originalMessage.substring(0, 50)}${originalMessage.length > 50 ? '...' : ''}"\n\nI'm designed to help with Rowhni app features and Islamic guidance. Here are the main areas I can assist with:`,
            buttons: ['App Features', 'Voice Features', 'Prayer Times', 'Islamic Q&A', 'Support']
        };
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const textP = document.createElement('p');
        textP.textContent = text;
        
        contentDiv.appendChild(textP);
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        
        this.scrollToBottom();
    }
    
    addBotMessage(text, buttons = []) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Format text with line breaks and bold
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        contentDiv.innerHTML = `<p>${formattedText}</p>`;
        
        // Add buttons if provided
        if (buttons.length > 0) {
            const quickOptions = document.createElement('div');
            quickOptions.className = 'quick-options';
            
            buttons.forEach(buttonText => {
                const button = document.createElement('button');
                button.className = 'quick-btn';
                button.textContent = buttonText;
                
                // Enhanced button mapping with new features
                const questionMap = {
                    'App Features': 'features',
                    'More Features': 'features',
                    'See Features': 'features',
                    'See All Features': 'features',
                    'Prayer Times': 'prayer-times',
                    'Voice Features': 'voice-features',
                    'Voice Demo': 'voice-features',
                    'Try Voice Demo': 'voice-features',
                    'Quran Tracker': 'quran-tracker',
                    'Start Reading': 'quran-tracker',
                    'AI Assistant': 'ai-assistant',
                    'AI Chat': 'ai-assistant',
                    'Ask Question': 'ai-assistant',
                    'Islamic Q&A': 'islamic-qa',
                    'Islamic Guidance': 'islamic-qa',
                    'Prayer Questions': 'islamic-qa',
                    'Quran Guidance': 'islamic-qa',
                    'Daily Islam': 'islamic-qa',
                    'Back to Features': 'features',
                    'Download': 'download',
                    'Download Now': 'download',
                    'Download App': 'download',
                    'Get Rowhni Now': 'download',
                    'Open App Store': 'download',
                    'Support': 'support',
                    'Contact Support': 'support',
                    'Help Center': 'support',
                    'FAQ': 'support',
                    'Privacy Policy': 'support'
                };
                
                const question = questionMap[buttonText] || 'features';
                button.setAttribute('data-question', question);
                
                quickOptions.appendChild(button);
            });
            
            contentDiv.appendChild(quickOptions);
        }
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        
        this.scrollToBottom();
    }
    
    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize the chatbot
document.addEventListener('DOMContentLoaded', () => {
    new IslamicChatbot();
});