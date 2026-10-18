/* Xiangda Supply Chain - Home motion module (vanilla JS, no deps) */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var desktop = window.matchMedia('(min-width: 1024px)');

  /* ---------- scroll: progress hairline, header seam, process fill ---------- */
  var header = document.getElementById('header');
  var bar = document.getElementById('progress');
  var processRail = document.getElementById('processRail');
  var processFill = document.getElementById('processFill');
  var floatCta = document.getElementById('floatCta');
  var contactSection = document.getElementById('contact');
  var steps = Array.prototype.slice.call(document.querySelectorAll('.p-step'));
  var ticking = false;

  function isVerticalProcess() { return !desktop.matches; }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? doc.scrollTop / max : 0) + ')';
      if (header) header.classList.toggle('scrolled', doc.scrollTop > 24);
      if (floatCta && contactSection) {
        var past = doc.scrollTop > window.innerHeight * 0.6;
        var cr = contactSection.getBoundingClientRect();
        var near = cr.top < window.innerHeight * 0.8 && cr.bottom > 0;
        floatCta.classList.toggle('show', past && !near);
      }
      if (!processRail || !processFill) return;
      if (reduced) {
        processFill.style.transform = isVerticalProcess() ? 'scaleY(1)' : 'scaleX(1)';
        steps.forEach(function (s) { s.classList.add('on'); });
        return;
      }
      var r = processRail.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (vh * 0.4)));
      processFill.style.transform = isVerticalProcess() ? 'scaleY(' + p + ')' : 'scaleX(' + p + ')';
      steps.forEach(function (s, i) {
        s.classList.toggle('on', p >= (i + 0.5) / 5);
      });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- stagger indexes for reveal groups ---------- */
  document.querySelectorAll('.reveal-group').forEach(function (g) {
    Array.prototype.forEach.call(g.querySelectorAll(':scope > .reveal'), function (ch, i) {
      ch.style.setProperty('--i', String(i));
    });
  });

  /* ---------- reveal on scroll (once) ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- count-up on first view ---------- */
  var fmt = new Intl.NumberFormat('en-US');
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var t0 = null;
    var dur = 1400;
    function frame(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt.format(Math.round(target * e));
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }
  var nums = Array.prototype.slice.call(document.querySelectorAll('.num[data-count]'));
  if ('IntersectionObserver' in window && !reduced) {
    var ioNum = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countUp(en.target);
        ioNum.unobserve(en.target);
      });
    }, { threshold: 0.4 });
    nums.forEach(function (el) { ioNum.observe(el); });
  }

  /* ---------- hero load staging (4 beats, 120ms apart) ---------- */
  var stages = Array.prototype.slice.call(document.querySelectorAll('.hero-stage'));
  if (reduced) {
    stages.forEach(function (s) { s.classList.add('in'); });
  } else {
    stages.forEach(function (s) {
      var i = parseInt(s.getAttribute('data-i') || '0', 10);
      window.setTimeout(function () { s.classList.add('in'); }, 80 + i * 120);
    });
  }

  /* ---------- card 3D tilt (fine pointer + desktop only) ---------- */
  var MAX_TILT = 4;
  document.querySelectorAll('.tilt').forEach(function (el) {
    if (reduced || !fine) return;
    el.addEventListener('pointermove', function (e) {
      if (!desktop.matches || e.pointerType === 'touch') return;
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--rx', (-py * MAX_TILT).toFixed(2) + 'deg');
      el.style.setProperty('--ry', (px * MAX_TILT).toFixed(2) + 'deg');
      el.classList.add('tilting');
    });
    function rest() {
      el.classList.remove('tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    }
    el.addEventListener('pointerleave', rest);
    el.addEventListener('pointercancel', rest);
  });

  /* keyboard activation for role="link" category cards */
  document.querySelectorAll('[role="link"][tabindex="0"]').forEach(function (el) {
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });

  /* category cards: pre-fill the form category, then scroll to the inquiry panel */
  var catSelect = document.getElementById('category');
  document.querySelectorAll('.cat-card[data-cat]').forEach(function (card) {
    card.addEventListener('click', function () {
      if (catSelect) catSelect.value = card.getAttribute('data-cat');
      if (contactSection) contactSection.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ---------- hero pointer parallax (fine pointer + desktop only) ---------- */
  var hero = document.querySelector('.hero');
  var heroPar = document.getElementById('heroPar');
  var mesh = document.querySelector('.hero .mesh');
  if (hero && heroPar && !reduced && fine) {
    hero.addEventListener('pointermove', function (e) {
      if (!desktop.matches || e.pointerType === 'touch') return;
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      heroPar.style.transform = 'translate(' + (x * 12).toFixed(1) + 'px,' + (y * 12).toFixed(1) + 'px)';
      if (mesh) mesh.style.transform = 'translate(' + (x * -40).toFixed(1) + 'px,' + (y * -40).toFixed(1) + 'px)';
    });
    hero.addEventListener('pointerleave', function () {
      heroPar.style.transform = '';
      if (mesh) mesh.style.transform = '';
    });
  }

  /* ---------- region marquee: off-screen pause + manual control ---------- */
  var railWrap = document.getElementById('railWrap');
  var railBtn = document.getElementById('railPause');
  var userPaused = false;
  var railInView = true;
  function syncRail() {
    if (!railWrap) return;
    railWrap.classList.toggle('paused', userPaused || !railInView);
  }
  if (railWrap && 'IntersectionObserver' in window) {
    var ioRail = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { railInView = en.isIntersecting; syncRail(); });
    }, { threshold: 0.05 });
    ioRail.observe(railWrap);
  }
  if (railBtn && railWrap) {
    if (reduced) railBtn.style.display = 'none';
    else {
      railBtn.addEventListener('click', function () {
        userPaused = !userPaused;
        railBtn.setAttribute('aria-pressed', String(userPaused));
        var icPause = railBtn.querySelector('.ic-pause');
        var icPlay = railBtn.querySelector('.ic-play');
        if (icPause) icPause.style.display = userPaused ? 'none' : '';
        if (icPlay) icPlay.style.display = userPaused ? '' : 'none';
        syncRail();
      });
    }
  }
})();
