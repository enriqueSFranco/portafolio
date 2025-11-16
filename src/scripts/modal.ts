/**
 * Clase que gestiona la apertura y cierre de un modal,
 */
class ModalController {
    private modalElement: HTMLElement | null;
    private openButton: HTMLElement | null;
    private closeButton: HTMLElement | null;
    private isOpen: boolean = false;
  
    constructor(modalId: string, openBtnId: string, closeBtnId: string) {
      this.modalElement = document.getElementById(modalId);
      this.openButton = document.getElementById(openBtnId);
      this.closeButton = document.getElementById(closeBtnId);
  
      if (!this.modalElement || !this.openButton || !this.closeButton) {
        console.error('Modal initialization failed: One or more required elements were not found.');
        return;
      }
      
      this.openButton.addEventListener('click', this.open.bind(this));
      this.closeButton.addEventListener('click', this.close.bind(this));
      this.modalElement.addEventListener('click', this.handleOutsideClick.bind(this));
      document.addEventListener('keydown', this.handleEscapeKey.bind(this));
      
      // Asegurar que el modal esté oculto inicialmente
      this.modalElement.classList.add('hidden');
    }
  
    /**
     * Actualiza el estado y la vista para mostrar el modal.
     */
    public open(): void {
      if (!this.modalElement || this.isOpen) return;
  
      this.isOpen = true;
      this.modalElement.classList.remove('hidden');
      this.modalElement.classList.add('flex');
      
      // Mejoras de UX/Accesibilidad
      document.body.style.overflow = 'hidden'; // Bloquear scroll del body
      this.modalElement.focus();
      
    }
  
    /**
     * Actualiza el estado y la vista para ocultar el modal.
     */
    public close(): void {
      if (!this.modalElement || !this.isOpen) return;
  
      this.isOpen = false;
      this.modalElement.classList.add('hidden');
      this.modalElement.classList.remove('flex');
      // Restaurar UX/Accesibilidad
      document.body.style.overflow = '';
      this.openButton?.focus(); // Devolver el foco al botón que lo abrió
    }
    
    /**
     * Maneja el clic en el fondo oscuro para cerrar el modal.
     */
    private handleOutsideClick(event: MouseEvent): void {
      if (this.isOpen && event.target === this.modalElement) {
        this.close();
      }
    }
  
    /**
     * Maneja el cierre del modal con la tecla ESC.
     */
    private handleEscapeKey(event: KeyboardEvent): void {
      if (event.key === 'Escape' && this.isOpen) {
        this.close();
      }
    }
  }
  
  // Inicialización: Crear una instancia de la clase al cargar la página.
  // Usamos DOMContentLoaded para asegurar que todos los elementos existen.
  document.addEventListener('DOMContentLoaded', () => {
    new ModalController(
      'contact-modal',      // ID del contenedor del modal
      'floating-button',   // ID del botón flotante
      'close-modal-button' // ID del botón de cierre interno
    );
  });