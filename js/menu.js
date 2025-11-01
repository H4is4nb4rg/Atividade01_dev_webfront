// MENU HAMBURGUER
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

// SUBMENU MOBILE
document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', e => {
    const viewport = window.innerWidth;
    if (viewport <= 768) {
      e.preventDefault();
      const parent = link.parentElement;
      const submenu = parent.querySelector('.submenu');
      parent.classList.toggle('submenu-open');
      if (submenu) submenu.classList.toggle('active');
    }
  });
});

// FORMULÁRIO: validação visual
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    if (!this.checkValidity()) {
      e.preventDefault();
      let err = this.querySelector('.form-error');
      if (!err) {
        err = document.createElement('div');
        err.className = 'form-error';
        err.textContent = 'Por favor, corrija os campos antes de enviar.';
        this.prepend(err);
      }
      err.classList.add('show');
    }
  });
});

// MODAL SIMPLES
function openModal() {
  document.getElementById('modal').classList.add('active');
}
function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

document.querySelectorAll('.modal .close').forEach(btn =>
  btn.addEventListener('click', closeModal)
);

document.getElementById('modal')?.addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});

