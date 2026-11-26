(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const marks = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale, .reveal-item, .site-footer[data-reveal]");
  if (!marks.length) return;
  if (reduce) {
    marks.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.classList.contains("reveal-item") && el.parentElement) {
        const items = [...el.parentElement.children].filter((n) => n.classList.contains("reveal-item"));
        const i = items.indexOf(el);
        el.style.transitionDelay = `${0.06 + Math.max(0, i) * 0.07}s`;
      }
      el.classList.add("is-in");
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  marks.forEach((el) => io.observe(el));
})();
