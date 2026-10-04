const toggleBtn = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
const toggleIcon = toggleBtn.querySelector("i");

function setMenu(open) {
  nav.classList.toggle("open", open);
  toggleBtn.setAttribute("aria-expanded", open);
  toggleIcon.className = open ? "ri-close-line" : "ri-menu-line";
}

// باز و بسته کردن منو با دکمه همبرگری
toggleBtn.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

// بعد از کلیک روی هر لینک، منو بسته شود
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// اگر صفحه بزرگ شد (مثلاً چرخش گوشی)، منو به حالت اول برگردد
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) setMenu(false);
});
