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

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.createElement("button");
  downloadBtn.textContent = "Download as JPEG";
  downloadBtn.classList.add("btn");
  downloadBtn.style.marginTop = "20px";

  const nav = document.querySelector(".nav");
  nav.appendChild(downloadBtn);

  downloadBtn.addEventListener("click", () => {
    html2canvas(document.querySelector(".page-card"), {
      scale: 3, // makin besar makin tajam
      useCORS: true
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = document.title.replace(/\s+/g, "_") + ".jpg";
      link.href = canvas.toDataURL("image/jpeg", 1.0); // kualitas maksimal
      link.click();
    });
  });
});
