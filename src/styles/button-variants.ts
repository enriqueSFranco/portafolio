export const BUTTON_BASE = `
  inline-flex select-none items-center gap-2
  font-medium text-sm rounded-[var(--radius-md)]
  px-4 py-2 transition-all
  active:scale-[0.97]
  btn-ripple btn-elevate
`;

export const BUTTON_VARIANTS = {
  primary: `
    text-white border border-[var(--wolt-blue)]
    bg-[var(--wolt-blue)]
    hover:bg-[var(--wolt-blue-light)]
    dark:border-[var(--wolt-blue-light)]
  `,

  outline: `
    border border-[var(--wolt-blue)]
    text-[var(--wolt-blue)]
    bg-transparent
    hover:bg-[var(--wolt-blue)]/10
  `,

  subtle: `
    bg-black/5 dark:bg-white/5
    text-[var(--text-dark)] dark:text-[var(--text-light)]
    border border-transparent
    hover:bg-black/10 dark:hover:bg-white/10
  `,

  ghost: `
    bg-transparent border-none shadow-none
    text-black/70 dark:text-white/70
    hover:bg-black/5 dark:hover:bg-white/5
  `,

  chip: `
    px-3 py-1 rounded-full text-xs shadow-none
    text-[var(--wolt-blue)]
    border border-[var(--wolt-blue)]/40
    hover:bg-[var(--wolt-blue)]/10
  `,

  iconBubble: `
    bg-white/10 text-white px-3 py-1.5 rounded-full
    border border-white/20
    hover:bg-white/15 hover:border-white/30
    dark:bg-[#1d2834] dark:border-gray-700
  `,
};
