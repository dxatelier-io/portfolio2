// Translations
const translations = {
  en: {
    contact_title: "Get in Touch",
    contact_subtitle: "We’d love to hear from you — collaboration, questions, or ideas."
  },
  id: {
    contact_title: "Hubungi Kami",
    contact_subtitle: "Kami senang mendengar dari Anda — kolaborasi, pertanyaan, atau ide."
  },
  fr: {
    contact_title: "Contactez-nous",
    contact_subtitle: "Nous serions ravis de vous entendre — collaboration, questions ou idées."
  }
};

// Apply translations
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Detect saved language from localStorage
const savedLang = localStorage.getItem("language") || "en";
document.getElementById("language").value = savedLang;
applyTranslations(savedLang);

// Language switcher
document.getElementById("language").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("language", lang);
  applyTranslations(lang);
});

// Copy to clipboard interactivity
document.querySelectorAll(".card p").forEach((el) => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.innerText).then(() => {
      const alertBox = document.createElement("div");
      alertBox.textContent = `Copied: ${el.innerText}`;
      alertBox.style.position = "fixed";
      alertBox.style.top = "20px";
      alertBox.style.left = "50%";
      alertBox.style.transform = "translateX(-50%)";
      alertBox.style.background = "#ff5fa2";
      alertBox.style.color = "#fff";
      alertBox.style.padding = "10px 20px";
      alertBox.style.borderRadius = "20px";
      alertBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
      alertBox.style.zIndex = "10000";
      alertBox.style.fontWeight = "500";
      alertBox.style.opacity = "0";
      alertBox.style.transition = "opacity 0.3s";

      document.body.appendChild(alertBox);

      setTimeout(() => { alertBox.style.opacity = "1"; }, 10);

      setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => { document.body.removeChild(alertBox); }, 300);
      }, 1500);
    });
  });
});
