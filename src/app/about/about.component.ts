import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    console.log('O componente "Sobre" (AboutComponent) foi inicializado.');
    console.log('Verificando os caminhos dos assets no console do navegador...');
    console.log('-> Imagem esperada: assets/wesley.jpg');
    console.log('-> Carta de Apresentação esperada: assets/Wes_CartaApresentacaoWesleyCoord_IT.pdf');
    console.log('-> Currículo esperado: assets/Wes_CV_PT_Coord_IT_Desenv_Dados.pdf');
  }
}