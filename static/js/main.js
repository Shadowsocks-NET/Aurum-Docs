// Set darkmode
document.getElementById("lang").addEventListener("click", () => {
  document.body.classList.toggle("zh");
  localStorage.setItem(
    "langs",
    document.body.classList.contains("zh") ? "zh" : "en"
  );

  if (document.body.classList.contains("zh")) {
    window.location.href = "/zh";
  } else {
    window.location.href = "/";
  }
});

// enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem("langs") === "zh") {
  document.body.classList.add("zh");
}

// Set darkmode
document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// enforce local storage setting but also fallback to user-agent preferences
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark");
}
