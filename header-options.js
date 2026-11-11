/* Header-only JavaScript for option 03 / 05: submenu toggle buttons. */
(function () {
  'use strict';
  const header = document.querySelector('.atx3-header, .atx5-header');
  if (!header) return;
  const toggles = Array.from(header.querySelectorAll('.atx-drop-btn'));
  function closeDropdowns(except) {
    toggles.forEach(function (button) {
      if (button === except) return;
      button.setAttribute('aria-expanded', 'false');
      button.closest('.atx-dropdown').classList.remove('is-expanded');
    });
  }
  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      closeDropdowns(button);
      button.setAttribute('aria-expanded', String(shouldOpen));
      button.closest('.atx-dropdown').classList.toggle('is-expanded', shouldOpen);
    });
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.atx-dropdown')) closeDropdowns();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeDropdowns();
  });
  window.addEventListener('resize', closeDropdowns);
})();
