function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightKeywords(text: string, colorsMap: Record<string, string>) {
  Object.entries(colorsMap).forEach(([keyword, colorClass]) => {
    const escaped = escapeRegExp(keyword);

    // Lookarounds para evitar texto dentro de tags HTML
    const regex = new RegExp(`(?<!<[^>]*)(\\b${escaped}\\b)(?![^<]*>)`, "gi");

    text = text.replace(regex, `<span class="${colorClass}">$1</span>`);
  });

  return text;
}
