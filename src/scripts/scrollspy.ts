console.log("[scrollspy.ts]");

// MOBILE MENU
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

// DESKTOP UNDERLINE
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

// SCROLLSPY
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
  
      // Actualizar UI (sin parpadeo)
      const link = document.querySelector(
        `nav#main-nav a.nav-link[href="#${id}"]`
      );
  
      links.forEach((l) => l.classList.remove("active-link"));
      link?.classList.add("active-link");
      if (link) moveUnderlineTo(link);
  
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
  );

  if (activeLink) {
    links.forEach(l => l.classList.remove("active-link"));
    activeLink.classList.add("active-link");
    moveUnderlineTo(activeLink);
  }
}

window.addEventListener("load", setInitialActiveSection);
