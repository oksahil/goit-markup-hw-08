(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.mob-btn-close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
