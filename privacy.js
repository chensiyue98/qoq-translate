const themeButton = document.querySelector(".theme-toggle");

function updateThemeLabel() {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#0b1420" : "#f4f8ff";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeButton.setAttribute("aria-pressed", String(isDark));
}

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("qoq-theme", nextTheme);
  updateThemeLabel();
});

const systemTheme = matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener("change", event => {
  if (localStorage.getItem("qoq-theme")) return;
  document.documentElement.dataset.theme = event.matches ? "dark" : "light";
  updateThemeLabel();
});

updateThemeLabel();
