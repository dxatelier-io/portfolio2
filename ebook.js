// ebook.js

// Simple ebook helpers: progress bar + keyboard navigation
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

  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'ArrowRight' && nextHref) window.location.href = nextHref;
      if (e.key === 'ArrowLeft' && prevHref) window.location.href = prevHref;
    },
    { passive: true }
  );
})();

// Download JPEG untuk tombol yang sudah ada di HTML
document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadJpeg');
  const page = document.querySelector('.page-card');

  if (!downloadBtn || !page) return;

  downloadBtn.addEventListener('click', () => {
    if (typeof html2canvas === 'undefined') {
      alert('html2canvas belum dimuat. Pastikan script html2canvas sudah include sebelum ebook.js');
      return;
    }

    html2canvas(page, {
      scale: 3, // resolusi tinggi
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = document.title.replace(/\s+/g, '_') + '.jpg';
      link.href = canvas.toDataURL('image/jpeg', 1.0); // kualitas maksimal
      link.click();
    });
  });
});
