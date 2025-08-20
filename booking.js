// Translations
const translations = {
  id: {
    loading: "Memuat...",
    booking_title: "Formulir Booking",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    service: "Pilih Layanan",
    send_whatsapp: "Kirim via WhatsApp",
    send_email: "Kirim via Email"
  },
  en: {
    loading: "Loading...",
    booking_title: "Booking Form",
    name: "Name",
    email: "Email",
    message: "Message",
    service: "Choose Service",
    send_whatsapp: "Send via WhatsApp",
    send_email: "Send via Email"
  },
  fr: {
    loading: "Chargement...",
    booking_title: "Formulaire de Réservation",
    name: "Nom",
    email: "Email",
    message: "Message",
    service: "Choisir un service",
    send_whatsapp: "Envoyer via WhatsApp",
    send_email: "Envoyer par Email"
  }
};

// Apply translations
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
      if (el.placeholder !== undefined) {
        el.placeholder = translations[lang][key];
      }
    }
  });
}

// Detect saved language from localStorage
const currentLang = localStorage.getItem("language") || "id";
applyTranslations(currentLang);

// Booking form logic
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const service = document.getElementById("service").value;

  const text = `Booking Request:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}%0AService: ${service}`;
  window.open(`https://wa.me/6281387457611?text=${text}`, "_blank");
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const service = document.getElementById("service").value;

  const subject = "Booking Request DX Atelier";
  const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}%0AService: ${service}`;
  window.location.href = `mailto:dxatelier.io@gmail.com?subject=${subject}&body=${body}`;
}

// Loading screen logic
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("booking-form").classList.remove("hidden");
  }, 2500); // 2.5s loading
});
