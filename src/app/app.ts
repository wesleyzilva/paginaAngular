import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { WhatsappButton } from './whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    About,
    Footer,
    WhatsappButton,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
