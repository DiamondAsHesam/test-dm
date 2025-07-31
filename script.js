const body = document.body;
const checkbox = document.getElementById("theme-toggle-checkbox");

// بررسی تم ذخیره‌شده
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    checkbox.checked = true;
}

// تغییر تم
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});
