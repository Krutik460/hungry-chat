// Cursor
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: 'cubic-bezier(0.23, 1, 0.320, 1)',
  duration: 0.5,
});

// HungryChat Logo
Shery.makeMagnet('.magnet');

// Features Scroll
gsap.to('.text', {
  scrollTrigger: {
    trigger: '#f-content',
    pin: true,
    start: 'top top',
    end: 'bottom bottom',
    endTrigger: '.f-last',
    scrub: 1,
  },
  y: '-200%',
  ease: Power1,
});
