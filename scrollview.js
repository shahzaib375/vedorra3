
/* ── ScrollReveal global config ── */
const sr = ScrollReveal({
  distance: '60px',
  duration: 900,
  delay: 100,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  reset: false,
  mobile: true,
});

/* ══════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════ */
sr.reveal('.dim', {
  origin: 'left',
  distance: '80px',
  duration: 1000,
  delay: 100,
});
sr.reveal('.hero-btn', {
  origin: 'left',
  distance: '40px',
  duration: 800,
  delay: 50,
});
sr.reveal('.home_desc', {
  origin: 'left',
  distance: '60px',
  duration: 900,
  delay: 200,
});
sr.reveal('.social-proved', {
  origin: 'left',
  distance: '50px',
  duration: 900,
  delay: 300,
});
sr.reveal('.home_content .btn', {
  origin: 'left',
  distance: '50px',
  duration: 900,
  delay: 400,
});
sr.reveal('.video-wrap', {
  origin: 'right',
  distance: '80px',
  duration: 1000,
  delay: 200,
  scale: 0.95,
});
sr.reveal('.card-1', {
  origin: 'right',
  distance: '60px',
  duration: 900,
  delay: 500,
  rotate: { z: 3 },
});
sr.reveal('.card-2', {
  origin: 'right',
  distance: '60px',
  duration: 900,
  delay: 650,
  rotate: { z: -2.5 },
});

/* ══════════════════════════════════════════
   MARQUEE / STATS SECTION
══════════════════════════════════════════ */
sr.reveal('.slider-wrap', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 100,
});
sr.reveal('.stat', {
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  delay: 0,
  interval: 120,
});

/* ══════════════════════════════════════════
   SERVICES / COURSES SECTION
══════════════════════════════════════════ */
sr.reveal('#Services .adv-badge, #Services .courses-title, #Services .courses-sub', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 100,
  interval: 100,
});
sr.reveal('.course-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 800,
  delay: 0,
  interval: 100,
  scale: 0.96,
});

/* ══════════════════════════════════════════
   PORTFOLIO SECTION
══════════════════════════════════════════ */
sr.reveal('#Portfolio .pf-label, #Portfolio .pf-h, #Portfolio .pf-s', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 0,
  interval: 100,
});
sr.reveal('.big-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 900,
  delay: 200,
  scale: 0.97,
});
sr.reveal('.filters', {
  origin: 'top',
  distance: '30px',
  duration: 700,
  delay: 300,
});

/* ══════════════════════════════════════════
   PROCESS / TIMELINE SECTION
══════════════════════════════════════════ */
sr.reveal('#Process .pf-label, .proc-title', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 0,
  interval: 120,
});
/* timeline steps — alternate left/right */
sr.reveal('.tl-step:nth-child(odd) .tl-left, .tl-step:nth-child(even) .tl-right', {
  origin: 'left',
  distance: '70px',
  duration: 900,
  delay: 150,
  interval: 200,
});
sr.reveal('.tl-step:nth-child(odd) .tl-right, .tl-step:nth-child(even) .tl-left', {
  origin: 'right',
  distance: '70px',
  duration: 900,
  delay: 250,
  interval: 200,
});
sr.reveal('.tl-node', {
  origin: 'top',
  distance: '20px',
  duration: 600,
  delay: 300,
  scale: 0.5,
  interval: 200,
});

/* ══════════════════════════════════════════
   ADVANTAGE SECTION
══════════════════════════════════════════ */
sr.reveal('.advantage-section .adv-badge, .adv-title, .adv-sub', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 0,
  interval: 120,
});
sr.reveal('.adv-card-left', {
  origin: 'left',
  distance: '80px',
  duration: 900,
  delay: 200,
  scale: 0.97,
});
sr.reveal('.adv-card-right', {
  origin: 'right',
  distance: '80px',
  duration: 900,
  delay: 300,
  scale: 0.97,
});

/* ══════════════════════════════════════════
   TESTIMONIALS / SOCIAL PROOF
══════════════════════════════════════════ */
sr.reveal('.sp-section .adv-badge, .sp-title, .sp-sub', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 0,
  interval: 120,
});
sr.reveal('.sp-video-side', {
  origin: 'left',
  distance: '80px',
  duration: 1000,
  delay: 200,
  scale: 0.96,
});
sr.reveal('.sp-cards-side', {
  origin: 'right',
  distance: '80px',
  duration: 1000,
  delay: 300,
});

