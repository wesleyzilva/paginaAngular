import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.html',
  styleUrls: ['./whatsapp-button.scss']
})
export class WhatsappButton {
  @Output() startTourRequest = new EventEmitter<void>();

}