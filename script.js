/*
  ===================================================
  Artwork Data
  - Replace image URLs with your own work later
  - category supports: "paper" or "digital"
  ===================================================
*/
const artworks = [
  {
    title: "Soft Horizon",
    category: "paper",
    medium: "Watercolor on paper",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Garden Memory",
    category: "paper",
    medium: "Marker and mixed media",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dreaming in Lavender",
    category: "digital",
    medium: "Digital painting",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1633983354308-9c56d3f7ec47?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quiet Street Study",
    category: "paper",
    medium: "Acrylic and pencil",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Afterglow Portrait",
    category: "digital",
    medium: "Digital concept artwork",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Notebook Fragments",
    category: "paper",
    medium: "Ink and pastel",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80",
  },
];

const grid = document.querySelector("#gallery-grid");
const template = document.querySelector("#art-card-template");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggle = document.querySelector("#theme-toggle");

/**
 * Render gallery cards for selected filter.
 */
function renderGallery(filter = "all") {
  const visibleArtworks =
    filter === "all"
      ? artworks
      : artworks.filter((art) => art.category === filter);

  grid.innerHTML = "";

  visibleArtworks.forEach((art) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".art-card");
    const image = card.querySelector(".art-image");
    const title = card.querySelector(".art-title");
    const subtitle = card.querySelector(".art-subtitle");

    image.src = art.image;
    image.alt = `${art.title} — ${art.medium}, ${art.year}`;
    title.textContent = art.title;
    subtitle.textContent = `${art.medium} • ${art.year}`;

    // Optional accessibility hint when focused via keyboard.
    article.setAttribute("aria-label", `${art.title}, ${art.medium}, ${art.year}`);

    grid.append(card);
  });
}

/**
 * Filter button behavior.
 */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    renderGallery(button.dataset.filter);
  });
});

/**
 * Light/Dark toggle with persistence.
 */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.innerHTML = theme === "dark" ? "<span aria-hidden='true'>☀️</span>" : "<span aria-hidden='true'>🌙</span>";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  setTheme("dark");
} else {
  setTheme("light");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

renderGallery("all");