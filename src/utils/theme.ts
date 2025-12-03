export type Theme = "light" | "dark";

// Key para localStorage
const STORAGE_KEY = "theme";

const getStoredTheme = (): Theme | null => {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
};

const storeTheme = (theme: Theme) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
};

export { getStoredTheme, storeTheme, applyTheme };
