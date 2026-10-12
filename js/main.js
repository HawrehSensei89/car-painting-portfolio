const toggleBtn = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
const toggleIcon = toggleBtn.querySelector("i");
const navLinks = nav.querySelectorAll(".header__nav-link");

function setMenu(open) {
  nav.classList.toggle("open", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
  toggleIcon.className = open ? "ri-close-line" : "ri-menu-line";
}

// تعیین لینک فعال بر اساس آدرس فعلی صفحه
function setActiveLink(link) {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("header__active");
    navLink.removeAttribute("aria-current");
  });

  link.classList.add("header__active");
  link.setAttribute("aria-current", "page");
}

const currentHash = window.location.hash;
const initialActiveLink = [...navLinks].find((link) => {
  const href = link.getAttribute("href");
  return currentHash ? href === currentHash : href === "#";
});

if (initialActiveLink) setActiveLink(initialActiveLink);

// باز و بسته کردن منو با دکمه همبرگری
toggleBtn.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

// با کلیک روی لینک، کلاس active جابه‌جا و منو بسته شود
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveLink(link);
    setMenu(false);
  });
});

// اگر صفحه بزرگ شد، منو به حالت بسته برگردد
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) setMenu(false);
});
