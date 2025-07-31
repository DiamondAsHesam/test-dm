const htmlRoot = document.getElementById("html-root");
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle-btn");

// بررسی تم ذخیره‌شده
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    htmlRoot.setAttribute("data-theme", "dark");
}

// تغییر تم
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        htmlRoot.setAttribute("data-theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        htmlRoot.removeAttribute("data-theme");
    }
});
