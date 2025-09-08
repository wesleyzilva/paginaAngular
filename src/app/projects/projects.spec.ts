import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';
import { ProjectsComponent } from './projects.component';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects]
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projects);
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
