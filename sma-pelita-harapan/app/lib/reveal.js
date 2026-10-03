export function initReveal() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const pendingTargets = () =>
    document.querySelectorAll("[data-reveal]:not(.reveal-visible)");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  const observeAll = () => {
    pendingTargets().forEach((el) => {
      if (reduceMotion) {
        el.classList.add("reveal-visible");
      } else {
        observer.observe(el);
      }
    });
  };

  observeAll();

  const mutations = new MutationObserver(observeAll);
  mutations.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}
