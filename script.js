// Theme toggling with cookies
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.body.className = theme;
  themeToggle.src = theme === "light" ? "sun.png" : "moon.png";
  document.cookie = `theme=${theme};path=/;`;
}

function getTheme() {
  const match = document.cookie.match(/theme=(light|dark)/);
  return match ? match[1] : "dark";
}

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.className === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

setTheme(getTheme());

// Support form validation
const supportForm = document.getElementById("support-form");
const errorBanner = document.getElementById("error-banner");

supportForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  if (!email.includes("@")) {
    errorBanner.classList.add("show");
    setTimeout(() => errorBanner.classList.remove("show"), 5000);
    return;
  }

  window.location.href = `mailto:jamespersonalproton@proton.me?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent("From: " + email)}`;
});
