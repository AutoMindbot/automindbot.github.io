document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Mobile Navbar Toggle (Hamburger Menu)
  // ==========================================
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    // Triple line click karne par menu khulega ya band hoga
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      navLinks.classList.toggle('active');
    });

    // Jab koi menu link click kare, toh menu automatically band ho jaye
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 2. Active Page Glow (Perfect Logic)
  // ==========================================
  const currentLocation = window.location.href; // Browser ka poora URL le liya
  const menuLinks = document.querySelectorAll('.nav-links a:not(.btn)');
  
  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Logic: Agar URL mein 'index.html' hai ya URL khali/root ('/') par end hota hai, toh Home ko glow karo
    if (linkHref === 'index.html' && (currentLocation.endsWith('/') || currentLocation.includes('index.html'))) {
      link.classList.add('active');
    } 
    // Baki pages ke liye check karo
    else if (linkHref !== 'index.html' && currentLocation.includes(linkHref)) {
      link.classList.add('active');
    } 
    // Jo page active nahi hai, usse glow hatao
    else {
      link.classList.remove('active');
    }
  });

  // ==========================================
  // 3. Scroll Fade-In Animation Observer
  // ==========================================
  const fadeElements = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach(element => {
    appearOnScroll.observe(element);
  });

});