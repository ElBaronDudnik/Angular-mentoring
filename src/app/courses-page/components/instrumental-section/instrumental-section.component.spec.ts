import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalSectionComponent } from './instrumental-section.component';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-addition',
  template: ''
})
class MockCourseAdditionComponent {
  @Output() addCourse = new EventEmitter();
}

@Component({
  selector: 'app-course-search',
  template: ''
})
class MockCourseSearchComponent {
  @Output() search = new EventEmitter();
}

describe('InstrumentalSectionComponent', () => {
  let component: InstrumentalSectionComponent;
  let fixture: ComponentFixture<InstrumentalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstrumentalSectionComponent,
        MockCourseSearchComponent,
        MockCourseAdditionComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addCourse event', () => {
    const spy = spyOn(component.addCourse, 'emit');

    const courseAdd = fixture.debugElement.query(By.directive(MockCourseAdditionComponent));
    const courseAddInstance = courseAdd.componentInstance;

    courseAddInstance.addCourse.emit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit search event', () => {
    const spy = spyOn(component.search, 'emit');

    const courseSearch = fixture.debugElement.query(By.directive(MockCourseSearchComponent));
    const courseSearchInstance = courseSearch.componentInstance;

    courseSearchInstance.search.emit('search');
    expect(spy).toHaveBeenCalledWith('search');
  });
});
