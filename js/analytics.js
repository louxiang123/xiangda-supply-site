/* Xiangda Supply Chain - GA4 analytics + conversion events
 * ---------------------------------------------------------------------------
 * SETUP (2 minutes): put your GA4 Measurement ID between the quotes below,
 * e.g. GA_ID = 'G-ABCDE12345'. Nothing else needs to change.
 *
 * While GA_ID is empty this file is a complete no-op: it injects no script,
 * sends no request, writes nothing to the console. It only exposes an empty
 * window.XiangdaTrack() so callers (js/main.js) never throw.
 *
 * EVENT NAMES ARE FIXED - do not rename, do not add:
 *   cta_click       any call-to-action click          section, cta_text, target, product?
 *   category_select category card / form dropdown     category, source
 *   form_start      first interaction with the form   form_id        (once per page)
 *   form_submit     inquiry accepted by FormSubmit    category, has_company
 *   form_error      inquiry send failed               category, reason
 *   scroll_75       75% of page height scrolled       (once per page)
 * ------------------------------------------------------------------------- */

var GA_ID = 'G-R701L3ZCQT';

(function () {
  'use strict';

  /* Callable on every page, even with analytics disabled. */
  window.XiangdaTrack = function () {};

  /* Silent exit: no script, no request, no console output. */
  if (!GA_ID || !/^G-[A-Z0-9]{4,}$/.test(GA_ID)) return;

  var doc = document;

  /* ---- gtag bootstrap (the only external request this file makes) ---- */
  window.dataLayer = window.dataLayer || [];
  var dataLayer = window.dataLayer;
  window.gtag = function () { dataLayer.push(arguments); };

  var loader = doc.createElement('script');
  loader.async = true;
  loader.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  (doc.head || doc.documentElement).appendChild(loader);

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true, transport_type: 'beacon' });

  /* ---- helpers ---- */
  function track(name, params) {
    var payload = {};
    var key;
    if (params) {
      for (key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key) &&
            params[key] !== '' && params[key] !== null && params[key] !== undefined) {
          payload[key] = params[key];
        }
      }
    }
    try { window.gtag('event', name, payload); } catch (err) { /* never break the page */ }
  }
  window.XiangdaTrack = track;

  function each(selector, fn) {
    var nodes = doc.querySelectorAll(selector);
    Array.prototype.forEach.call(nodes, fn);
  }

  function closest(node, selector) {
    var cur = node;
    while (cur && cur.nodeType === 1) {
      if (cur.matches ? cur.matches(selector) : (cur.msMatchesSelector && cur.msMatchesSelector(selector))) {
        return cur;
      }
      cur = cur.parentNode;
    }
    return null;
  }

  function clip(value, max) {
    var text = value === null || value === undefined ? '' : String(value);
    text = text.replace(/\s+/g, ' ').replace(/^ | $/g, '');
    return text.length > max ? text.slice(0, max) : text;
  }

  function sectionOf(node) {
    var section = closest(node, 'section[id]');
    if (section) return section.id;
    if (closest(node, 'header')) return 'header';
    if (closest(node, 'footer')) return 'footer';
    if (closest(node, '.prod-card')) return 'product_card';
    return 'page';
  }

  function hrefOf(node) {
    var href = node.getAttribute('href') || '';
    var origin = location.origin || '';
    if (origin && href.indexOf(origin) === 0) href = href.slice(origin.length);
    return clip(href, 80);
  }

  /* ---- cta_click ---- */
  each('.nav-cta, .header-cta, .btn, .btn-sm, .b-cta, .float-cta', function (node) {
    if (node.getAttribute('data-xd-bound') === '1') return;
    node.setAttribute('data-xd-bound', '1');
    node.addEventListener('click', function () {
      var params = {
        section: sectionOf(node),
        cta_text: clip(node.textContent, 60),
        target: hrefOf(node)
      };
      var card = closest(node, '.prod-card');
      if (card) {
        var heading = card.querySelector('h3');
        if (heading) params.product = clip(heading.textContent, 60);
      }
      track('cta_click', params);
    });
  });

  /* ---- category_select: homepage cards + form dropdown ---- */
  each('[data-cat]', function (node) {
    node.addEventListener('click', function () {
      track('category_select', { category: node.getAttribute('data-cat'), source: 'card' });
    });
  });

  var categorySelect = doc.getElementById('category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      if (categorySelect.value) {
        track('category_select', { category: categorySelect.value, source: 'form_select' });
      }
    });
  }

  /* ---- form_start: first interaction anywhere in the inquiry form ---- */
  var formStarted = false;
  each('form', function (form) {
    var fire = function () {
      if (formStarted) return;
      formStarted = true;
      track('form_start', { form_id: form.getAttribute('id') || 'inquiry_form' });
    };
    form.addEventListener('focusin', fire);
    form.addEventListener('input', fire);
    form.addEventListener('change', fire);
  });

  /* ---- scroll_75: once per page, real scroll only ----
   * Listened on window (viewport scroll) and on document in the capture phase,
   * because a scroll that happens on the html element itself does not bubble. */
  var scrolledDeep = false;
  function onScroll() {
    if (scrolledDeep) return;
    var root = doc.documentElement;
    var max = (root.scrollHeight || 0) - window.innerHeight;
    if (max <= 0) return;
    var top = window.pageYOffset || root.scrollTop || 0;
    if (top / max >= 0.75) {
      scrolledDeep = true;
      window.removeEventListener('scroll', onScroll);
      doc.removeEventListener('scroll', onScroll, true);
      track('scroll_75');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  doc.addEventListener('scroll', onScroll, true);
})();
