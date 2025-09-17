import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TourStep {
  selector: string; // CSS selector for the element to highlight
  title: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

@Injectable({
  providedIn: 'root'
})
export class GuidedTourService {
  private tourSteps: TourStep[] = [
    {
      selector: '.profile-name',
      title: 'Bem-vindo ao meu Portfólio!',
      content: 'Olá! Sou o Wesley Gomes. Este é um tour rápido para destacar algumas das minhas principais competências e projetos. Vamos começar?',
      position: 'bottom'
    },
    {
      selector: '#projects-section',
      title: 'Meus Projetos',
      content: 'Aqui você encontra uma seleção de projetos que demonstram minha experiência prática. Use os botões de navegação para explorar cada um deles.',
      position: 'left'
    },
    {
      selector: '#hard-skills-section',
      title: 'Competências Técnicas (Hard Skills)',
      content: 'Esta seção lista as tecnologias e metodologias com as quais tenho proficiência. A seguir, destacarei algumas delas.',
      position: 'right'
    },
    {
      selector: '#skill-java',
      title: 'Java',
      content: 'Com vasta experiência em Java, desenvolvi sistemas robustos e escaláveis, aplicando as melhores práticas de orientação a objetos e design patterns para soluções de backend complexas.',
      position: 'top'
    },
    {
      selector: '#skill-angular',
      title: 'Angular',
      content: 'Utilizo Angular para criar interfaces de usuário dinâmicas e responsivas. Este próprio portfólio foi construído com Angular, demonstrando minha habilidade em desenvolver single-page applications (SPAs) modernas.',
      position: 'top'
    },
    {
      selector: '#skill-aws',
      title: 'Amazon Web Services (AWS)',
      content: 'Tenho conhecimento sólido em serviços da AWS, utilizando a nuvem para implantar, gerenciar e escalar aplicações com alta disponibilidade e eficiência de custos.',
      position: 'bottom'
    },
    {
      selector: '#skill-cloud',
      title: 'Arquitetura em Nuvem',
      content: 'Desenvolvo e implemento arquiteturas de nuvem otimizadas, focadas em segurança, performance e resiliência, garantindo que as soluções de negócio prosperem no ambiente digital.',
      position: 'bottom'
    },
    {
      selector: '.social-links',
      title: 'Vamos nos Conectar!',
      content: 'Obrigado por fazer o tour! Sinta-se à vontade para se conectar comigo nas redes sociais ou explorar o restante do site.',
      position: 'top'
    }
  ];

  private tourActive = new BehaviorSubject<boolean>(false);
  private currentStepIndex = new BehaviorSubject<number>(0);

  tourActive$ = this.tourActive.asObservable();
  currentStepIndex$ = this.currentStepIndex.asObservable();

  startTour() {
    this.currentStepIndex.next(0);
    this.tourActive.next(true);
  }

  endTour() {
    this.tourActive.next(false);
  }

  nextStep() {
    this.currentStepIndex.value < this.tourSteps.length - 1 ? this.currentStepIndex.next(this.currentStepIndex.value + 1) : this.endTour();
  }

  previousStep() {
    if (this.currentStepIndex.value > 0) this.currentStepIndex.next(this.currentStepIndex.value - 1);
  }

  getSteps = (): TourStep[] => this.tourSteps;
  getCurrentStep = (): TourStep => this.tourSteps[this.currentStepIndex.value];
}