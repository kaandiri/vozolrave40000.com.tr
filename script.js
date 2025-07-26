// Modern ES6+ JavaScript with Component-like Structure
class VozolRaveApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initIntersectionObserver();
    this.initParallaxEffects();
    this.initMobileMenu();
    this.initSmoothScrolling();
    this.initAnimations();
  }

  // Component: Navigation
  setupEventListeners() {
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
      } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
      }
    });
  }

  // Component: Mobile Menu
  initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  }

  // Component: Intersection Observer for Animations
  initIntersectionObserver() {
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
      .lifestyle-card,
      .gallery-item,
      .event-card,
      .influencer-card,
      .forum-post,
      .social-card
    `);

    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // Component: Parallax Effects
  initParallaxEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-elements');
      
      parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  // Component: Smooth Scrolling
  initSmoothScrolling() {
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const lifestyleSection = document.querySelector('.lifestyle-section');
        if (lifestyleSection) {
          lifestyleSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }

  // Component: Advanced Animations
  initAnimations() {
    // Gallery hover effects
    this.initGalleryAnimations();
    
    // Button hover effects
    this.initButtonAnimations();
    
    // Card interactions
    this.initCardAnimations();
  }

  // Sub-component: Gallery Animations
  initGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05) rotate(2deg)';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) rotate(0deg)';
      });
    });
  }

  // Sub-component: Button Animations
  initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Sub-component: Card Animations
  initCardAnimations() {
    const cards = document.querySelectorAll(`
      .lifestyle-card,
      .event-card,
      .influencer-card,
      .social-card
    `);
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
}

// Component: Dynamic Content Loader
class ContentLoader {
  constructor() {
    this.loadDynamicContent();
  }

  async loadDynamicContent() {
    // Simulate loading user-generated content
    await this.loadGalleryContent();
    await this.loadForumPosts();
    await this.loadEvents();
  }

  async loadGalleryContent() {
    // Simulate API call for gallery images
    const galleryContainer = document.querySelector('.gallery-grid');
    if (!galleryContainer) return;

    // Add loading animation
    this.showLoadingState(galleryContainer);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Remove loading state
    this.hideLoadingState(galleryContainer);
  }

  async loadForumPosts() {
    // Simulate loading forum posts
    const forumContainer = document.querySelector('.forum-preview');
    if (!forumContainer) return;

    // Add real-time update simulation
    setInterval(() => {
      this.updatePostInteractions();
    }, 5000);
  }

  async loadEvents() {
    // Simulate loading events from API
    const eventsContainer = document.querySelector('.events-grid');
    if (!eventsContainer) return;

    // Add event countdown timers
    this.initEventCountdowns();
  }

  showLoadingState(container) {
    container.style.opacity = '0.7';
    container.style.filter = 'blur(2px)';
  }

  hideLoadingState(container) {
    container.style.opacity = '1';
    container.style.filter = 'none';
  }

  updatePostInteractions() {
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
      const currentCount = parseInt(button.textContent.match(/\d+/)?.[0] || '0');
      if (Math.random() > 0.8) { // 20% chance to update
        const newCount = currentCount + Math.floor(Math.random() * 3);
        button.innerHTML = button.innerHTML.replace(/\d+/, newCount);
      }
    });
  }

  initEventCountdowns() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      const dateElement = card.querySelector('.event-date');
      if (dateElement) {
        // Add countdown functionality here
        this.addCountdownTimer(card);
      }
    });
  }

  addCountdownTimer(eventCard) {
    // Simulate countdown timer
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown-timer';
    countdownElement.innerHTML = '<small>Etkinliğe kalan süre: 5 gün 12 saat</small>';
    countdownElement.style.cssText = `
      color: var(--primary-pink);
      font-weight: 600;
      margin-top: 0.5rem;
      font-size: 0.8rem;
    `;
    
    const eventContent = eventCard.querySelector('.event-content');
    if (eventContent) {
      eventContent.appendChild(countdownElement);
    }
  }
}

// Component: Social Media Integration
class SocialIntegration {
  constructor() {
    this.initSocialFeatures();
  }

  initSocialFeatures() {
    this.addShareButtons();
    this.initInstagramFeed();
    this.addSocialLogin();
  }

  addShareButtons() {
    const shareButtons = document.querySelectorAll('[data-share]');
    shareButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = button.dataset.share;
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Vozol Rave 40000 Community - Rave Kültürünün Tercihi!');
        
        let shareUrl = '';
        switch(platform) {
          case 'instagram':
            // Instagram doesn't support direct URL sharing, open app
            shareUrl = `https://www.instagram.com/`;
            break;
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        }
        
        if (shareUrl) {
          window.open(shareUrl, '_blank', 'width=600,height=400');
        }
      });
    });
  }

  initInstagramFeed() {
    // Simulate Instagram feed integration
    const instagramSection = document.querySelector('.social-card.instagram');
    if (instagramSection) {
      instagramSection.addEventListener('click', (e) => {
        e.preventDefault();
        this.showInstagramModal();
      });
    }
  }

  showInstagramModal() {
    // Create modal for Instagram content
    const modal = document.createElement('div');
    modal.className = 'instagram-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h3>Instagram'da Bizi Takip Edin!</h3>
        <p>En güncel içerikler ve topluluk paylaşımları için @vozolrave40k hesabımızı takip edin.</p>
        <a href="https://instagram.com/vozolrave40k" target="_blank" class="btn btn-primary">
          Instagram'da Aç
        </a>
      </div>
    `;
    
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  addSocialLogin() {
    // Add social login buttons if needed
    const loginButtons = document.querySelectorAll('.social-login');
    loginButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        // Implement social login logic
        // console.log('Social login clicked:', button.dataset.provider);
      });
    });
  }
}

// Component: Performance Optimizer
class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.lazyLoadContent();
    this.preloadCriticalResources();
  }

  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for better performance
      img.loading = 'lazy';
      
      // Add error handling
      img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Yüklenemedi';
      });
    });
  }

  lazyLoadContent() {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const src = element.dataset.lazy;
          if (src) {
            element.src = src;
            element.removeAttribute('data-lazy');
            lazyObserver.unobserve(element);
          }
        }
      });
    });

    lazyElements.forEach(el => lazyObserver.observe(el));
  }

  preloadCriticalResources() {
    // Preload critical CSS and fonts
    const criticalResources = [
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = resource;
      document.head.appendChild(link);
    });
  }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .modal-content {
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    max-width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .close-modal {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-pink);
  }
  
  .nav-menu.active {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 0 0 20px 20px;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
  }
`;
document.head.appendChild(style);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  new VozolRaveApp();
  new ContentLoader();
  new SocialIntegration();
  new PerformanceOptimizer();
  
  console.log('🎵 Vozol Rave 40000 Community loaded successfully!');
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}