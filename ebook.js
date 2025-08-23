// ebook.js — HD download fixed

// Progress Bar + Keyboard Navigation
(function () {
  const progressEl = document.querySelector('[data-progress]');
  const current = Number(document.body.dataset.pageCurrent || 1);
  const total = Number(document.body.dataset.pageTotal || 1);

  if (progressEl && total > 0) {
    const pct = Math.max(0, Math.min(100, Math.round((current / total) * 100)));
    progressEl.style.width = pct + '%';
  }

  const prevHref = document.querySelector('[data-prev]')?.getAttribute('href') || null;
  const nextHref = document.querySelector('[data-next]')?.getAttribute('href') || null;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && nextHref) window.location.href = nextHref;
    if (e.key === 'ArrowLeft' && prevHref) window.location.href = prevHref;
  }, { passive: true });
})();
    // clone elemen page-card agar filter/backdrop tidak mengganggu
    document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('Save') || document.getElementById('downloadJpeg');
  const page = document.querySelector('.page-card');

  if (!downloadBtn || !page) return;

  downloadBtn.addEventListener('click', () => {
    // clone untuk menghilangkan filter/backdrop
    const clone = page.cloneNode(true);
    clone.style.filter = 'none';
    clone.style.backdropFilter = 'none';
    clone.style.position = 'absolute';
    clone.style.top = '-9999px';
    document.body.appendChild(clone);

    html2canvas(clone, {
      scale: 4, // HD
      backgroundColor: '#fff', // pastikan background solid
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = document.title.replace(/\s+/g, '_') + '.jpg';
      link.href = canvas.toDataURL('image/jpeg', 1.0);
      link.click();
      document.body.removeChild(clone);
    });
  });
});

