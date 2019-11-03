import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdditionComponent } from './course-addition.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CourseAdditionComponent', () => {
  let component: CourseAdditionComponent;
  let fixture: ComponentFixture<CourseAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAdditionComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addCourse', () => {
    const spy = spyOn(component.addCourse, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
