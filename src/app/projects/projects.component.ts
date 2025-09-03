import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projetos = [
    {
      titulo: 'Projeto 1: Vulnerabilidades em parque de 110 aplicações Angular e Java',
      escopo: 'Redução de vulnerabilidades em aplicação em tempo record com squad de terceiros sem conhecimento no negócio e prazo e budget estipulado para terminar.',
      duracao: '9 meses',
      equipe: '1 squad contendo 1 SRE, 3 desenvolvedores, 1 QA, 1 Arquiteto',
      conquistas: 'Redução de 1200 para 300 vulnerabilidades, zerando as críticas e altas, implantação do DevSecOps com a utilização do Veracode, Rapid 7, Automação de testes e criação e ajuste em esteira CI/CD.',
      destaques: 'Coordenação direta no modelo ágil sem scrum master com reports executivos.',
      links: [{ url: 'https://flexpag.com/', texto: 'Flexpag M&A Serasa Experian' }, { url: 'https://www.linkedin.com/in/matheus-benicio-b55a4a8/', texto: 'Referência: Matheus Benicio' }],
      skills: ['Java', 'Angular', 'Veracode', 'Rapid 7', 'CI/CD', 'Processos Ágeis', 'Liderança', 'Resolução de Problemas']
    },
    // ... adicione os outros projetos aqui
  ];
}