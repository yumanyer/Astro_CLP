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

// ============ SOPORTE MOBILE: Core Team Cards ============
// function initTeamCardsMobile(): void {
//   const cards = document.querySelectorAll<HTMLElement>('.team-card');

//   cards.forEach((card) => {
//     card.addEventListener('click', function (this: HTMLElement, e: MouseEvent) {
//       if ((e.target as HTMLElement).closest('.team-socials a')) return;

//       const isActive = this.classList.contains('active');

//       cards.forEach((c) => c.classList.remove('active'));

//       if (!isActive) {
//         this.classList.add('active');
//       }
//     });

//     card.addEventListener('keydown', function (this: HTMLElement, e: KeyboardEvent) {
//       if (e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         this.click();
//       }
//     });
//   });

//   document.addEventListener('click', (e: MouseEvent) => {
//     if (!(e.target as HTMLElement).closest('.team-card')) {
//       cards.forEach((c) => c.classList.remove('active'));
//     }
//   });
// }