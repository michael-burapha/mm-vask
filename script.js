(function () {
  var SERVICES = [
    { name: 'Hestedækkener', desc: 'Vask og imprægnering af hestedækkener i alle størrelser.', price: 'fra 110 kr', rows: [
      { name: 'Hestedækken', note: 'm. imprægnering 140 kr', price: '110 kr' },
      { name: 'Ponydækken u. imp.', price: '85 kr' },
      { name: 'Ponydækken m. imp.', price: '115 kr' },
      { name: 'Regndækken m. imp.', price: '115 kr' },
    ] },
    { name: 'Pony & udstyr', desc: 'Halse, liner, sadelunderlag og bandager.', price: 'fra 20 kr', rows: [
      { name: 'Ponyhals u. imp.', note: 'm. imp. 45 kr', price: '25 kr' },
      { name: 'Liner', price: '65 kr' },
      { name: 'Sadelunderlag', price: '30 kr' },
      { name: 'Gamacher/bandage pr. par', price: '20 kr' },
    ] },
    { name: 'Dyner & puder', desc: 'Alm. og dun — tynd, tyk og store størrelser.', price: 'fra 55 kr', rows: [
      { name: 'Dyne tynd / tyk', price: '95 / 110 kr' },
      { name: 'Dundyne', price: '155 kr' },
      { name: 'Dundyne stor 200×200', price: '265 kr' },
      { name: 'Pude tynd / tyk', price: '55 / 60 kr' },
    ] },
    { name: 'Tøj & jakker', desc: 'Vinter- og sommerjakker, dunjakker, skidragter.', price: 'fra 20 kr', rows: [
      { name: 'Jakke (vinter)', price: '80 kr' },
      { name: 'Jakke (sommer)', price: '75 kr' },
      { name: 'Dunjakke', price: '125 kr' },
      { name: 'Skidragt m. imp.', price: '220 kr' },
    ] },
    { name: 'Hunde & måtter', desc: 'Hundetæpper, senge og måtter.', price: 'fra 50 kr', rows: [
      { name: 'Hundetæpper', note: 'fra', price: '50 kr' },
      { name: 'Måtter pr. kvm', note: 'fra', price: '60 kr' },
      { name: 'Tæppe pr. kvm', price: '80 kr' },
      { name: 'Hundetæppe/seng', note: 'fra', price: '50 kr' },
    ] },
    { name: 'Special', desc: 'Vaders, motorcykeltøj og ren imprægnering.', price: 'fra 50 kr', rows: [
      { name: 'Vaders m. imp.', price: '95 kr' },
      { name: 'Motorcykeltøj j/b', price: '250 kr' },
      { name: 'Gore-Tex jakke/bukser', price: '95 kr' },
      { name: 'Kun imprægnering', note: 'fra', price: '50 kr' },
    ] },
  ];

  var PRICE_GROUPS = [
    { title: 'Hestedækkener & udstyr', rows: [
      { name: 'Hestedækken', note: 'm. imp. 140 kr', price: '110 kr' },
      { name: 'Ponydækken u. imp.', price: '85 kr' },
      { name: 'Ponydækken m. imp.', price: '115 kr' },
      { name: 'Ponyhals u. imp.', note: 'm. imp. 45 kr', price: '25 kr' },
      { name: 'Ponystalddækken', price: '65 kr' },
      { name: 'Sved-/ulddækken', price: '65 kr' },
      { name: 'Fluedækken', price: '75 kr' },
      { name: 'Regndækken m. imp.', price: '115 kr' },
      { name: 'Sadelunderlag', price: '30 kr' },
      { name: 'Gamacher/bandage pr. par', price: '20 kr' },
    ] },
    { title: 'Tøj & jakker', rows: [
      { name: 'Jakke (vinter)', price: '80 kr' },
      { name: 'Jakke (sommer)', price: '75 kr' },
      { name: 'Dunjakke', price: '125 kr' },
      { name: 'Flydedragt/thermodragt', note: 'm. imp. 150 kr', price: '120 kr' },
      { name: 'Vaders m. imp.', price: '95 kr' },
      { name: 'Gore-Tex jakke/bukser', price: '95 kr' },
      { name: 'Skjorte', price: '20 kr' },
      { name: 'Motorcykeltøj j/b', price: '250 kr' },
      { name: 'Skidragt m. imp.', price: '220 kr' },
    ] },
    { title: 'Dyner, puder & madrasser', rows: [
      { name: 'Dyne tynd/tyk', price: '95 / 110 kr' },
      { name: 'Dundyne', price: '155 kr' },
      { name: 'Dundyne stor 200×200', price: '265 kr' },
      { name: 'Pude tynd/tyk', price: '55 / 60 kr' },
      { name: 'Dunpude', price: '65 kr' },
      { name: 'Topmadras 90×200', price: '110 kr' },
      { name: 'Topmadras 140×200', price: '130 kr' },
      { name: 'Topmadras 160×200', price: '160 kr' },
      { name: 'Topmadras 180×200', price: '180 kr' },
      { name: 'Topmadras 200×200', price: '200 kr' },
    ] },
    { title: 'Hunde, måtter & øvrigt', rows: [
      { name: 'Hundetæpper', note: 'fra', price: '50 kr' },
      { name: 'Hundetæppe/seng', note: 'fra', price: '50 kr' },
      { name: 'Måtter pr. kvm', note: 'fra', price: '60 kr' },
      { name: 'Tæppe pr. kvm', price: '80 kr' },
      { name: 'Gardin pr. kg', price: '75 kr' },
      { name: 'Hynde', note: 'fra', price: '35 kr' },
      { name: 'Kun imprægnering', note: 'fra', price: '50 kr' },
    ] },
  ];

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (key) {
      if (key === 'class') node.className = attrs[key];
      else if (key === 'text') node.textContent = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) { node.appendChild(child); });
    return node;
  }

  function serviceRow(row) {
    var name = el('span', { class: 'name', text: row.name });
    if (row.note) {
      var note = el('span', { class: 'note', text: ' — ' + row.note });
      name.appendChild(note);
    }
    var price = el('span', { class: 'price', text: row.price });
    return el('div', { class: 'service-row' }, [name, price]);
  }

  function renderServices() {
    var grid = document.getElementById('services-grid');
    SERVICES.forEach(function (service) {
      var card = el('div', { class: 'card card-hoverable service-card' });
      card.appendChild(el('span', { class: 'price-tag', text: service.price }));
      card.appendChild(el('h3', { text: service.name }));
      card.appendChild(el('p', { text: service.desc }));

      var detail = el('div', { class: 'detail' });
      service.rows.forEach(function (row) { detail.appendChild(serviceRow(row)); });
      card.appendChild(detail);

      var toggle = el('button', { class: 'toggle', type: 'button', text: 'Se priser ↓' });
      toggle.addEventListener('click', function () {
        var isOpen = card.classList.toggle('open');
        toggle.textContent = isOpen ? 'Skjul priser ↑' : 'Se priser ↓';
      });
      card.appendChild(toggle);

      grid.appendChild(card);
    });
  }

  function renderPriceList() {
    var grid = document.getElementById('price-grid');
    PRICE_GROUPS.forEach(function (group) {
      var card = el('div', { class: 'card' });
      card.appendChild(el('h3', { text: group.title }));
      group.rows.forEach(function (row) { card.appendChild(serviceRow(row)); });
      grid.appendChild(card);
    });
  }

  function initMobileNav() {
    var header = document.getElementById('site-header');
    var toggle = document.getElementById('mobile-toggle');
    var menu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initBookingForm() {
    var form = document.getElementById('booking-form');
    var panel = document.getElementById('book');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      panel.classList.add('submitted');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderServices();
    renderPriceList();
    initMobileNav();
    initBookingForm();
  });
})();
