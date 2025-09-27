document.addEventListener("DOMContentLoaded", () => {
  // Target percentages
  const skills = {
    html: "95%",
    css: "90%",
    js: "85%",
    react: "80%",
    node: "80%",
    Py:   "80%",
  };

  // Create observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.keys(skills).forEach(skill => {
          const el = document.querySelector(`.${skill}`);
          el.style.width = skills[skill];
        });
        observer.disconnect(); // Run once
      }
    });
  }, { threshold: 0.3 }); // Trigger when 30% of section is visible

  observer.observe(document.querySelector("#skills"));
});
