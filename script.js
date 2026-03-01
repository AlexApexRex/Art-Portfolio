const categories = [
  {
    id: "paper-paintings",
    name: "Paper Paintings",
    description: "Traditional paintings focused on texture, layering, and soft atmospheric color.",
    cover:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "digital-illustration",
    name: "Digital Illustration",
    description: "Digital artworks inspired by anime framing, storytelling, and cinematic lighting.",
    cover:
      "https://images.unsplash.com/photo-1633983354308-9c56d3f7ec47?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "character-design",
    name: "Character Design",
    description: "Exploration of expressions, silhouettes, and personality through character concepts.",
    cover:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "marker-studies",
    name: "Marker Studies",
    description: "Marker-based studies focusing on speed, structure, and expressive color notes.",
    cover:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
  },
];

const artworks = [
  // Paper Paintings (5)
  { title: "Soft Horizon", category: "paper-paintings", medium: "Watercolor on paper", year: 2025, image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1100&q=80" },
  { title: "Quiet Canal", category: "paper-paintings", medium: "Gouache on paper", year: 2025, image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1050&q=80" },
  { title: "Morning Dust", category: "paper-paintings", medium: "Acrylic on paper", year: 2024, image: "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?auto=format&fit=crop&w=1200&q=80" },
  { title: "Still Rain", category: "paper-paintings", medium: "Mixed media", year: 2024, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Cloud Window", category: "paper-paintings", medium: "Watercolor study", year: 2023, image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=980&q=80" },

  // Digital Illustration (5)
  { title: "Dreaming in Lavender", category: "digital-illustration", medium: "Digital painting", year: 2025, image: "https://images.unsplash.com/photo-1633983354308-9c56d3f7ec47?auto=format&fit=crop&w=1200&q=80" },
  { title: "Blue Archive", category: "digital-illustration", medium: "Digital portrait", year: 2025, image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Echo Room", category: "digital-illustration", medium: "Digital concept", year: 2024, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80" },
  { title: "Light Current", category: "digital-illustration", medium: "Color script", year: 2024, image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80" },
  { title: "After Class", category: "digital-illustration", medium: "Digital scene", year: 2023, image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80" },

  // Character Design (5)
  { title: "Lumen Pilot", category: "character-design", medium: "Character sheet", year: 2025, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1100&q=80" },
  { title: "Arc Runner", category: "character-design", medium: "Turnaround sketch", year: 2025, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1050&q=80" },
  { title: "Mika Expressions", category: "character-design", medium: "Expression board", year: 2024, image: "https://images.unsplash.com/photo-1577083552431-6e5fd75fc6f1?auto=format&fit=crop&w=1200&q=80" },
  { title: "Traveler No.7", category: "character-design", medium: "Outfit variation", year: 2024, image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1100&q=80" },
  { title: "Nocturne Hero", category: "character-design", medium: "Concept render", year: 2023, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80" },

  // Marker Studies (5)
  { title: "Street Marker 01", category: "marker-studies", medium: "Alcohol markers", year: 2025, image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80" },
  { title: "Gesture Blocks", category: "marker-studies", medium: "Marker + pencil", year: 2025, image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80" },
  { title: "Station Study", category: "marker-studies", medium: "Marker perspective", year: 2024, image: "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?auto=format&fit=crop&w=1000&q=80" },
  { title: "Color Notes", category: "marker-studies", medium: "Palette drill", year: 2024, image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&w=1200&q=80" },
  { title: "Night Marker", category: "marker-studies", medium: "Fast marker sketch", year: 2023, image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=960&q=80" },
];

const mainContent = document.querySelector("#main-content");
const galleryGrid = document.querySelector("#gallery-grid");
const collectionGrid = document.querySelector("#collection-grid");
const categoryGrid = document.querySelector("#category-grid");
const collectionView = document.querySelector("#collection-view");
const backToHomeButton = document.querySelector("#back-to-home");
const collectionTitle = document.querySelector("#collection-title");
const collectionDescription = document.querySelector("#collection-description");
const artTemplate = document.querySelector("#art-card-template");
const categoryTemplate = document.querySelector("#category-card-template");
const themeToggle = document.querySelector("#theme-toggle");

function renderArtCards(targetGrid, artList) {
  targetGrid.innerHTML = "";

  artList.forEach((art) => {
    const card = artTemplate.content.cloneNode(true);
    const article = card.querySelector(".art-card");
    const image = card.querySelector(".art-image");
    const title = card.querySelector(".art-title");
    const subtitle = card.querySelector(".art-subtitle");

    image.src = art.image;
    image.alt = `${art.title} — ${art.medium}, ${art.year}`;
    title.textContent = art.title;
    subtitle.textContent = `${art.medium} • ${art.year}`;
    article.setAttribute("aria-label", `${art.title}, ${art.medium}, ${art.year}`);

    targetGrid.append(card);
  });
}

function renderHomepageGallery() {
  renderArtCards(galleryGrid, artworks.slice(0, 12));
}

function renderCategoryTiles() {
  categoryGrid.innerHTML = "";

  categories.forEach((category) => {
    const count = artworks.filter((art) => art.category === category.id).length;
    const card = categoryTemplate.content.cloneNode(true);
    const button = card.querySelector(".category-card");
    const image = card.querySelector(".category-image");
    const title = card.querySelector(".category-title");
    const countLabel = card.querySelector(".category-count");

    image.src = category.cover;
    image.alt = `${category.name} collection cover`;
    title.textContent = category.name;
    countLabel.textContent = `${count} sample artworks`;

    button.addEventListener("click", () => openCollection(category.id));
    categoryGrid.append(card);
  });
}

function openCollection(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;

  const filtered = artworks.filter((art) => art.category === categoryId);
  collectionTitle.textContent = category.name;
  collectionDescription.textContent = category.description;
  renderArtCards(collectionGrid, filtered);

  mainContent.classList.remove("view-home");
  mainContent.classList.add("view-collection");
  collectionView.hidden = false;
  collectionView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeCollection() {
  mainContent.classList.remove("view-collection");
  mainContent.classList.add("view-home");
  collectionView.hidden = true;
  document.querySelector("#styles").scrollIntoView({ behavior: "smooth", block: "start" });
}

backToHomeButton.addEventListener("click", closeCollection);

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.innerHTML =
    theme === "dark"
      ? "<span aria-hidden='true'>☀️</span>"
      : "<span aria-hidden='true'>🌙</span>";
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

renderCategoryTiles();
renderHomepageGallery();

