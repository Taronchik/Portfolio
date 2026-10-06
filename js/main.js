// Читаем процент, если он задан в HTML. Пустое значение оставляет шаблонную черту.
document.querySelectorAll(".progress-panel[data-progress]").forEach((panel) => {
  const rawProgress = panel.dataset.progress.trim();
  if (rawProgress === "") return;

  const requestedProgress = Number(rawProgress);
  if (!Number.isFinite(requestedProgress)) return;

  // Ограничиваем значение диапазоном 0–100 и синхронизируем полосу с подписью.
  const progress = Math.min(100, Math.max(0, requestedProgress));
  const value = panel.querySelector("[data-progress-value]");
  const unit = panel.querySelector("[data-progress-unit]");
  const fill = panel.querySelector("[data-progress-fill]");
  const progressBar = panel.querySelector('[role="progressbar"]');

  if (value) value.textContent = String(progress);
  if (unit) unit.textContent = "%";
  if (fill) fill.style.width = `${progress}%`;
  if (progressBar) progressBar.setAttribute("aria-valuenow", String(progress));
});

// Показываем кнопку возврата наверх после небольшой прокрутки страницы.
const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  const updateBackToTopVisibility = () => {
    const isVisible = window.scrollY > 320;
    backToTopButton.classList.toggle("is-visible", isVisible);
    backToTopButton.setAttribute("aria-hidden", String(!isVisible));
    backToTopButton.tabIndex = isVisible ? 0 : -1;
  };

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTopButton.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}
