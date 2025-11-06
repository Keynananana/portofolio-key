const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const buttons = document.querySelectorAll('.btn');

function showPage(targetId) {
  pages.forEach(page => {
    if (page.id === targetId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });
}

// Navigasi dari menu atas
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.target);
  });
});

// Navigasi dari tombol di halaman
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    showPage(btn.dataset.target);
  });
});