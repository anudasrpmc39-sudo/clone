/* =========================
   STICKY HEADER SHADOW
========================= */
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});


/* =========================
   ACTIVE NAVIGATION LINK
========================= */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#00b4d8";
    link.style.fontWeight = "600";
  }
});


/* =========================
   SMOOTH SCROLL (if needed)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   SIMPLE SEARCH FUNCTION
========================= */
const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    let filter = searchBox.value.toLowerCase();
    let searchable = document.querySelectorAll(".section, p, li");

    searchable.forEach(item => {
      let text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
}


/* =========================
   LANGUAGE TOGGLE (EN / BN)
========================= */
let currentLang = "en";

const langBtn = document.getElementById("langBtn");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";

    document.querySelectorAll("[data-en]").forEach(el => {
      if (currentLang === "bn") {
        el.innerHTML = el.getAttribute("data-bn") || el.innerHTML;
      } else {
        el.innerHTML = el.getAttribute("data-en") || el.innerHTML;
      }
    });
  });
}


/* =========================
   SCROLL ANIMATION (FADE IN)
========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section, .card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});


/* =========================
   SAFETY CHECK
========================= */
console.log("✔ Website script loaded successfully");
