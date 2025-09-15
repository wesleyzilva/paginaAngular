import { Component, ViewChild } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Comentarios } from './comentarios/comentarios';
import { Footer } from './footer/footer';
import { WhatsappButton } from './whatsapp-button/whatsapp-button';
import { GuidedTour } from './guided/guided-tour';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    About,
    Gallery,
    Comentarios,
    Footer,
    WhatsappButton,
    GuidedTour,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  @ViewChild(GuidedTour) guidedTour!: GuidedTour;

}
