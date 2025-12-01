/**
 * Controlador del modal con animaciones estilo Wolt.
 */
class ModalController {
  private modalElement: HTMLElement | null;
  private panelElement: HTMLElement | null;
  private openButton: HTMLElement | null;
  private closeButton: HTMLElement | null;
  private isOpen: boolean = false;

  constructor(modalId: string, openBtnId: string, closeBtnId: string) {
    this.modalElement = document.getElementById(modalId);
    this.panelElement = document.getElementById(`${modalId}-panel`);
    this.openButton = document.getElementById(openBtnId);
    this.closeButton = document.getElementById(closeBtnId);

    if (!this.modalElement || !this.panelElement || !this.openButton || !this.closeButton) {
      console.error("Modal initialization failed: required elements not found.");
      return;
    }

    // Eventos
    this.openButton.addEventListener("click", this.open.bind(this));
    this.closeButton.addEventListener("click", this.close.bind(this));
    this.modalElement.addEventListener("click", this.handleOutsideClick.bind(this));
    document.addEventListener("keydown", this.handleEscapeKey.bind(this));

    // Asegurar modal oculto
    this.modalElement.classList.add("hidden");
  }

  /**
   * Abre el modal con animación Wolt.
   */
  public open(): void {
    if (!this.modalElement || !this.panelElement || this.isOpen) return;

    this.isOpen = true;

    // Mostrar modal
    this.modalElement.classList.remove("hidden");
    this.modalElement.classList.add("flex");

    // Animaciones Wolt — esperar un frame para activar transitions
    requestAnimationFrame(() => {
      this.modalElement!.classList.add("opacity-100");

      this.panelElement!.classList.remove("scale-95", "opacity-0");
      this.panelElement!.classList.add("scale-100", "opacity-100");
    });

    // UX
    document.body.style.overflow = "hidden";
    this.panelElement.setAttribute("tabindex", "-1");
    this.panelElement.focus();
  }

  /**
   * Cierra el modal con salida animada Wolt.
   */
  public close(): void {
    if (!this.modalElement || !this.panelElement || !this.isOpen) return;

    this.isOpen = false;

    // Animación de cierre
    this.modalElement.classList.remove("opacity-100");

    this.panelElement.classList.add("scale-95", "opacity-0");
    this.panelElement.classList.remove("scale-100", "opacity-100");

    // Esperar la animación antes de ocultar
    setTimeout(() => {
      this.modalElement!.classList.add("hidden");
      this.modalElement!.classList.remove("flex");
    }, 250);

    document.body.style.overflow = "";
    this.openButton?.focus();
  }

  /**
   * Cerrar al hacer clic fuera.
   */
  private handleOutsideClick(event: MouseEvent): void {
    if (this.isOpen && event.target === this.modalElement) {
      this.close();
    }
  }

  /**
   * Cerrar con ESC.
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === "Escape" && this.isOpen) {
      this.close();
    }
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  new ModalController(
    "contact-modal",      // Modal overlay
    "floating-button",    // Botón que abre
    "close-modal-button"  // Botón de cerrar (la X)
  );
});
