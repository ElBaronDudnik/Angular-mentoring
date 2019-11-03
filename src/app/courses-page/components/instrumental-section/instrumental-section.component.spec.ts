import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalSectionComponent } from './instrumental-section.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CourseAdditionComponent} from './course-addition/course-addition.component';
import {By} from '@angular/platform-browser';
import {CourseSearchComponent} from './course-search/course-search.component';

describe('InstrumentalSectionComponent', () => {
  let component: InstrumentalSectionComponent;
  let fixture: ComponentFixture<InstrumentalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstrumentalSectionComponent,
        CourseSearchComponent,
        CourseAdditionComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should emit addCourse', () => {
    const spy = spyOn(component.addCourse, 'emit');

    const courseAdd = fixture.debugElement.query(By.directive(CourseAdditionComponent));
    const cmp = courseAdd.componentInstance;

    cmp.addCourse.emit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit search', () => {
    const spy = spyOn(component.search, 'emit');

    const courseSearch = fixture.debugElement.query(By.directive(CourseSearchComponent));
    const cmp = courseSearch.componentInstance;

    cmp.search.emit('search');
    expect(spy).toHaveBeenCalledWith('search');
  });
});
