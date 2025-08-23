// ebook.js — Full HD-ready version

// ===============================
// Progress Bar + Keyboard Navigation
// ===============================
(function () {
  const progressEl = document.querySelector('[data-progress]');
  const current = Number(document.body.dataset.pageCurrent || 1);
  const total = Number(document.body.dataset.pageTotal || 1);

  if (progressEl && total > 0) {
    const pct = Math.max(0, Math.min(100, Math.round((current / total) * 100)));
    progressEl.style.width = pct + '%';
  }

  // Keyboard navigation
  const prevHref = document.querySelector('[data-prev]')?.getAttribute('href') || null;
  const nextHref = document.querySelector('[data-next]')?.getAttribute('href') || null;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && nextHref) window.location.href = nextHref;
    if (e.key === 'ArrowLeft' && prevHref) window.location.href = prevHref;
  }, { passive: true });
})();

// ===============================
// Download JPEG / PNG HD
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadJpeg');
  const page = document.querySelector('.page-card');

  if (!downloadBtn || !page) return;

  downloadBtn.addEventListener('click', () => {
    if (typeof html2canvas === 'undefined') {
      alert('html2canvas belum dimuat. Pastikan script html2canvas sudah include sebelum ebook.js');
      return;
    }

    // Backup dan disable filter/backdrop temporarily
    const originalFilter = page.style.filter;
    page.style.filter = 'none';

    html2canvas(page, {
      scale: 4,             // HD resolution
      backgroundColor: null, // pakai CSS background asli
      useCORS: true
    }).then((canvas) => {
      page.style.filter = originalFilter; // restore filter

      const link = document.createElement('a');
      link.download = document.title.replace(/\s+/g, '_') + '.png';
      link.href = canvas.toDataURL('image/png', 1.0); // kualitas maksimal
      link.click();
    });
  });
});
