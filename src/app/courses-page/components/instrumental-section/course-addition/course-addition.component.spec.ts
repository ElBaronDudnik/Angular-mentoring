import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdditionComponent } from './course-addition.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<app-course-addition (addCourse)="onAddCourse()"></app-course-addition>`
})
class TestHostComponent {
  onAddCourse() {
    console.log('Add course');
  }
}

describe('CourseAdditionComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CourseAdditionComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should proceed course addition', () => {
    const spy = spyOn(component, 'onAddCourse');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
