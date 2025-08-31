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
    initScrollAnimations();
    initSmoothScroll();
    initNavbarBehavior();
    initParallax();
    initRippleEffect();

    // Add fade-in classes to elements that should animate
    const animateElements = [
      '.feature-card',
      '.gallery-item', 
      '.showcase-feature',
      '.stat'
    ];
    
    animateElements.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add('fade-in', `stagger-${(index % 4) + 1}`);
      });
    });
  });
})();

