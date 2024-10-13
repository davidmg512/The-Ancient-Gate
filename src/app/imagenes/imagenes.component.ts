import { Component } from '@angular/core';
import { imagenes } from '../../../data';
import { CommonModule } from '@angular/common'; // Importa CommonModule



@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss'
})
export class ImagenesComponent {

  imagenes = imagenes;

  constructor(){}

  ngOnInit() {
    
  }
}
