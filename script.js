function animateNumber(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + (end === 3 || end === 20 ? '+' : '');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  const stats = [
    { selector: '.stat-block:nth-child(1) .stat-num', end: 3 },
    { selector: '.stat-block:nth-child(2) .stat-num', end: 20 },
    // Add more if needed
  ];

  stats.forEach(stat => {
    const element = document.querySelector(stat.selector);
    if (element) {
      animateNumber(element, 0, stat.end, 1000); // 1000ms duration - faster
    }
  });
});
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.style.animation = 'fadeSlideUp 1s ease forwards';
  }
});
