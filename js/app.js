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

// ── Seed Dummy Data (runs only if localStorage is empty) ──
function loadDemoData() {

  // PATIENTS
  if (DB.get('patients').length === 0) {
    DB.set('patients', [
      { id: 1, name: 'Arjun Kumar',  age: 45, gender: 'Male',   blood: 'B+',  phone: '9876543210', address: 'Chennai, TN',    dept: 'Cardiology',      doctor: 'Dr. Meena Iyer',    admitted: '2024-05-01', status: 'Admitted'   },
      { id: 2, name: 'Priya Sharma', age: 34, gender: 'Female', blood: 'O+',  phone: '9123456780', address: 'Coimbatore, TN', dept: 'Orthopedics',     doctor: 'Dr. Karthik Rajan', admitted: '2024-05-03', status: 'OPD'        },
      { id: 3, name: 'Ravi Anand',   age: 60, gender: 'Male',   blood: 'A+',  phone: '9988776655', address: 'Madurai, TN',    dept: 'Neurology',       doctor: 'Dr. Sneha Patel',   admitted: '2024-04-28', status: 'Discharged' },
      { id: 4, name: 'Lakshmi Nair', age: 50, gender: 'Female', blood: 'AB+', phone: '9012345678', address: 'Trichy, TN',     dept: 'General Medicine',doctor: 'Dr. Raj Kumar',     admitted: '2024-05-06', status: 'Admitted'   },
      { id: 5, name: 'Suresh Babu',  age: 29, gender: 'Male',   blood: 'O-',  phone: '9345678901', address: 'Salem, TN',      dept: 'Dermatology',     doctor: 'Dr. Priya Das',     admitted: '2024-05-07', status: 'OPD'        }
    ]);
  }

  // DOCTORS
  if (DB.get('doctors').length === 0) {
    DB.set('doctors', [
      { id: 1, name: 'Dr. Meena Iyer',    dept: 'Cardiology',      phone: '9001122334', email: 'meena@hms.in',   experience: '12 years', shift: 'Morning', status: 'Available' },
      { id: 2, name: 'Dr. Karthik Rajan', dept: 'Orthopedics',     phone: '9002233445', email: 'karthik@hms.in', experience: '9 years',  shift: 'Evening', status: 'Available' },
      { id: 3, name: 'Dr. Sneha Patel',   dept: 'Neurology',       phone: '9003344556', email: 'sneha@hms.in',   experience: '15 years', shift: 'Morning', status: 'On Leave'  },
      { id: 4, name: 'Dr. Raj Kumar',     dept: 'General Medicine', phone: '9004455667', email: 'raj@hms.in',     experience: '7 years',  shift: 'Night',   status: 'Available' },
      { id: 5, name: 'Dr. Priya Das',     dept: 'Dermatology',     phone: '9005566778', email: 'priya@hms.in',   experience: '5 years',  shift: 'Morning', status: 'Available' }
    ]);
  }

  // APPOINTMENTS — uses patientName and doctorName (matches your appointments.html)
  if (DB.get('appointments').length === 0) {
    DB.set('appointments', [
      { id: 1, patientName: 'Arjun Kumar',  doctorName: 'Dr. Meena Iyer',    dept: 'Cardiology',      date: '2024-05-10', time: '10:00', reason: 'Chest pain check-up', status: 'Confirmed' },
      { id: 2, patientName: 'Priya Sharma', doctorName: 'Dr. Karthik Rajan', dept: 'Orthopedics',     date: '2024-05-11', time: '11:30', reason: 'Knee joint pain',     status: 'Pending'   },
      { id: 3, patientName: 'Lakshmi Nair', doctorName: 'Dr. Raj Kumar',     dept: 'General Medicine', date: '2024-05-12', time: '09:00', reason: 'Routine check-up',   status: 'Confirmed' },
      { id: 4, patientName: 'Suresh Babu',  doctorName: 'Dr. Priya Das',     dept: 'Dermatology',     date: '2024-05-13', time: '14:00', reason: 'Skin allergy',       status: 'Pending'   },
      { id: 5, patientName: 'Ravi Anand',   doctorName: 'Dr. Sneha Patel',   dept: 'Neurology',       date: '2024-05-14', time: '11:00', reason: 'Follow-up visit',    status: 'Cancelled' }
    ]);
  }

  // ROOMS
  if (DB.get('rooms').length === 0) {
    DB.set('rooms', [
      { id: 1, number: '101', type: 'General',  floor: '1', capacity: 4, occupied: 2, rate: 1500, status: 'Available' },
      { id: 2, number: '102', type: 'General',  floor: '1', capacity: 4, occupied: 4, rate: 1500, status: 'Occupied'  },
      { id: 3, number: '201', type: 'Private',  floor: '2', capacity: 1, occupied: 1, rate: 4000, status: 'Occupied'  },
      { id: 4, number: '202', type: 'Private',  floor: '2', capacity: 1, occupied: 0, rate: 4000, status: 'Available' },
      { id: 5, number: '301', type: 'ICU',      floor: '3', capacity: 2, occupied: 1, rate: 9000, status: 'Available' },
      { id: 6, number: '401', type: 'Emergency',floor: '4', capacity: 3, occupied: 1, rate: 6000, status: 'Available' }
    ]);
  }

  // BILLING — uses patientName, amount, type, status 'Paid'/'Pending' (matches your billing.html)
  if (DB.get('billing').length === 0) {
    DB.set('billing', [
      { id: 1, patientName: 'Arjun Kumar',  date: '2024-05-08', type: 'Consultation + Tests', amount: 15000, status: 'Paid'    },
      { id: 2, patientName: 'Ravi Anand',   date: '2024-05-06', type: 'Surgery + Room',       amount: 42000, status: 'Paid'    },
      { id: 3, patientName: 'Priya Sharma', date: '2024-05-03', type: 'OPD Consultation',     amount: 3500,  status: 'Pending' },
      { id: 4, patientName: 'Lakshmi Nair', date: '2024-05-07', type: 'IPD Admission',        amount: 18000, status: 'Pending' },
      { id: 5, patientName: 'Suresh Babu',  date: '2024-05-09', type: 'OPD Consultation',     amount: 2500,  status: 'Paid'    }
    ]);
  }
}

// Run when page loads
loadDemoData();

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