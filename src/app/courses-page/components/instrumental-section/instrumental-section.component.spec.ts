import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalSectionComponent } from './instrumental-section.component';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-addition',
  template: ``
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

@Component({
  template: `
      <app-instrumental-section
              (addCourse)="onAddCourse()"
              (search)="onSearch($event)">
      </app-instrumental-section>`
})
class TestHostComponent {
  onSearch(value: string): void {
    console.log(value);
  }
  onAddCourse() {
    console.log('Add course');
  }
}

describe('InstrumentalSectionComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstrumentalSectionComponent,
        TestHostComponent,
        MockCourseSearchComponent,
        MockCourseAdditionComponent
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

  it('should emit addCourse event', () => {
    const spy = spyOn(component, 'onAddCourse');

    const courseAdd = fixture.debugElement.query(By.directive(MockCourseAdditionComponent));
    const courseAddInstance = courseAdd.componentInstance;

    courseAddInstance.addCourse.emit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit search event', () => {
    const spy = spyOn(component, 'onSearch');

    const courseSearch = fixture.debugElement.query(By.directive(MockCourseSearchComponent));
    const courseSearchInstance = courseSearch.componentInstance;

    courseSearchInstance.search.emit('search');
    expect(spy).toHaveBeenCalled();
  });
});
