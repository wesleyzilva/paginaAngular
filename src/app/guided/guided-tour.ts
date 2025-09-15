import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TourStep {
  selector: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-guided-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guided-tour.html',
  styleUrls: ['./guided-tour.scss']
})
export class GuidedTour implements AfterViewInit {
  @ViewChild('tooltipElement') tooltipElement!: ElementRef;

  steps: TourStep[] = [
    { selector: 'app-header', title: 'Contact & Location', content: 'Here in the header, you can find my contact information and direct links to my professional networks.' },
    { selector: 'app-footer', title: 'Page Information', content: 'The footer shows the number of visits and the date of the last page update.' },
    { selector: '.floating-button.pdf-carta', title: 'Cover Letter', content: 'Click here to download my cover letter in PDF format.' },
    { selector: 'app-gallery', title: 'My Projects', content: 'In this section, you can browse some of the projects I have worked on.' },
    { selector: 'app-comentarios', title: 'Leave a Comment', content: 'Feel free to leave your name and a comment about the portfolio.' }
  ];

  currentStepIndex = -1;
  isTourActive = false;
  isTooltipAbove = false;
  isTooltipCentered = false;
  isDragging = false;
  highlightStyle = {};
  tooltipStyle = {};

  private dragOffset = { x: 0, y: 0 };

  ngAfterViewInit() {
    // The component is ready to be used.
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isTourActive) {
      this.positionElements(this.currentStepIndex);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isTourActive) {
      this.endTour();
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onDragMove(event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }

    const newLeft = event.clientX - this.dragOffset.x;
    const newTop = event.clientY - this.dragOffset.y;

    this.tooltipStyle = {
      ...this.tooltipStyle,
      left: `${newLeft}px`,
      top: `${newTop}px`,
      // Override transform to position from top-left corner and remove any vertical centering
      transform: 'none',
    };
    // Disable automatic positioning flags while dragging
    this.isTooltipAbove = false;
    this.isTooltipCentered = false;
  }

  @HostListener('window:mouseup')
  onDragEnd() {
    if (this.isDragging) {
      this.isDragging = false;
      // The position will reset on the next/previous step or on window resize.
      // This allows the user to move the tooltip temporarily if it's in the way.
    }
  }

  public startTour() {
    this.isTourActive = true;
    this.currentStepIndex = 0;
    this.positionElements(this.currentStepIndex);
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.positionElements(this.currentStepIndex);
    } else {
      this.endTour();
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.positionElements(this.currentStepIndex);
    }
  }

  endTour() {
    this.isTourActive = false;
    this.currentStepIndex = -1;
    this.isTooltipCentered = false;
  }

  onDragStart(event: MouseEvent) {
    // Only drag with the left mouse button
    if (event.button !== 0) {
      return;
    }

    this.isDragging = true;
    const tooltipRect = this.tooltipElement.nativeElement.getBoundingClientRect();

    this.dragOffset = {
      x: event.clientX - tooltipRect.left,
      y: event.clientY - tooltipRect.top,
    };

    // Prevent text selection while dragging
    event.preventDefault();
  }

  private positionElements(stepIndex: number) {
    if (stepIndex < 0 || stepIndex >= this.steps.length) {
      this.endTour();
      return;
    }

    const step = this.steps[stepIndex];
    const targetElement = document.querySelector(step.selector) as HTMLElement;

    if (!targetElement) {
      console.error(`Tour element not found: ${step.selector}`);
      this.nextStep(); // Skips to the next step if the element is not found.
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

    // Delay to allow smooth scrolling to finish
    setTimeout(() => {
      const targetRect = targetElement.getBoundingClientRect();
      const padding = 10;

      this.highlightStyle = {
        top: `${targetRect.top - padding}px`,
        left: `${targetRect.left - padding}px`,
        width: `${targetRect.width + (padding * 2)}px`,
        height: `${targetRect.height + (padding * 2)}px`,
      };

      // Use requestAnimationFrame to ensure the DOM has been updated with the new content
      // and the tooltip is ready to be measured.
      requestAnimationFrame(() => {
        const tooltipEl = this.tooltipElement.nativeElement as HTMLElement;
        const tooltipHeight = tooltipEl.offsetHeight;
        const tooltipWidth = tooltipEl.offsetWidth;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const horizontalMargin = 15;
        const paddingWithArrow = padding + 10; // 10px for arrow and gap

        // --- Vertical Positioning ---
        let tooltipTop: number;
        this.isTooltipAbove = false;
        this.isTooltipCentered = false;

        // If target is in the bottom half of the screen, prefer to show above.
        if (targetRect.top > viewportHeight / 2) {
          if (targetRect.top >= tooltipHeight + paddingWithArrow) {
            // Position above
            this.isTooltipAbove = true;
            tooltipTop = targetRect.top - padding;
          } else {
            // Not enough space, center it
            this.isTooltipCentered = true;
            tooltipTop = viewportHeight / 2;
          }
        } else { // Otherwise, prefer to show below.
          if (viewportHeight - targetRect.bottom >= tooltipHeight + paddingWithArrow) {
            // Position below
            tooltipTop = targetRect.bottom + padding;
          } else {
            // Not enough space, center it
            this.isTooltipCentered = true;
            tooltipTop = viewportHeight / 2;
          }
        }

        // --- Horizontal Positioning ---
        let tooltipLeft = targetRect.left + (targetRect.width / 2);

        // Clamp horizontal position to viewport
        if (tooltipLeft + tooltipWidth / 2 > viewportWidth - horizontalMargin) {
          tooltipLeft = viewportWidth - horizontalMargin - tooltipWidth / 2;
        }
        if (tooltipLeft - tooltipWidth / 2 < horizontalMargin) {
          tooltipLeft = horizontalMargin + tooltipWidth / 2;
        }

        this.tooltipStyle = {
          top: `${tooltipTop}px`,
          left: `${tooltipLeft}px`,
          opacity: 1,
        };
      });
    }, 350);
  }
}