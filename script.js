const themeToggle = document.querySelector("#theme-toggle");
const activeThemeLabel = document.querySelector(".active-theme");

function getCurrentTheme(){
  let theme = window.matchMedia("(prefers-color-scheme: light)"). matches;

  if (theme) {
    theme = "light";
  } else {
    theme = "dark";
  }

  localStorage.getItem("default-theme") ? theme = localStorage.getItem("default-theme") : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  root.setAttribute("color-scheme", `${theme}`)
}

themeToggle.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "light") {
    theme = "dark"
  } else {
    theme = "light" 
  }
  
  localStorage.setItem("default-theme", `${theme}`);
  loadTheme(theme);
})

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme())
})