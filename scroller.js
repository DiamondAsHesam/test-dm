document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک (که URL تغییر پیدا می‌کنه)

      const targetId = link.getAttribute("href").substring(1); // گرفتن ID از href (مثل #home)
      const targetElement = document.getElementById(targetId); // گرفتن عنصر مربوط به ID

      // انجام اسکرول به آرامی
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    });
  });
});
