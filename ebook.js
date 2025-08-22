// Simple ebook helpers: progress + keyboard nav
(function(){
  const progressEl = document.querySelector('[data-progress]');
  const current = Number(document.body.dataset.pageCurrent || 1);
  const total   = Number(document.body.dataset-pageTotal || document.body.dataset.pageTotal || 1);

  if(progressEl && total > 0){
    const pct = Math.max(0, Math.min(100, Math.round((current/total)*100)));
    progressEl.style.width = pct + '%';
  }

  // Keyboard navigation
  const prevHref = document.querySelector('[data-prev]')?.getAttribute('href') || null;
  const nextHref = document.querySelector('[data-next]')?.getAttribute('href') || null;

  window.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight' && nextHref){ window.location.href = nextHref; }
    if(e.key === 'ArrowLeft'  && prevHref){ window.location.href = prevHref; }
  }, {passive:true});
})();
