// Mobil Menü Toggle (Ekstra olarak eklenebilir)
document.addEventListener("DOMContentLoaded", () => {
  // Proje kartlarına hover efekti
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
function smoothScroll(target) {
  gsap.to(window, {
    duration: 1.5, // Animasyon süresi (saniye)
    scrollTo: {
      y: target, // Hedef element veya pixel değeri
      offsetY: 70, // Sabit navbar varsa üst boşluk (opsiyonel)
    },
    ease: "power2.inOut", // Easing efekti (daha doğal hareket)
  });
}
