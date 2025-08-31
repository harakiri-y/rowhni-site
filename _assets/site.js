// Modern Professional Website Interactions
(function(){
  'use strict';
  
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

  // Dynamic Typography Scaling (Stryds Style)
  function initDynamicTypography() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    function updateTypography() {
      const vw = window.innerWidth / 100;
      const vh = window.innerHeight / 100;
      const scrollY = window.scrollY;
      
      if (heroTitle) {
        const dynamicSize = Math.max(6 * vw + 6 * vh * 0.5, 48);
        const scrollEffect = Math.max(1 - scrollY / 1000, 0.8);
        heroTitle.style.fontSize = `${dynamicSize * scrollEffect}px`;
      }
      
      if (heroSubtitle) {
        const dynamicSize = Math.max(2 * vw + 1 * vh * 0.5, 18);
        const scrollEffect = Math.max(1 - scrollY / 800, 0.9);
        heroSubtitle.style.fontSize = `${dynamicSize * scrollEffect}px`;
      }
    }
    
    window.addEventListener('scroll', updateTypography, { passive: true });
    window.addEventListener('resize', updateTypography, { passive: true });
    updateTypography();
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

    // Initialize modern interactions
    initCustomCursor();
    initAdvancedScrollAnimations();
    initSmoothScroll();
    initNavbarBehavior();
    initParallax();
    initRippleEffect();
    initMagneticEffects();
    initDynamicTypography();

    // Add background animation to hero
    const hero = document.querySelector('.hero');
    if (hero) {
      const bgAnimation = document.createElement('div');
      bgAnimation.classList.add('hero-background-animation');
      hero.insertBefore(bgAnimation, hero.firstChild);
    }
  });
})();

