import { Component, HostListener, AfterViewInit   } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollbarComponent } from "./scrollbar/scrollbar.component";
import { ImagenesComponent } from "./imagenes/imagenes.component";
import { DescargaComponent } from "./descarga/descarga.component";
import { VideosComponent } from "./videos/videos.component";
import { InformacionComponent } from "./informacion/informacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollbarComponent, ImagenesComponent, DescargaComponent, VideosComponent, InformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'theancientgate';

  flashlightRadius: number = 400; // Radio de la luz
  filterIntensity: number = 70; // Intensidad del desenfoque
  lastMouseX: number = 0; // Posición del ratón X
  lastMouseY: number = 0; // Posición del ratón Y

  ngAfterViewInit() {
    this.setupFlashlight();
  }

  setupFlashlight() {
    const flashlight = document.querySelector('.flashlight') as HTMLElement;
    const blurFilter = document.querySelector('#blur-filter feGaussianBlur') as SVGFEGaussianBlurElement;

    // Ajustar el desenfoque del filtro y el tamaño de la luz
    blurFilter.setAttribute('stdDeviation', this.filterIntensity.toString());
    flashlight.style.width = `${this.flashlightRadius}px`;
    flashlight.style.height = `${this.flashlightRadius}px`;

    const flashlightOffset = this.flashlightRadius / 2;

    // Mover la linterna
    const moveFlashlight = (x: number, y: number) => {
      flashlight.style.left = `${x - flashlightOffset}px`;
      flashlight.style.top = `${y - flashlightOffset}px`;
    };

    // Evento para seguir el cursor
    const followMouseFlashlight = (event: MouseEvent) => {
      this.lastMouseX = event.pageX; // Usar pageX para incluir el scroll horizontal
      this.lastMouseY = event.pageY; // Usar pageY para incluir el scroll vertical
      moveFlashlight(this.lastMouseX, this.lastMouseY);
    };

    // Evento para manejar el scroll
    const updateFlashlightOnScroll = () => {
      moveFlashlight(this.lastMouseX, this.lastMouseY);
    };

    // Escuchar eventos de ratón y scroll
    document.addEventListener('mousemove', followMouseFlashlight);
    window.addEventListener('scroll', updateFlashlightOnScroll);
  }
}
