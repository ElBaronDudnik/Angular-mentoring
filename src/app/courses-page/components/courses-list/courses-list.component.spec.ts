import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

import { coursesMock } from '../../courses.mock';
import { InstrumentalSectionComponent } from '../instrumental-section/instrumental-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DurationPipe} from '../../../shared/pipes/duration-pipe/duration-pipe.pipe';
import {By} from '@angular/platform-browser';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        InstrumentalSectionComponent,
        CourseItemComponent,
        DurationPipe
      ],
      providers: [
        InstrumentalSectionComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assing course varible after ngOnInit lifecycle hook', () => {
    component.courses = [];
    component.ngOnInit();

    expect(component.courses).toBe(coursesMock);
  });

  it('should emit console.log clicking on getCourses with corresponding text', () => {
    const consoleSpy = spyOn(console, 'log');
    component.getCourses();

    expect(consoleSpy).toHaveBeenCalledWith('Courses: ');
  });

  it('should emit console.log clicking on LoadMore button with corresponding text', () => {
    const consoleSpy = spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('.load-more');

    button.click();

    expect(consoleSpy).toHaveBeenCalledWith('Load More');
  });

  it('should onDelete be called with appropriate id', () => {
    spyOn(component, 'onDelete');

    const courseItem = fixture.debugElement.query(By.directive(CourseItemComponent));
    const cmp = courseItem.componentInstance;

    cmp.delete.emit(2);
    expect(component.onDelete).toHaveBeenCalledWith(2);
  });

  it('should onEdit be called', () => {
    spyOn(component, 'onEdit');

    const courseItem = fixture.debugElement.query(By.directive(CourseItemComponent));
    const cmp = courseItem.componentInstance;

    cmp.edit.emit();
    expect(component.onEdit).toHaveBeenCalled();
  });

  it('should onAddCourse be called', () => {
    spyOn(component, 'onAddCourse');

    const courseInstrumental = fixture.debugElement.query(By.directive(InstrumentalSectionComponent));
    const cmp = courseInstrumental.componentInstance;

    cmp.addCourse.emit()
    expect(component.onAddCourse).toHaveBeenCalled();
  });

  it('should onSearch be called', () => {
    spyOn(component, 'onSearch');

    const courseInstrumental = fixture.debugElement.query(By.directive(InstrumentalSectionComponent));
    const cmp = courseInstrumental.componentInstance;

    cmp.search.emit('search')
    expect(component.onSearch).toHaveBeenCalledWith('search');
  });
});
