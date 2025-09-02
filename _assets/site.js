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