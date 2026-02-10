import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="px-2 py-1 rounded focus:outline-none border border-default-200 bg-default-100 dark:bg-default-900"
      type="button"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
