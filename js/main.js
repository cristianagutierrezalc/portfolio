// ═══════════════════════════════════════════
// Portfolio · Cristian Gutiérrez
// Interacciones: menú móvil, rol rotativo,
// animaciones al hacer scroll y año dinámico.
// ═══════════════════════════════════════════

// Marca que JS está activo (para animaciones reveal)
document.documentElement.classList.add('js');

// ── Menú móvil ──
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');

if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cierra el menú al navegar a una sección
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// ── Rol rotativo en el hero ──
const roles = ['Desarrollo web', 'Backend y APIs', 'Bases de datos', 'UX / UI'];
const roleEl = document.getElementById('rotatingRole');

if (roleEl) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    let i = 0;
    setInterval(() => {
      roleEl.style.opacity = '0';
      roleEl.style.transition = 'opacity .25s';
      setTimeout(() => {
        i = (i + 1) % roles.length;
        roleEl.textContent = roles[i];
        roleEl.style.opacity = '1';
      }, 250);
    }, 2600);
  }
}

// ── Reveal al hacer scroll ──
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: mostrar todo
  revealEls.forEach((el) => el.classList.add('visible'));
}

// ── Año dinámico en el footer ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
