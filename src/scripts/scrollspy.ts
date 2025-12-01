console.log("[scrollspy.ts]");

// --------------------
// MOBILE MENU
// --------------------
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Abrir/cerrar en mobile
mobileToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// Cerrar menú al hacer click
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

// --------------------
// DESKTOP UNDERLINE
// --------------------
const nav = document.getElementById("main-nav");
const links =
  document.querySelectorAll<HTMLAnchorElement>("nav#main-nav .nav-link") ?? [];
const underline = document.getElementById("nav-underline");

// Centrar underline debajo del link
function moveUnderlineTo(link: HTMLAnchorElement) {
  if (!underline || !nav) return;

  const linkRect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  // Posición dentro del nav
  const offsetLeft = linkRect.left - navRect.left;

  underline.style.width = `${linkRect.width}px`;
  underline.style.transform = `translateX(${offsetLeft}px)`;
}

// --------------------
// SCROLLSPY
// --------------------
const sections = Array.from(links)
  .map((link) =>
    document.getElementById(link.getAttribute("href")!.replace("#", ""))
  )
  .filter(Boolean) as HTMLElement[];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(
        `nav#main-nav a.nav-link[href="#${id}"]`
      );

      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active-link"));
        link?.classList.add("active-link");
        if (link) moveUnderlineTo(link);
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));

// Posicionar underline al inicio
window.addEventListener("load", () => {
  const first = links[0];
  if (first) moveUnderlineTo(first);
});

const navbar = document.getElementById("navbar");
const SHRINK_THRESHOLD = 10;
function handleNavbarShrink() {
  if (!navbar) return;

  if (window.scrollY > SHRINK_THRESHOLD) {
    navbar.classList.add("navbar--shrink");
  } else {
    navbar.classList.remove("navbar--shrink");
  }
}

window.addEventListener("scroll", handleNavbarShrink);
handleNavbarShrink();
