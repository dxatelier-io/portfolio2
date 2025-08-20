// Efek klik card untuk copy ke clipboard
document.querySelectorAll(".card p").forEach((el) => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.innerText).then(() => {
      alert(`Copied: ${el.innerText}`);
    });
  });
});
