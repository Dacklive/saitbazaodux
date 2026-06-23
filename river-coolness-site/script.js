const header = document.querySelector("[data-header]");
const gallery = document.querySelector("[data-gallery]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeLightbox = document.querySelector("[data-lightbox-close]");

function updateHeader() {
  header.classList.toggle("is-solid", window.scrollY > 80);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

gallery?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-full]");
  if (!button || !lightboxImage || !lightbox) return;

  const image = button.querySelector("img");
  lightboxImage.src = button.dataset.full;
  lightboxImage.alt = image?.alt || "Фотография базы отдыха";
  lightbox.showModal();
});

closeLightbox?.addEventListener("click", () => {
  lightbox.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
