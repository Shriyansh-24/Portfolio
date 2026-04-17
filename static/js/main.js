/**
 * main.js — Global JavaScript for Shriyansh Pattanayak's portfolio
 * Handles: mobile menu, scroll-triggered fade-ins, live clock
 */

// ============================================================
// 1. MOBILE MENU TOGGLE
// ============================================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const iconOpen      = document.getElementById('icon-open');
const iconClose     = document.getElementById('icon-close');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', isOpen);
        iconOpen.classList.toggle('hidden', !isOpen);
        iconClose.classList.toggle('hidden', isOpen);
    });
}

// ============================================================
// 2. INTERSECTION OBSERVER — fade-in elements on scroll
//    Any element with class "fade-in" animates into view
// ============================================================
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, stop observing to save resources
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el) => observer.observe(el));

// ============================================================
// 3. LIVE CLOCK — displayed in the hero section
//    Renders local time in HH:MM:SS format
// ============================================================
function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;  // Only runs on pages with the clock element

    const now  = new Date();
    const hh   = String(now.getHours()).padStart(2, '0');
    const mm   = String(now.getMinutes()).padStart(2, '0');
    const ss   = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hh}:${mm}:${ss}`;
}

// Update immediately + every second
updateClock();
setInterval(updateClock, 1000);

// ============================================================
// 4. HERO TEXT STAGGER — assigns animation delays to words
//    The hero h1 splits words and staggers their entrance
// ============================================================
function staggerHeroWords() {
    const hero = document.querySelector('.hero-stagger');
    if (!hero) return;

    // Split inner text into individual word spans
    const words = hero.innerText.split(' ');
    hero.innerHTML = words
        .map((w, i) => `<span class="hero-word" style="animation-delay:${i * 0.08}s">${w}</span>`)
        .join(' ');
}

staggerHeroWords();

// ============================================================
// 5. CREDENTIAL CARDS — expandable certification proof section
//    Uses data-credential-link from HTML
// ============================================================
function initCredentialCards() {
    const cards = document.querySelectorAll('.credential-card');
    if (!cards.length) return;

    cards.forEach((card) => {
        const toggle = card.querySelector('.credential-toggle');
        const panel = card.querySelector('.credential-panel');
        const linkEl = card.querySelector('.credential-link');

        if (!toggle || !panel || !linkEl) return;

        const credentialLink = (card.dataset.credentialLink || '').trim();

        if (credentialLink) {
            linkEl.href = credentialLink;
            linkEl.textContent = 'View credential';
            linkEl.setAttribute('aria-disabled', 'false');
            linkEl.removeAttribute('tabindex');
        } else {
            linkEl.href = '#';
            linkEl.setAttribute('aria-disabled', 'true');
            linkEl.setAttribute('tabindex', '-1');
        }

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            panel.hidden = expanded;
        });
    });
}

initCredentialCards();
