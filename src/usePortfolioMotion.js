import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioMotion() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const opening = document.querySelector('.opening');
      const atHome = (!location.hash || location.hash === '#home') && window.scrollY < 100;
      if (atHome) {
        gsap.set(opening, { display: 'flex' });
        gsap.timeline({ defaults: { ease: 'power4.inOut' } })
          .fromTo('.opening-name span', { yPercent: 120, scaleX: .7 }, { yPercent: 0, scaleX: 1, duration: 1.1, stagger: .12 })
          .fromTo('.opening-rule', { scaleX: 0 }, { scaleX: 1, duration: 1.2 }, .2)
          .to('.opening-name span', { yPercent: -130, duration: .8, stagger: .08 }, 1.25)
          .to(opening, { clipPath: 'inset(0 0 100% 0)', duration: 1.5, onComplete: () => gsap.set(opening, { display: 'none' }) }, 1.5)
          .fromTo('.photo-stream', { scale: 1.2, opacity: .1 }, { scale: 1, opacity: .65, duration: 2.2 }, 1.6)
          .fromTo('.hero-title-line > span', { yPercent: 125, scaleX: .72, rotate: 5 }, { yPercent: 0, scaleX: 1, rotate: 0, duration: 1.8, stagger: .2, ease: 'expo.out', clearProps: 'transform' }, 2)
          .from('.header > *, .hero-content > .eyebrow, .hero-bottom, .hero-foot', { y: 32, autoAlpha: 0, duration: 1.1, stagger: .08, ease: 'power3.out', clearProps: 'all' }, 2.6);
      }

      document.querySelectorAll('main > section:not(.hero)').forEach(section => {
        const heading = section.querySelector('.motion-display');
        const label = section.querySelector('.section-label');
        if (heading) gsap.from(heading.querySelector('span'), {
          xPercent: -22, yPercent: 115, scaleX: .78, rotate: -4,
          duration: 1.7, ease: 'expo.out', clearProps: 'transform',
          scrollTrigger: { trigger: heading, start: 'top 93%', once: true },
        });
        if (label) gsap.from(label, { scaleX: .4, transformOrigin: 'left', duration: 1.3, ease: 'power3.inOut', clearProps: 'transform', scrollTrigger: { trigger: label, start: 'top 94%', once: true } });
        const intro = section.querySelector('.section-heading, .about-grid, .contact-intro');
        if (intro) gsap.from(intro, { y: 85, duration: 1.5, ease: 'power4.out', clearProps: 'transform', scrollTrigger: { trigger: intro, start: 'top 91%', once: true } });
      });

      // Group by row so a long gallery never starts animating below the viewport.
      document.querySelectorAll('main .project-grid, main .ability-grid, main .proof-grid, main .douyin-gallery').forEach(grid => {
        const rows = new Map();
        Array.from(grid.children).forEach(card => {
          const row = card.offsetTop;
          if (!rows.has(row)) rows.set(row, []);
          rows.get(row).push(card);
        });
        rows.forEach(cards => gsap.from(cards, {
          y: 110, clipPath: 'inset(0 0 28% 0)',
          duration: 1.65, stagger: .18, ease: 'power4.out', clearProps: 'transform,clipPath',
          scrollTrigger: { trigger: cards[0], start: 'top 93%', once: true },
        }));
      });
      document.querySelectorAll('main .case-heading, main .case-metrics, main .gallery-heading, main .contact-row, main .contact h2').forEach(el => {
        gsap.from(el.children, { y: 65, duration: 1.35, stagger: .13, ease: 'power4.out', clearProps: 'transform', scrollTrigger: { trigger: el, start: 'top 93%', once: true } });
      });
      document.querySelectorAll('main .project-image, main .portrait').forEach(frame => {
        gsap.from(frame, { clipPath: 'inset(0 0 100% 0)', duration: 1.7, ease: 'power4.inOut', clearProps: 'clipPath', scrollTrigger: { trigger: frame, start: 'top 92%', once: true } });
      });
      media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
        document.querySelectorAll('main .project-image > img, main .portrait > img').forEach(img => {
          gsap.fromTo(img, { yPercent: -5, scale: 1.13 }, { yPercent: 5, scale: 1.13, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.4 } });
        });
      });
    });
    // Freeze the continuous photo stream when the hero is offscreen or the tab is hidden.
    const hero = document.querySelector('.hero');
    let visible = true;
    const update = () => hero.classList.toggle('motion-idle', !visible || document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(hero);
    document.addEventListener('visibilitychange', update);
    let disposed = false;
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    const images = [...document.querySelectorAll('main img')];
    images.forEach(img => img.addEventListener('load', refresh));
    document.fonts?.ready.then(refresh);
    return () => {
      disposed = true;
      media.revert();
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      images.forEach(img => img.removeEventListener('load', refresh));
      hero.classList.remove('motion-idle');
    };
  }, []);
}
