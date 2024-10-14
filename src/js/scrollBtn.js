import { scrollBtn, sections } from "./constants";

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        updateScroll(sectionId);
      }
    });
  },
  {
    threshold: 0.5,
  }
);
sections.forEach(section => {
  observer.observe(section);
});

const updateScroll = sectionId => {
  if (sectionId === "hero") {
    scrollBtn.href = "#footer";
  } else if (sectionId === "is-loved") {
    scrollBtn.href = "#header";
  }
};
