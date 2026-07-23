(function () {
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');

  // Nav background on scroll
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function closeMenu() {
    links.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close after choosing a category (or an action button)
    Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
      a.addEventListener('click', closeMenu);
    });

    // Close when tapping anywhere outside the menu
    document.addEventListener('click', function (e) {
      if (!links.classList.contains('open')) return;
      if (!links.contains(e.target) && e.target !== burger && !burger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) closeMenu();
    });

    // Reset when resizing back up to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080) closeMenu();
    });
  }

  // Reveal on scroll
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  // Certificate lightbox
  var lb = document.getElementById('lb');
  if (lb) {
    var lbImg = document.getElementById('lbImg');
    var lbCap = document.getElementById('lbCap');
    var lbOpen = document.getElementById('lbOpen');
    var tabCert = document.getElementById('tabCert');
    var tabBadge = document.getElementById('tabBadge');
    var current = { cert: null, badge: null };

    function show(which) {
      var src = which === 'badge' ? current.badge : current.cert;
      if (!src) return;
      lbImg.src = src;
      lbOpen.href = src;
      if (tabCert) tabCert.classList.toggle('on', which === 'cert');
      if (tabBadge) tabBadge.classList.toggle('on', which === 'badge');
    }
    function open(cert, badge, title) {
      current.cert = cert; current.badge = badge;
      lbCap.textContent = title || '';
      if (tabBadge) tabBadge.hidden = !badge;
      if (tabCert) tabCert.hidden = !cert;
      show(cert ? 'cert' : 'badge');
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.hidden = true;
      lbImg.src = '';
      document.body.style.overflow = '';
    }

    // Wire cert cards
    Array.prototype.forEach.call(document.querySelectorAll('.certc'), function (card) {
      var cert = card.getAttribute('data-cert');
      var badge = card.getAttribute('data-badge');
      var title = card.getAttribute('data-title');
      var nameBtn = card.querySelector('.cc-name');
      var viewBtn = card.querySelector('.view-cert');
      var badgeBtn = card.querySelector('.view-badge');
      function openCert() { open(cert, badge, title); }
      if (nameBtn) {
        nameBtn.addEventListener('click', openCert);
        nameBtn.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCert(); }
        });
      }
      if (viewBtn) viewBtn.addEventListener('click', openCert);
      if (badgeBtn) badgeBtn.addEventListener('click', function () { open(cert, badge, title); show('badge'); });
    });

    if (tabCert) tabCert.addEventListener('click', function () { show('cert'); });
    if (tabBadge) tabBadge.addEventListener('click', function () { show('badge'); });
    document.getElementById('lbClose').addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
  }
})();
