// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

// ============ SOPORTE TÁCTIL Y TECLADO: Core Team Cards ============
function initTeamCards(): void {
  const cards = document.querySelectorAll<HTMLElement>('.team-card');
  if (cards.length === 0) return;

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  const setActive = (card: HTMLElement, active: boolean): void => {
    card.classList.toggle('active', active);
    card.setAttribute('aria-expanded', String(active));
  };

  // Click: solo en pantallas táctiles (en desktop con mouse el hover alcanza)
  if (isTouch) {
    cards.forEach((card) => {
      card.addEventListener('click', function (this: HTMLElement, e: MouseEvent) {
        if ((e.target as HTMLElement).closest('.team-socials a')) return;

        const isActive = this.classList.contains('active');

        cards.forEach((c) => setActive(c, false));

        if (!isActive) {
          setActive(this, true);
        }
      });
    });

    // Cerrar al tocar afuera
    document.addEventListener('click', (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.team-card')) {
        cards.forEach((c) => setActive(c, false));
      }
    });
  }

  // Teclado: siempre (Enter/Espacio)
  cards.forEach((card) => {
    card.addEventListener('keydown', function (this: HTMLElement, e: KeyboardEvent) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();

      const isActive = this.classList.contains('active');

      cards.forEach((c) => setActive(c, false));

      if (!isActive) {
        setActive(this, true);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initTeamCards);