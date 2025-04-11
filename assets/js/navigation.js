// Navigation JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenuOverlay && mobileMenuClose) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuOverlay.style.display = 'flex';
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenuOverlay.style.display = 'none';
    });
  }
});