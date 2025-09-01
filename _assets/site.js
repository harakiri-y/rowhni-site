// Professional Stryds-Style Animations with GSAP
(function(){
  'use strict';
  
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
  // Language Support
  const supported = ["en","de","fr","tr","es","ar"]; 
  
  function getLang(){
    const url = new URL(window.location.href);
    const param = url.searchParams.get("lang");
    if(param && supported.includes(param)) return param;
    const nav = (navigator.language || "en").slice(0,2).toLowerCase();
    if(supported.includes(nav)) return nav; 
    return "en";
  }
  
  function applyLang(lang){
    document.querySelectorAll("[data-lang]").forEach(el=>{
      el.classList.toggle("hidden", el.getAttribute("data-lang")!==lang);
      if(el.getAttribute("data-dir")==="rtl"){
        el.classList.toggle("rtl", lang==="ar");
      }
    });
    const sel=document.getElementById("langSel");
    if(sel) sel.value=lang;
  }
  
  window.__setLang=function(l){
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    history.replaceState(null, "", url.toString());
    applyLang(l);
  }

  // Modern Intersection Observer for animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .scale-in').forEach(el => {
      observer.observe(el);
    });
  }

  // Smooth scroll for navigation links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Enhanced navbar scroll behavior
  function initNavbarBehavior() {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.backdropFilter = 'blur(50px)';
      } else {
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
        nav.style.backdropFilter = 'blur(40px)';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // Parallax effect for hero section
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const hero = document.querySelector('.hero');
      
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
          hero.style.transform = `translateY(${rate}px)`;
        }
      }, { passive: true });
    }
  }

  // Button ripple effect
  function initRippleEffect() {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
          ripple.remove();
        }
        
        button.appendChild(circle);
      });
    });
  }

  // Dynamic Custom Cursor (Stryds Style)
  function initCustomCursor() {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      // Create cursor elements
      const cursor = document.createElement('div');
      const follower = document.createElement('div');
      
      cursor.classList.add('custom-cursor');
      follower.classList.add('cursor-follower');
      
      document.body.appendChild(cursor);
      document.body.appendChild(follower);
      
      let mouseX = 0;
      let mouseY = 0;
      let followerX = 0;
      let followerY = 0;
      
      // Update cursor position
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      });
      
      // Animate follower with delay
      function animateFollower() {
        const speed = 0.2;
        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
      }
      animateFollower();
      
      // Add hover effects
      const hoverElements = 'a, button, .btn, .feature-card, .gallery-item';
      document.querySelectorAll(hoverElements).forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hover');
          follower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          follower.classList.remove('hover');
        });
      });
    }
  }

  // Advanced Scroll Animations with GSAP-like smoothness
  function initAdvancedScrollAnimations() {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        const ratio = entry.intersectionRatio;
        
        if (entry.isIntersecting) {
          element.classList.add('visible');
          
          // Dynamic opacity and transform based on scroll ratio
          const opacity = Math.min(ratio * 1.5, 1);
          const translateY = (1 - ratio) * 50;
          const scale = 0.8 + (ratio * 0.2);
          
          element.style.opacity = opacity;
          element.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
      });
    }, observerOptions);

    // Observe elements with more sophisticated animation
    const animatedElements = document.querySelectorAll(
      '.feature-card, .gallery-item, .showcase-feature, .stat, .hero-title, .hero-subtitle'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
      el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  }

  // Magnetic Hover Effects
  function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('.btn, .feature-card');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.15;
        const deltaY = (e.clientY - centerY) * 0.15;
        
        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // Professional GSAP Typography Animations (Exact Stryds Style)
  function initGSAPAnimations() {
    // Hero Title Animation with GSAP
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTitleLines = document.querySelectorAll('.hero-title-line');
    
    if (heroTitle && heroTitleLines.length > 0) {
      // Set initial state
      gsap.set(heroTitleLines, { 
        opacity: 0, 
        y: 100,
        skewY: 7
      });
      
      gsap.set(heroSubtitle, {
        opacity: 0,
        y: 50
      });
      
      // Create timeline
      const tl = gsap.timeline();
      
      tl.to(heroTitleLines, {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1
      })
      .to(heroSubtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    }
    
    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: heroTitle,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: self => {
        const progress = self.progress;
        if (heroTitle) {
          const vw = window.innerWidth / 100;
          const vh = window.innerHeight / 100;
          const baseSize = Math.max(8 * vw + 4 * vh + 0.5, 60);
          const scrollEffect = Math.max(1 - progress * 0.4, 0.6);
          
          gsap.set(heroTitle, {
            fontSize: `${baseSize * scrollEffect}px`,
            opacity: Math.max(1 - progress * 0.8, 0.2)
          });
        }
      }
    });
  }

  // GSAP Scroll Animations for Cards
  function initGSAPScrollAnimations() {
    gsap.set('.feature-card, .gallery-item, .showcase-feature', {
      opacity: 0,
      y: 60,
      scale: 0.9
    });
    
    ScrollTrigger.batch('.feature-card, .gallery-item, .showcase-feature', {
      onEnter: elements => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15
        });
      },
      start: "top bottom-=100",
      refreshPriority: -1
    });
  }

  // SIMPLE WORKING CURSOR
  function initSimpleCursor() {
    // Only on desktop
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    // Create cursor elements
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    follower.className = 'cursor-follower';
    
    // Add to body
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    
    // Log for debugging
    console.log('✅ Custom cursor elements created and added to DOM');
    console.log('Cursor:', cursor);
    console.log('Follower:', follower);
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update cursor position immediately
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
    
    // Animate follower with smooth delay
    function animateFollower() {
      const speed = 0.1;
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    console.log('✅ Cursor animation started');
  }

  // Dynamic Typography with GSAP Responsive Updates
  function initDynamicTypography() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const sectionTitles = document.querySelectorAll('.section-title');
    
    function updateTypography() {
      const vw = window.innerWidth / 100;
      const vh = window.innerHeight / 100;
      
      if (heroTitle) {
        const dynamicSize = Math.max(8 * vw + 4 * vh + 0.5, 60);
        gsap.set(heroTitle, { fontSize: `${Math.min(dynamicSize, 120)}px` });
      }
      
      if (heroSubtitle) {
        const dynamicSize = Math.max(1.5 * vw + 1 * vh + 0.2, 18);
        gsap.set(heroSubtitle, { fontSize: `${Math.min(dynamicSize, 32)}px` });
      }
      
      sectionTitles.forEach(title => {
        const baseSize = Math.max(4 * vw + 2 * vh + 0.3, 32);
        gsap.set(title, { fontSize: `${Math.min(baseSize, 80)}px` });
      });
    }
    
    window.addEventListener('resize', updateTypography, { passive: true });
    updateTypography();
  }

  // Stryds.com Style Advanced Hover Animations
  function initAdvancedHoverAnimations() {
    // Enhanced Button Animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(btn, {
        scale: 1.05,
        rotationX: 5,
        transformOrigin: "center center",
        duration: 0.3,
        ease: "power2.out"
      });
      
      btn.addEventListener('mouseenter', () => tl.play());
      btn.addEventListener('mouseleave', () => tl.reverse());
    });

    // Feature Card 3D Hover Effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);
        
        gsap.to(card, {
          rotationX: deltaY * -10,
          rotationY: deltaX * 10,
          transformPerspective: 1000,
          transformOrigin: "center center",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      });
    });
  }

  // Professional Text Reveal Animations
  function initTextRevealAnimations() {
    const textElements = document.querySelectorAll('h1, h2, h3, .hero-subtitle');
    
    textElements.forEach(element => {
      const text = element.textContent;
      element.innerHTML = '';
      
      // Split text into words
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.overflow = 'hidden';
        
        const letterSpan = document.createElement('span');
        letterSpan.textContent = word + ' ';
        letterSpan.style.display = 'inline-block';
        letterSpan.style.transform = 'translateY(100%)';
        
        wordSpan.appendChild(letterSpan);
        element.appendChild(wordSpan);
      });
    });

    // Animate text reveals on scroll
    ScrollTrigger.batch(textElements, {
      onEnter: elements => {
        elements.forEach(element => {
          const letters = element.querySelectorAll('span span');
          gsap.to(letters, {
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05
          });
        });
      },
      start: "top bottom-=100"
    });
  }

  // Stryds.com Style Image Parallax
  function initImageParallax() {
    const images = document.querySelectorAll('.app-screenshot, .screen-image, .gallery-image');
    
    images.forEach(img => {
      gsap.set(img, { scale: 1.1 });
      
      ScrollTrigger.create({
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: self => {
          const progress = self.progress;
          gsap.set(img, {
            y: progress * -100,
            scale: 1.1 - progress * 0.1
          });
        }
      });
    });
  }

  // Advanced Navigation Animations
  function initAdvancedNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Staggered nav link animations
    gsap.set(navLinks, { y: -20, opacity: 0 });
    gsap.to(navLinks, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.5
    });

    // Enhanced scroll behavior
    let lastScrollY = 0;
    
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: self => {
        const scrollY = self.scroll();
        const direction = scrollY > lastScrollY ? 1 : -1;
        
        gsap.to(nav, {
          y: direction === 1 && scrollY > 100 ? -100 : 0,
          duration: 0.3,
          ease: "power2.out"
        });
        
        lastScrollY = scrollY;
      }
    });
  }

  // Lottie Animations for Complex Movements (Stryds.com style)
  function initLottieAnimations() {
    // Create animated background elements
    const hero = document.querySelector('.hero');
    if (hero) {
      // Add floating geometric shapes with Lottie-like animations
      for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.style.cssText = `
          position: absolute;
          width: ${20 + Math.random() * 40}px;
          height: ${20 + Math.random() * 40}px;
          background: linear-gradient(45deg, var(--brand-green), var(--brand-yellow));
          border-radius: ${Math.random() > 0.5 ? '50%' : '10px'};
          opacity: 0.1;
          z-index: 1;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          pointer-events: none;
        `;
        
        hero.appendChild(shape);
        
        // Animate with GSAP for smooth performance
        gsap.to(shape, {
          y: `random(-100, 100)`,
          x: `random(-50, 50)`,
          rotation: 360,
          duration: `random(15, 25)`,
          ease: "none",
          repeat: -1,
          yoyo: true
        });
        
        // Scale animation
        gsap.to(shape, {
          scale: `random(0.5, 1.5)`,
          duration: `random(8, 12)`,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  }

  // Morphing Loading Animation (Stryds.com style)
  function initMorphingAnimations() {
    // Create morphing loader
    const createMorphingLoader = () => {
      const loader = document.createElement('div');
      loader.className = 'morphing-loader';
      loader.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        z-index: 10000;
        pointer-events: none;
      `;
      
      const shape = document.createElement('div');
      shape.style.cssText = `
        width: 100%;
        height: 100%;
        background: var(--brand-green);
        border-radius: 50%;
      `;
      
      loader.appendChild(shape);
      document.body.appendChild(loader);
      
      // Morphing animation
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(shape, {
        borderRadius: "10px",
        rotation: 45,
        scale: 1.2,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(shape, {
        borderRadius: "50%",
        rotation: 90,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(shape, {
        borderRadius: "0px",
        rotation: 135,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(shape, {
        borderRadius: "50%",
        rotation: 180,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      // Remove loader after page load
      setTimeout(() => {
        gsap.to(loader, {
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => loader.remove()
        });
      }, 3000);
    };
    
    // Show loader on page load
    if (document.readyState === 'loading') {
      createMorphingLoader();
    }
  }

  // Advanced Magnetic Field Effects
  function initMagneticFields() {
    const magneticElements = document.querySelectorAll('.btn, .feature-card, .gallery-item');
    
    magneticElements.forEach(element => {
      const strength = element.classList.contains('.btn') ? 0.3 : 0.15;
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        
        gsap.to(element, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out"
        });
      });
    });
  }

  // Initialize all functionality when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize language support
    const lang = getLang();
    applyLang(lang);
    const sel = document.getElementById("langSel");
    if (sel) { 
      sel.addEventListener("change", e => window.__setLang(e.target.value)); 
    }

    // Initialize professional GSAP animations (Stryds.com style)
    initGSAPAnimations();
    initGSAPScrollAnimations();
    initSimpleCursor();
    initDynamicTypography();
    initAdvancedHoverAnimations();
    initTextRevealAnimations();
    initImageParallax();
    initAdvancedNavigation();
    initLottieAnimations();
    initMorphingAnimations();
    initMagneticFields();
    initSmoothScroll();
    initRippleEffect();

    // Add background animation to hero
    const hero = document.querySelector('.hero');
    if (hero) {
      const bgAnimation = document.createElement('div');
      bgAnimation.classList.add('hero-background-animation');
      hero.insertBefore(bgAnimation, hero.firstChild);
    }
  });
})();

