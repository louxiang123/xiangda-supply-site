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
  var body = [
    'Name: ' + data.name,
    'Company: ' + (data.company || 'N/A'),
    'Email: ' + data.email,
    'WhatsApp: ' + (data.whatsapp || 'N/A'),
    'Category: ' + data.category,
    'Quantity: ' + (data.quantity || 'N/A'),
    'Target Price: ' + (data.budget || 'N/A'),
    'Requirements: ' + (data.message || 'N/A'),
    '---',
    'Submitted via xiangdasupply.com'
  ].join('\n');

  var btn = form.querySelector('.btn-submit');
  var orig = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(function() {
    btn.textContent = 'Sent! We will reply within 24h';
    btn.style.background = '#059669';
    btn.style.pointerEvents = 'none';
    window.location.href = 'mailto:YOUR_EMAIL@example.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setTimeout(function() {
      form.reset();
      btn.textContent = orig;
      btn.style.background = '';
      btn.disabled = false;
      btn.style.pointerEvents = '';
    }, 4000);
  }, 800);
}
