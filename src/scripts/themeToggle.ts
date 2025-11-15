import { storeTheme, getStoredTheme, applyTheme } from "@/utils/theme";

export function initThemeToggle() {
    const $checkbox = document.querySelector<HTMLInputElement>(".switch .circle");

    if (!$checkbox) throw new Error("Theme toggle input not found")


    // inicializar el theme
    const initialTheme = getStoredTheme() ?? "dark"
    applyTheme(initialTheme)
    $checkbox.checked = initialTheme === 'light'

    // listener
    $checkbox.addEventListener("change", () => {
        const newTheme = $checkbox.checked ? "light" : "dark";
        applyTheme(newTheme)
        storeTheme(newTheme);
    })
}