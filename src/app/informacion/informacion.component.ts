import { Component } from '@angular/core';
import { socialDavid, socialJesus } from '../../../data';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {

  socialDavid = socialDavid;
  socialJesus = socialJesus;

}
