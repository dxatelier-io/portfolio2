// === MULTILANGUAGE ===
const translations = {
  id: {
    about: "Tentang", contact: "Kontak", social: "Sosial Media",
    portfolio: "Portfolio", games: "Permainan", library: "Perpustakaan",
    heroTitle: "Selamat Datang di DX Atelier",
    heroSubtitle: "Tempat imajinasi bertemu teknologi",
    book: "Book Me Now", loading: "Memuat...",
    formTitle: "Form Booking", name: "Nama", email: "Email",
    message: "Pesan", service: "Pilih Layanan",
    sendWA: "Kirim via WhatsApp", sendEmail: "Kirim via Email"
  },
  en: {
    about: "About", contact: "Contact", social: "Social Media",
    portfolio: "Portfolio", games: "Games", library: "Library",
    heroTitle: "Welcome to DX Atelier",
    heroSubtitle: "Where imagination meets technology",
    book: "Book Me Now", loading: "Loading...",
    formTitle: "Booking Form", name: "Name", email: "Email",
    message: "Message", service: "Choose Service",
    sendWA: "Send via WhatsApp", sendEmail: "Send via Email"
  },
  fr: {
    about: "À propos", contact: "Contact", social: "Réseaux sociaux",
    portfolio: "Portfolio", games: "Jeux", library: "Bibliothèque",
    heroTitle: "Bienvenue chez DX Atelier",
    heroSubtitle: "Là où l’imagination rencontre la technologie",
    book: "Réservez maintenant", loading: "Chargement...",
    formTitle: "Formulaire de réservation", name: "Nom", email: "Email",
    message: "Message", service: "Choisir un service",
    sendWA: "Envoyer via WhatsApp", sendEmail: "Envoyer par Email"
  }
};

// apply language
const languageSelect = document.getElementById("language");
if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    localStorage.setItem("lang", languageSelect.value);
    location.reload();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem("lang") || "id";
  if (languageSelect) languageSelect.value = lang;

  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = translations[lang][el.dataset.key];
  });

  // === Booking Page Loading ===
  const loading = document.getElementById("loading");
  const bookingForm = document.getElementById("booking-form");
  if (loading && bookingForm) {
    setTimeout(() => {
      loading.style.display = "none";
      bookingForm.classList.remove("hidden");
    }, 2500); // 2.5 detik loading
  }
});

// === Form Actions ===
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const service = document.getElementById("service").value;
  const text = `Halo DX Atelier, saya ingin booking.%0A
  Nama: ${name}%0AEmail: ${email}%0APesan: ${message}%0ALayanan: ${service}`;
  window.open(`https://wa.me/6281387457611?text=${text}`, "_blank");
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const service = document.getElementById("service").value;
  const subject = `Booking Request from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}%0AService: ${service}`;
  window.location.href = `mailto:dxatelier.io@gmail.com?subject=${subject}&body=${body}`;
}
