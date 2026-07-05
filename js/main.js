(function () {
  var burger = document.getElementById('navBurger');
  var menu = document.getElementById('mobileMenu');

  if (!burger || !menu) return;

  burger.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
