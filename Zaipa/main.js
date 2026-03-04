/**
 * Zaipa V2 - Main JavaScript
 * Handles smooth scrolling, GSAP animations, canvas effects, and magnetic interactions.
 */

// 1. Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time to ms
});
gsap.ticker.lagSmoothing(0);


// 2. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// 3. Magnetic Button Effect
const magneticElements = document.querySelectorAll('.btn-magnetic');

magneticElements.forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    // Calculate cursor position relative to the center of the element
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move slightly towards the cursor
    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out'
    });
  });

  el.addEventListener('mouseleave', () => {
    // Snap back to original position
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});


// 4. Aura Background (Interactive Canvas)
class AuraBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');

    // Check if user prefers reduced motion or is on mobile
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.isMobile || this.prefersReduced) {
      // Fallback: static soft gradient instead of canvas rendering
      this.canvas.style.background = 'radial-gradient(circle at center, rgba(0, 102, 255, 0.05) 0%, transparent 60%)';
      return;
    }

    this.orbs = [
      { x: 0, y: 0, targetX: 0, targetY: 0, radius: 400, color: 'rgba(0,102,255,0.08)' }, // Azure
      { x: 0, y: 0, targetX: 0, targetY: 0, radius: 350, color: 'rgba(0,229,255,0.06)' }, // Mint
    ];

    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Init target positions
    this.orbs.forEach(orb => {
      orb.x = this.mouse.x;
      orb.y = this.mouse.y;
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.orbs.forEach((orb, i) => {
      // Offset targets slightly to create a lagging/overlapping effect
      orb.targetX = this.mouse.x + (i * 120 - 60);
      orb.targetY = this.mouse.y + (i * 100 - 50);

      // Interpolate position for smoothness
      orb.x += (orb.targetX - orb.x) * 0.02;
      orb.y += (orb.targetY - orb.y) * 0.02;

      const gradient = this.ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      gradient.addColorStop(0, orb.color);
      gradient.addColorStop(1, 'rgba(255,255,255,0)'); // Fade to white transparent

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================
// 5. GSAP ScrollTrigger Reveals
// ==========================================
// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize all reveals on the page
function initScrollReveals() {
  // Grab all elements labeled '.gs-reveal'
  const revealElements = document.querySelectorAll('.gs-reveal');

  revealElements.forEach((el) => {
    // Check for explicit delays encoded as classes (e.g. gs-delay-1)
    let delayVal = 0;
    if (el.classList.contains('gs-delay-1')) delayVal = 0.15;
    if (el.classList.contains('gs-delay-2')) delayVal = 0.3;
    if (el.classList.contains('gs-delay-3')) delayVal = 0.45;

    gsap.fromTo(el,
      {
        y: 60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Triggers when top of element hits 85% of viewport
          toggleActions: "play none none reverse",
          once: true // Only play once for better UX
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delayVal,
        ease: "power3.out"
      }
    );
  });
}

// ==========================================
// 6. Hero 3D Animation (Three.js Fallback)
// ==========================================
function initHero3D() {
  const container = document.getElementById('hero-3d-wrapper');
  if (!container || !window.THREE) return;

  const scene = new THREE.Scene();
  // Add some fog for depth
  scene.fog = new THREE.FogExp2(0xffffff, 0.002);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Geometry: complex TorusKnot
  const geometry = new THREE.TorusKnotGeometry(1.5, 0.6, 200, 32);

  // Material: wireframe with primary color
  const material = new THREE.MeshBasicMaterial({
    color: 0x0066FF,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Mouse interactivity
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  // Animation Loop with deformation
  const clock = new THREE.Clock();

  function animate3D() {
    requestAnimationFrame(animate3D);
    const time = clock.getElapsedTime();

    // Smooth mouse follow
    targetX = mouseX * .001;
    targetY = mouseY * .001;

    mesh.rotation.x += 0.002;
    mesh.rotation.y += 0.005;

    // Tilt based on mouse
    mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
    mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);

    // Ripple deformation on vertices 
    // Requires position attribute manipulation
    const positions = geometry.attributes.position;
    const initialPositions = geometry.attributes.position.clone();

    for (let i = 0; i < positions.count; i++) {
      const vX = initialPositions.getX(i);
      const vY = initialPositions.getY(i);
      const vZ = initialPositions.getZ(i);

      const offset = Math.sin(vX * 2 + time * 3) * Math.cos(vY * 2 + time * 2) * 0.1;
      positions.setXYZ(i, vX + offset, vY + offset, vZ + offset);
    }
    positions.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate3D();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ==========================================
// 7. Interactive Bento Grid Graphics
// ==========================================
function initBentoGraphics() {
  const mapContainer = document.getElementById('bento-map');
  const chartContainer = document.getElementById('bento-chart');

  // SVG Glow Map
  if (mapContainer) {
    mapContainer.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M50 150 Q 150 50 300 120 T 350 250" stroke="rgba(0,102,255,0.1)" stroke-width="2" fill="none"/>
        <path d="M100 200 Q 200 100 350 180" stroke="rgba(0,229,255,0.1)" stroke-width="2" fill="none"/>
        <!-- Pulses -->
        <circle cx="150" cy="120" r="4" fill="#0066FF" class="pulse-dot" />
        <circle cx="280" cy="180" r="3" fill="#00E5FF" class="pulse-dot" style="animation-delay: 1s"/>
        <circle cx="200" cy="80"  r="5" fill="#0066FF" class="pulse-dot" style="animation-delay: 2s"/>
        <circle cx="320" cy="140" r="4" fill="#00E5FF" class="pulse-dot" style="animation-delay: 0.5s"/>
      </svg>
    `;

    // Add CSS for pulse
    const style = document.createElement('style');
    style.innerHTML = `
      .pulse-dot {
        animation: pulseMap 3s infinite;
        transform-origin: center;
        box-shadow: 0 0 20px currentColor; /* Doesn't work well on SVG directly, using drop-shadow filter below if needed */
      }
      @keyframes pulseMap {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(3); opacity: 0; }
        100% { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // Broken Screen SVG
  const brokenContainer = document.querySelector('.broken-screen-visual');
  if (brokenContainer) {
    brokenContainer.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <path d="M150 50 L140 120 L180 160 L130 220 L150 280" stroke="rgba(0,229,255,0.3)" stroke-width="2" stroke-linecap="round"/>
        <path d="M140 120 L80 140" stroke="rgba(0,229,255,0.2)" stroke-width="1.5"/>
        <path d="M180 160 L240 180" stroke="rgba(0,229,255,0.2)" stroke-width="1.5"/>
      </svg>
    `;
  }

  // Animated Area Chart
  if (chartContainer) {
    chartContainer.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(0,102,255,0.2)" />
            <stop offset="100%" stop-color="rgba(0,102,255,0.0)" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#0066FF" />
            <stop offset="100%" stop-color="#00E5FF" />
          </linearGradient>
        </defs>
        
        <!-- Curved Area -->
        <path id="chart-area" d="M0 300 L0 250 Q 200 280 400 150 T 800 50 L1000 20 L1000 300 Z" fill="url(#chartGrad)" opacity="0"/>
        <!-- Curved Line -->
        <path id="chart-line" d="M0 250 Q 200 280 400 150 T 800 50 L1000 20" fill="none" stroke="url(#lineGrad)" stroke-width="4" stroke-dasharray="1500" stroke-dashoffset="1500"/>
      </svg>
    `;

    // GSAP ScrollTrigger for Chart Draw
    gsap.to('#chart-line', {
      scrollTrigger: {
        trigger: '#bento-chart',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 1, // Draw as user scrolls
      },
      strokeDashoffset: 0,
    });

    gsap.to('#chart-area', {
      scrollTrigger: {
        trigger: '#bento-chart',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 1,
    });
  }
}

// ==========================================
// 8. Hardware Exploded View (Scroll Scrub)
// ==========================================
function initHardwareExplodedView() {
  const hardwareSection = document.getElementById('hardware');
  const layers = document.querySelectorAll('.device-layer');

  if (!hardwareSection || layers.length === 0) return;

  // We want to "scrub" the animation so it follows the scrollbar
  gsap.to(layers, {
    scrollTrigger: {
      trigger: '.hardware-showcase',
      start: 'top 70%',   // Start animating when the showcase enters frame
      end: 'bottom 40%',  // End when it's near the top
      scrub: 1,           // 1 second lag for smooth scrubbing
    },
    // The stagger function allows us to spread them apart based on their index
    y: (i) => (i - 1) * 120,    // -120px for top, 0 for middle, +120px for bottom
    rotateX: (i) => 60 + (i - 1) * 10, // Slight tilt variation 
    ease: 'none',
  });

  // Animate the opacity of the layers so they aren't fully visible until we scroll to them
  gsap.fromTo(layers,
    { opacity: 0.3 },
    {
      scrollTrigger: {
        trigger: '.hardware-showcase',
        start: 'top 80%',
        end: 'center center',
        scrub: true,
      },
      opacity: 1,
      stagger: 0.1
    }
  );
}

// ==========================================
// 9. Mobile Navigation
// ==========================================
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navbar) return;

  // Toggle menu open/close
  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('nav-mobile-active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-mobile-active');
    });
  });
}

// ==========================================
// 10. FAQ Accordion
// ==========================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        const ans = faq.querySelector('.faq-answer');
        gsap.to(ans, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out' });
        faq.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        gsap.set(answer, { height: 'auto' });
        const height = answer.offsetHeight;
        gsap.fromTo(answer, { height: 0, opacity: 0 }, { height, opacity: 1, duration: 0.4, ease: 'power2.out' });
        item.querySelector('.faq-icon').style.transform = 'rotate(45deg)';
      }
    });
  });
}

// Ensure DOM is ready + specific delay to let initial Hero load smoothly
document.addEventListener('DOMContentLoaded', () => {
  new AuraBackground('aura-canvas');
  initHero3D(); // Init ThreeJS fallback
  initBentoGraphics(); // Init SVG generated graphics
  initHardwareExplodedView(); // Init hardware scrub
  initMobileNav(); // Init mobile toggles if applicable
  initFAQ(); // Init FAQ accordion

  // Slight delay for GSAP reveals to prevent blocking initial paints
  setTimeout(() => {
    initScrollReveals();
  }, 100);
});
