// ── Data Store (localStorage) ──
const DB = {
  get(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; }
    catch { return []; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
  nextId(key) {
    const items = DB.get(key);
    return items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
  }
};



// ── Utilities ──
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function formatDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function badgeHtml(status) {
  const map = {
    'Admitted': 'blue', 'OPD': 'amber', 'Discharged': 'green',
    'Available': 'green', 'On Leave': 'amber', 'Occupied': 'red',
    'Confirmed': 'green', 'Pending': 'amber', 'Cancelled': 'red',
    'Paid': 'green', 'Unpaid': 'red',
  };
  const cls = map[status] || 'blue';
  return `<span class="badge badge-${cls}">${status}</span>`;
}

function setActiveNav() {
  const links = document.querySelectorAll('.sidebar-nav a');

  // Get current page (example: patients.html)
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (currentPage === linkPage) {
      link.classList.add('active');
    }
  });
}
