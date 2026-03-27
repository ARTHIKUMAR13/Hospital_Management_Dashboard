// Shared sidebar HTML injected into every page
function renderSidebar() {
  const base = window.location.pathname.includes('/pages/') ? '../' : '';
  const html = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon">
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M10 2h4v4h4v4h-4v4h-4v-4H6V6h4z"/>
  </svg>
</div>
      <h2>MedPlus HMS</h2>
      <span>Hospital Management</span>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section">Main</div>
      <a href="${base}index.html"><img src="${base}icons/dashboard.svg" class="icon"> Dashboard</a>
      <div class="sidebar-section">Management</div>
      <a href="${base}pages/patients.html"><img src="${base}icons/patient.svg" class="icon"> Patients</a>
      <a href="${base}pages/doctors.html"><img src="${base}icons/doctor.svg" class="icon"> Doctors</a>
      <a href="${base}pages/appointments.html"><img src="${base}icons/appoinment.svg" class="icon"> Appointments</a>
      <a href="${base}pages/rooms.html"><img src="${base}icons/rooms.svg" class="icon"> Rooms</a>
      <a href="${base}pages/billing.html"><img src="${base}icons/billing.svg" class="icon"> Billing</a>
    </nav>
    <div class="sidebar-footer">MedPlus v1.0 &copy; 2026</div>
  </aside>`;
  document.getElementById('sidebar-placeholder').innerHTML = html;
  setActiveNav();
}
renderSidebar();
