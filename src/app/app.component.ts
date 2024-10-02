import { Component, HostListener, AfterViewInit   } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollbarComponent } from "./scrollbar/scrollbar.component";
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollbarComponent, LightgalleryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theancientgate';

  flashlightRadius: number = 400; // Radio de la luz
  filterIntensity: number = 70; // Intensidad del desenfoque

  

  ngAfterViewInit() {
    this.setupFlashlight();
  }

  setupFlashlight() {
    const illuminatedItem = document.querySelector('.illuminated-item') as HTMLElement;
    const flashlight = document.querySelector('.flashlight') as HTMLElement;
    const blurFilter = document.querySelector('#blur-filter feGaussianBlur') as SVGFEGaussianBlurElement;

    // Ajustar el desenfoque del filtro y el tamaño de la luz
    blurFilter.setAttribute('stdDeviation', this.filterIntensity.toString());
    flashlight.style.width = `${this.flashlightRadius}px`;
    flashlight.style.height = `${this.flashlightRadius}px`;

    const flashlightOffset = this.flashlightRadius / 2;

    const followMouseFlashlight = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top } = illuminatedItem.getBoundingClientRect();
      flashlight.style.left = `${clientX - left - flashlightOffset}px`;
      flashlight.style.top = `${clientY - top - flashlightOffset}px`;
    };

    illuminatedItem.addEventListener('mousemove', followMouseFlashlight);
    //illuminatedItem.addEventListener('touchmove', followMouseFlashlight);
  }
  
}
