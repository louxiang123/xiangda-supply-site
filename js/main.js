/* Xiangda Supply Chain - Main JS */

/* Auto-reply that FormSubmit sends to the buyer once a request is accepted. */
var AUTORESPONSE = 'Thank you for your sourcing request. We have received it and a sourcing specialist will reply within 24 hours (Monday to Saturday, GMT+8). If you already have product photos, a reference link, target quantity or a sample deadline, simply reply to this email and we will add it to your brief. - Xiangda Supply Chain, Jinhua, Zhejiang, China';

/* Forward conversion events to js/analytics.js (no-op while GA is disabled). */
function analyticsTrack(name, params) {
  if (typeof window.XiangdaTrack === 'function') {
    window.XiangdaTrack(name, params);
  }
}

function toggleMenu() {
  var nav = document.getElementById('nav');
  nav.classList.toggle('open');
  document.body.classList.toggle('nav-open', nav.classList.contains('open'));
}

function closeMenu() {
  document.getElementById('nav').classList.remove('open');
  document.body.classList.remove('nav-open');
}

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('#nav a');
  links.forEach(function(l) {
    l.addEventListener('click', function() {
      closeMenu();
    });
  });

  var backdrop = document.querySelector('.nav-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', function() {
      closeMenu();
    });
  }

  /* Category prefill: /?cat=drinkware#contact - query string before the hash. */
  (function () {
    var m = /[?&]cat=([a-z]+)/.exec(window.location.search);
    if (!m) { return; }
    var sel = document.getElementById('category');
    if (!sel) { return; }
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === m[1]) { sel.value = m[1]; break; }
    }
  })();

  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

function handleSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var data = {
    name: form.querySelector('#name').value,
    company: form.querySelector('#company').value,
    email: form.querySelector('#email').value,
    whatsapp: form.querySelector('#whatsapp').value,
    category: form.querySelector('#category').value,
    quantity: form.querySelector('#quantity').value,
    budget: form.querySelector('#budget').value,
    message: form.querySelector('#message').value,
    reflink: form.querySelector('#reflink').value
  };

  var subject = 'Sourcing Request: ' + data.category + ' - ' + (data.company || data.name);
  var payload = Object.assign({}, data, {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _autoresponse: AUTORESPONSE
  });

  var btn = form.querySelector('.btn-submit');
  var orig = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  fetch('https://formsubmit.co/ajax/xianglou1@outlook.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (res) { return res.json(); })
    .then(function (out) {
      if (!out || (out.success !== 'true' && out.success !== true)) {
        throw new Error('submit failed');
      }
      analyticsTrack('form_submit', { category: data.category, has_company: data.company ? 'yes' : 'no' });
      form.reset();
      btn.textContent = 'Sent! We will reply within 24h';
      btn.style.background = '#059669';
      btn.style.pointerEvents = 'none';
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.pointerEvents = '';
        btn.disabled = false;
      }, 6000);
    })
    .catch(function () {
      analyticsTrack('form_error', { category: data.category, reason: 'rejected_or_network' });
      btn.textContent = 'Send failed - please try again';
      btn.style.background = '#dc2626';
      btn.disabled = false;
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
      }, 6000);
    });
}
