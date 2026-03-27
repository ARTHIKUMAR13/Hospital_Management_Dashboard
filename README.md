# 🏥 MedPlus – Hospital Management System

A complete, fully functional **Hospital Management System** built with pure HTML, CSS, and JavaScript — no frameworks, no backend required.

## 🚀 Live Features

| Module | Features |
|---|---|
| **Dashboard** | Live stats, recent patients, room overview, billing summary |
| **Patients** | Add / Edit / Delete, search, filter by status, blood group |
| **Doctors** | Manage doctors, departments, availability status |
| **Appointments** | Book / update appointments, auto-fill doctor department |
| **Rooms** | Room types (General, Private, ICU), occupancy tracking |
| **Billing** | Invoice management, paid/pending tracking, total summary |

## 🛠️ Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Custom design system, CSS variables, responsive layout
- **Vanilla JavaScript** – DOM manipulation, localStorage, modular code

## 📂 Project Structure

```
hospital-management/
├── index.html              # Dashboard
├── css/
│   └── style.css           # Global styles & design system
├── js/
│   ├── app.js              # Data store (localStorage), utilities
│   └── sidebar.js          # Shared sidebar component
└── pages/
    ├── patients.html
    ├── doctors.html
    ├── appointments.html
    ├── rooms.html
    └── billing.html
```

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. No installation or server needed!

```bash
git clone https://github.com/YOUR_USERNAME/hospital-management-system
cd hospital-management-system
# Open index.html in browser
```

## 💡 Key Concepts Used

- `localStorage` for persistent data storage
- Dynamic DOM manipulation with `innerHTML` and event listeners
- CSS custom properties (variables) for theming
- Modular JavaScript with reusable utility functions
- Responsive grid layout using CSS Grid and Flexbox
- Search and filter functionality
- CRUD operations (Create, Read, Update, Delete)

## 📸 Screenshots

> Dashboard → Patients → Appointments → Billing — all data persists across sessions via localStorage.

---

Made with ❤️ using pure HTML, CSS & JavaScript
