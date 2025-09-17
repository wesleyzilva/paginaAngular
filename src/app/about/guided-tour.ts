import { Component, OnInit, OnDestroy, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GuidedTourService, TourStep } from './guided-tour.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-guided-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guided-tour.html',
  styleUrls: ['../guided/guided-tour.scss'],
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ]),
    ])
  ]
})
export class GuidedTourComponent implements OnInit, OnDestroy {
  isActive = false;
  currentStep: TourStep | null = null;
  totalSteps = 0;
  currentStepIndex = 0;

  highlightStyle: any = {};
  tooltipStyle: any = {};
  tooltipPositionClass = 'is-bottom';

  private tourSubscription: Subscription;

  constructor(
    public tourService: GuidedTourService,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    this.tourSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.tourSubscription.add(
      this.tourService.tourActive$.subscribe(isActive => {
        this.isActive = isActive;
        this.renderer.setStyle(document.body, 'overflow', isActive ? 'hidden' : 'auto');
        if (isActive) this.updateStep();
        this.cdr.detectChanges();
      })
    );

    this.tourSubscription.add(
      this.tourService.currentStepIndex$.subscribe(index => {
        this.currentStepIndex = index;
        if (this.isActive) this.updateStep();
      })
    );

    this.totalSteps = this.tourService.getSteps().length;
  }

  ngOnDestroy(): void {
    this.tourSubscription.unsubscribe();
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

  updateStep(): void {
    this.currentStep = this.tourService.getCurrentStep();
    if (!this.currentStep?.selector) {
      this.highlightStyle = { display: 'none' };
      return;
    }

    const targetElement = document.querySelector(this.currentStep.selector) as HTMLElement;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

      setTimeout(() => {
        const targetRect = targetElement.getBoundingClientRect();
        const padding = 10;

        this.highlightStyle = {
          width: `${targetRect.width + padding}px`,
          height: `${targetRect.height + padding}px`,
          top: `${targetRect.top - padding / 2}px`,
          left: `${targetRect.left - padding / 2}px`,
        };

        this.calculateTooltipPosition(targetRect);
        this.cdr.detectChanges();
      }, 350);
    }
  }

  calculateTooltipPosition(targetRect: DOMRect): void {
    const position = this.currentStep?.position || 'bottom';
    this.tooltipPositionClass = `is-${position}`;

    const top = position === 'top' ? targetRect.top - 20 : targetRect.bottom + 20;
    const left = targetRect.left + targetRect.width / 2;

    this.tooltipStyle = { top: `${top}px`, left: `${left}px`, opacity: 1 };
  }

  next = (): void => this.tourService.nextStep();
  prev = (): void => this.tourService.previousStep();
  skip = (): void => this.tourService.endTour();
}