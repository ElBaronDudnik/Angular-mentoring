import { BorderStyleDirective } from './border-style.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
      <div appBorderStyle [course]="course1"></div>
      <div appBorderStyle [course]="course2"></div>
      <div appBorderStyle [course]="course3"></div>`
})
class TestComponent {
  public now = new Date();
  public course1 = {
    id: 1,
    title: 'Video Course 1. Name Tag',
    duration: 72,
    creationDate: new Date(2017, 12, 11),
    description: `Learn about where`,
    topRated: true,
  };
  public course2 = {
    id: 2,
    title: 'Video Course 2. Name Tag',
    duration: 22,
    creationDate: this.now.setDate(this.now.getDate() - 5),
    description: `Learn about where you can.`
  };
  public course3 = {
    id: 3,
    title: 'Video Course 3. Name Tag',
    duration: 61,
    creationDate: this.now.setDate(this.now.getDate() + 7),
    description: `Learn.`
  };
}

describe('BorderStyleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let hostElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ BorderStyleDirective, TestComponent ]
    })
      .createComponent(TestComponent);

    fixture.detectChanges();
    hostElements = fixture.debugElement.queryAll(By.directive(BorderStyleDirective));
  });

  it('should borderColor be transparent by default', () => {
    const borderColor = hostElements[0].nativeElement.style.borderColor;
    expect(borderColor).toBe('');
  });

  it('should borderColor be green for fresh courses', () => {
    const borderColor = hostElements[1].nativeElement.style.borderColor;
    expect(borderColor).toBe('lightseagreen');
  });

  it('should borderColor be blue for upcoming courses', () => {
    const borderColor = hostElements[2].nativeElement.style.borderColor;
    expect(borderColor).toBe('cornflowerblue');
  });
});
