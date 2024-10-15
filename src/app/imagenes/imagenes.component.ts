import { Component, ViewChild, ElementRef } from '@angular/core';
import { imagenes } from '../../../data';
import { CommonModule, NgClass, NgIf } from '@angular/common'; // Importa CommonModule



@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss'
})
export class ImagenesComponent {

  @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef;

  imagenes = imagenes;

  constructor(){}

  ngOnInit() {
    
  }

  isLightboxOpen = false; // Indica si el lightbox está abierto
  currentIndex = 0;       // Índice de la imagen actual
  currentImage: any = null; // Imagen actual que se muestra en el lightbox

  // Método para abrir el lightbox
  openLightbox(index: number) {
    this.currentIndex = index-1;
    this.currentImage = this.imagenes[this.currentIndex];
    this.isLightboxOpen = true;
    this.scrollToCurrentImage();
  }

  // Método para cerrar el lightbox
  closeLightbox() {
    this.isLightboxOpen = false;
  }

  // Método para ir a la imagen anterior
  prevImage(event: Event) {
    event.stopPropagation(); // Evita que se cierre el lightbox al hacer clic en los controles
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.imagenes.length - 1;
    this.currentImage = this.imagenes[this.currentIndex];
    this.scrollToCurrentImage();
  }

  // Método para ir a la siguiente imagen
  nextImage(event: Event) {
    event.stopPropagation(); // Evita que se cierre el lightbox al hacer clic en los controles
    this.currentIndex = (this.currentIndex < this.imagenes.length - 1) ? this.currentIndex + 1 : 0;
    this.currentImage = this.imagenes[this.currentIndex];
    this.scrollToCurrentImage();
  }

  private scrollToCurrentImage(): void {
    // Asegúrate de que thumbnailContainer está definido
    if (this.thumbnailContainer) {
        const container = this.thumbnailContainer.nativeElement;
        const selectedImage = container.querySelector('img.border-white'); // Selecciona la imagen con borde blanco

        if (selectedImage) {
            selectedImage.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }
  }
}
