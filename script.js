const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const revealTargets = document.querySelectorAll(
  ".section-heading, .card, .goal-box, .text-card, .skill-list, .principles, .comm-card, .scarf-card, .timeline-item"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((element) => observer.observe(element));
