document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const errorBanner = document.getElementById("error-banner");
  const sendBtn = document.getElementById("send-btn");

  // Theme toggle logic
  const setTheme = (theme) => {
    document.body.className = theme;
    document.documentElement.style.setProperty(
      "--bg-light",
      theme === "dark" ? "var(--bg-dark)" : "#f5f5f5"
    );
    document.documentElement.style.setProperty(
      "--text-light",
      theme === "dark" ? "var(--text-dark)" : "#000000"
    );
    themeIcon.src = theme === "dark" ? "sun.svg" : "moon.svg";
    document.cookie = `theme=${theme}; path=/`;
  };

  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.className === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });

  // Load saved theme from cookies
  const savedTheme = document.cookie
    .split("; ")
    .find((row) => row.startsWith("theme="))
    ?.split("=")[1];
  setTheme(savedTheme || "light");

  // Support form validation
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;

      if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        errorBanner.style.top = "0";
        setTimeout(() => {
          errorBanner.style.top = "-50px";
        }, 5000);
      } else {
        window.location.href = `mailto:jamespersonalproton@proton.me?subject=${encodeURIComponent(
          subject
        )}&body=Sent from: ${encodeURIComponent(email)}`;
      }
    });
  }
});
