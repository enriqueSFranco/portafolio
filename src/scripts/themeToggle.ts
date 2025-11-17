import { storeTheme, getStoredTheme, applyTheme } from "@/utils/theme";

export function initThemeToggle() {
    const $checkbox = document.querySelector<HTMLInputElement>(".switch .circle");

    if (!$checkbox) throw new Error("Theme toggle input not found")
    
    // inicializar el theme
    const initialTheme = getStoredTheme() ?? "dark"
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: "light" | "dark" = initialTheme ?? (prefersDark ? "dark" : "light");


    applyTheme(initial);
    $checkbox.checked = initial === "light";


    // listener
    $checkbox.addEventListener("change", () => {
        const newTheme = $checkbox.checked ? "light" : "dark";
        applyTheme(newTheme)
        storeTheme(newTheme);
    })
}