/* ══════════════════════════════════════════
   PRICING SECTION
══════════════════════════════════════════ */
sr.reveal('#Pricing .pr-tag, #Pricing .pr-h, #Pricing .pr-sub', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 0,
  interval: 120,
});
sr.reveal('.pr-card:nth-child(1)', {
  origin: 'left',
  distance: '70px',
  duration: 900,
  delay: 200,
  scale: 0.96,
});
sr.reveal('.pr-card.popular', {
  origin: 'bottom',
  distance: '70px',
  duration: 900,
  delay: 350,
  scale: 0.94,
});
sr.reveal('.pr-card:nth-child(3)', {
  origin: 'right',
  distance: '70px',
  duration: 900,
  delay: 200,
  scale: 0.96,
});
sr.reveal('.guarantee', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 500,
});

/* ══════════════════════════════════════════
   FAQ SECTION
══════════════════════════════════════════ */
sr.reveal('.faq-pill, .faq-heading, .faq-sub', {
  origin: 'left',
  distance: '50px',
  duration: 800,
  delay: 0,
  interval: 120,
});
sr.reveal('.faq-cta', {
  origin: 'left',
  distance: '60px',
  duration: 900,
  delay: 300,
  scale: 0.97,
});
sr.reveal('.faq-item', {
  origin: 'right',
  distance: '60px',
  duration: 800,
  delay: 0,
  interval: 100,
});

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
sr.reveal('.footer-brand', {
  origin: 'left',
  distance: '50px',
  duration: 800,
  delay: 100,
});
sr.reveal('.footer-top > div:not(.footer-brand)', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 200,
  interval: 150,
});
sr.reveal('.footer-bottom', {
  origin: 'bottom',
  distance: '30px',
  duration: 700,
  delay: 400,
});

/* ══════════════════════════════════════════
   CUSTOM CSS ANIMATIONS (no ScrollReveal)
   Add these to your style.css
══════════════════════════════════════════ */

/* Inject extra CSS for floating & pulse effects */
(function injectStyles() {
  const css = `
    /* navbar scroll effect */
    .header {
      transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease;
    }
    .header.scrolled {
      background: rgba(7, 9, 26, 0.95) !important;
      backdrop-filter: blur(20px);
      box-shadow: 0 2px 40px rgba(0,0,0,0.4);
      padding-top: 10px !important;
      padding-bottom: 10px !important;
    }

    /* stat counter pop */
    .stat {
      transition: transform 0.3s ease;
    }
    .stat:hover {
      transform: translateY(-4px);
    }

    /* course card hover lift */
    .course-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .course-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 50px rgba(108,53,222,0.25);
    }

    /* adv-card hover */
    .adv-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .adv-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(108,53,222,0.2);
    }

    /* pricing card hover */
    .pr-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .pr-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 50px rgba(108,53,222,0.25);
    }

    /* faq item hover */
    .faq-item {
      transition: border-color 0.25s, transform 0.2s ease;
    }
    .faq-item:hover {
      transform: translateX(4px);
    }

    /* button shine pulse */
    @keyframes btnPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(108,53,222,0.4); }
      50%       { box-shadow: 0 0 0 10px rgba(108,53,222,0); }
    }
    .button.btn, .pr-btn.btn-primary {
      animation: btnPulse 2.5s ease-in-out infinite;
    }

    /* section title gradient shimmer */
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .home-title {
      background: linear-gradient(90deg, #fff 30%, #a78bfa 50%, #fff 70%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }

    /* smooth scroll */
    html {
      scroll-behavior: smooth;
    }

    /* page load fade in */
    body {
      animation: pageFade 0.6s ease both;
    }
    @keyframes pageFade {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();

/* ── Navbar shrink on scroll ── */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

/* ── Counter animation for stats ── */
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target);
        const dur    = 1800;
        const step   = target / (dur / 16);
        let current  = 0;
        const timer  = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}
animateCounters();