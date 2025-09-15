import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [], // Adicione CommonModule aqui se precisar de diretivas como *ngIf, *ngFor, etc.
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {

}
