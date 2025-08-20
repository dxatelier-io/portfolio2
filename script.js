// LANGUAGES
const translations = {
  en: {
    about: "About",
    contact: "Contact",
    social: "Social Media",
    portfolio: "Portfolio",
    games: "Games",
    library: "Library",
    heroTitle: "Welcome to DX Atelier",
    heroSubtitle: "Your Ideas, Our Digital Canvas",
    bookMe: "Book me now"
  },
  id: {
    about: "Tentang",
    contact: "Kontak",
    social: "Sosial Media",
    portfolio: "Portfolio",
    games: "Permainan",
    library: "Perpustakaan",
    heroTitle: "Selamat datang di DX Atelier",
    heroSubtitle: "Ide Kamu, Kanvas Digital Kami",
    bookMe: "Pesan sekarang"
  },
  fr: {
    about: "À propos",
    contact: "Contact",
    social: "Réseaux sociaux",
    portfolio: "Portfolio",
    games: "Jeux",
    library: "Bibliothèque",
    heroTitle: "Bienvenue chez DX Atelier",
    heroSubtitle: "Vos Idées, Notre Toile Numérique",
    bookMe: "Réservez-moi"
  }
};

const langSelect = document.getElementById("language");
langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});

// BACKGROUND ANIMATION
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
