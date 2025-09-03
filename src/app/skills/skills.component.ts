import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importar o CommonModule

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true, // 2. Marcar como standalone
  imports: [CommonModule], // 3. Adicionar CommonModule aos imports
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Gestão e Estratégia',
      skills: [
        { name: 'Gestão de Budget de Projeto' },
        { name: 'ITIL Framework' },
        { name: 'CAPEX & OPEX' },
        { name: 'Desenvolvimento de autonomia da equipe' },
      ],
    },
    {
      title: 'Arquitetura e Desenvolvimento',
      skills: [
        { name: 'Desenho da arquitetura das aplicações' },
        { name: 'Desenvolvimento focado em ambiente seguro' },
        { name: 'Documentação dinâmica e viva' }, // Pequena correção aqui
      ],
    },
    {
      title: 'Qualidade e Operações',
      skills: [
        { name: 'Automação de testes' },
        { name: 'Monitoramento e Observabilidade' },
      ],
    },
  ];
}
