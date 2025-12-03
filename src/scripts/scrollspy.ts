console.log("[scrollspy.ts]");

// MOBILE MENU
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function openMenu() {
  if (!mobileMenu) return
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    mobileMenu.classList.add("show");
  });
}

function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("show");

  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 380); // coincide con tu CSS

  document.body.style.overflow = "visible";
}

// Abrir/cerrar en mobile
mobileToggle?.addEventListener("click", () => {
  if (!mobileMenu) return;
  mobileMenu.classList.contains("show") ? closeMenu() : openMenu();
});

// Cerrar menú al hacer click
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    closeMenu();
  });
});

// ------------------------------
// DESKTOP NAV INDICATOR (TESLA STYLE)
// ------------------------------

const nav = document.getElementById("main-nav");
const links =
  document.querySelectorAll<HTMLAnchorElement>("nav#main-nav .nav-link") ?? [];
const indicator = document.getElementById("nav-indicator");

// Coloca el indicador debajo del link
function moveIndicatorTo(link: HTMLAnchorElement) {
  if (!indicator || !nav) return;

  const linkRect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  const offsetLeft = linkRect.left - navRect.left;

  indicator.style.width = `${linkRect.width}px`;
  indicator.style.transform = `translateX(${offsetLeft}px)`;
  indicator.style.opacity = "0.25";
}

// Hover → mueve el indicador
links.forEach((link) => {
  link.addEventListener("mouseenter", () => moveIndicatorTo(link));
});

// Al salir del nav → vuelve al activo
nav?.addEventListener("mouseleave", () => {
  const active = nav.querySelector(".active-link") as HTMLAnchorElement | null;
  if (active) moveIndicatorTo(active);
  else if (indicator) indicator.style.opacity = "0";
});

// Click → marca activo + mueve indicador
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
    moveIndicatorTo(link);
  });
});

// ------------------------------
// SCROLLSPY
// ------------------------------

const sections = Array.from(links)
  .map((link) =>
    document.getElementById(link.getAttribute("href")!.replace("#", ""))
  )
  .filter(Boolean) as HTMLElement[];

let currentSectionId = "";

const observer = new IntersectionObserver(
  (entries) => {
    let bestEntry: IntersectionObserverEntry | null = null;

    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
        bestEntry = entry;
      }
    }

    if (!bestEntry) return;

    const id = bestEntry.target.id;

    if (currentSectionId === id) return;
    currentSectionId = id;

    const link = document.querySelector(
      `nav#main-nav a.nav-link[href="#${id}"]`
    ) as HTMLAnchorElement | null;

    links.forEach((l) => l.classList.remove("active-link"));
    link?.classList.add("active-link");

    if (link) moveIndicatorTo(link);

    if (location.hash !== `#${id}`) {
      history.replaceState(null, "", `#${id}`);
    }
  },
  {
    threshold: [0.25, 0.5, 0.75],
    rootMargin: "-20% 0px",
  }
);

sections.forEach((section) => observer.observe(section));

// ------------------------------
// INICIALIZACIÓN
// ------------------------------

window.addEventListener("load", () => {
  const active = nav?.querySelector(".active-link") as HTMLAnchorElement | null;
  if (active) moveIndicatorTo(active);
  else if (links[0]) moveIndicatorTo(links[0]);
});


// Detecta sección inicial
function setInitialActiveSection() {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  let currentSection = sections[0];

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY;

    if (offsetTop <= scrollPos) {
      currentSection = section;
    }
  }

  const activeLink = document.querySelector(
    `nav#main-nav a.nav-link[href="#${currentSection.id}"]`
  ) as HTMLAnchorElement | null;

  if (activeLink) {
    links.forEach((l) => l.classList.remove("active-link"));
    activeLink.classList.add("active-link");
    moveIndicatorTo(activeLink);
  }
}

window.addEventListener("load", setInitialActiveSection);
