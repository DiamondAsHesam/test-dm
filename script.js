window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 15000); // ⏱️ تغییر این عدد = تغییر زمان لودینگ (میلی‌ثانیه)
});
