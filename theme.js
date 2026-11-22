(() => {
  let savedTheme;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error);
  }

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#121b19' : '#f7f6f1');
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  };

  applyTheme(savedTheme === 'light' ? 'light' : 'dark');

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.hidden = false;
    applyTheme(document.documentElement.dataset.theme);
    toggle.addEventListener('click', () => {
      savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme);
      try {
        localStorage.setItem('theme', savedTheme);
      } catch (error) {
        console.warn('Unable to save the theme preference.', error);
      }
    });
  });
})();
