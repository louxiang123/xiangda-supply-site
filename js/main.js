/* Xiangda Supply Chain - Main JS */

function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('#nav a');
  links.forEach(function(l) {
    l.addEventListener('click', function() {
      document.getElementById('nav').classList.remove('open');
    });
  });

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
    message: form.querySelector('#message').value
  };

  var subject = 'Sourcing Request: ' + data.category + ' - ' + (data.company || data.name);
  var payload = Object.assign({}, data, {
    _subject: subject,
    _template: 'table',
    _captcha: 'false'
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
      btn.textContent = 'Send failed - please try again';
      btn.style.background = '#dc2626';
      btn.disabled = false;
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
      }, 6000);
    });
}
