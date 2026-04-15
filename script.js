let isEnglish = true;

const langBtn = document.getElementById("langBtn");
const searchBox = document.getElementById("searchBox");

function toggleLang() {
  isEnglish = !isEnglish;
  document.documentElement.lang = isEnglish ? "en" : "bn";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = isEnglish ? el.dataset.en : el.dataset.bn;
  });

  searchBox.placeholder = isEnglish ? "Search the website..." : "ওয়েবসাইটে খুঁজুন...";
  langBtn.innerText = isEnglish ? "🌐 EN / বাংলা" : "🌐 বাংলা / EN";
}

function searchContent() {
  const input = searchBox.value.toLowerCase().trim();
  const sections = document.querySelectorAll(".searchable");

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    if (text.includes(input) || input === "") {
      section.classList.remove("hidden-search");
    } else {
      section.classList.add("hidden-search");
    }
  });
}

langBtn.addEventListener("click", toggleLang);
searchBox.addEventListener("input", searchContent);
