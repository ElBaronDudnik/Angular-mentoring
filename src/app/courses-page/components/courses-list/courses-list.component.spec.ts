import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

import { coursesMock } from '../../courses.mock';
import { By } from '@angular/platform-browser';
import { Component, Directive, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { CoursesService } from 'app/courses-page/services/courses.service';
import { Course } from 'app/courses-page/course.model';
import { FilterCoursesByNamePipe } from 'app/shared/pipes/filter-pipe/filter-courses-by-name.pipe';

@Pipe({name: 'durationPipe'})
class MockDurationPipe implements PipeTransform {
  transform(value: number): string {
    return 'value';
  }
}

@Pipe({name: 'orderCoursesByDate'})
class MockOrderCoursesByDatePipe implements PipeTransform {
  transform(courses: CourseInterface[]): CourseInterface[] {
    return courses;
  }
}

@Directive({
  selector: '[appBorderStyle]'
})
class MockBordeStyleDirective {}

@Component({
  selector: 'app-course-item',
  template: `<button (click) = "onEdit()">Edit</button>
             <button (click) = "onDelete()">Delete</button>`
})
class MockCourseItemComponent {
  @Input() course !: CourseInterface;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  onEdit = jasmine.createSpy('onEditSpy');
  onDelete = jasmine.createSpy('onDeleteSpy');
}

@Component({
  selector: 'app-instrumental-section',
  template: ''
})
class MockInstrumentalSectionComponent {
  @Output() addCourse = new EventEmitter();
  @Output() search = new EventEmitter();
  onAddCourse = jasmine.createSpy('onAddCourseSpy');
  onSearch = jasmine.createSpy('onSearchSpy');
}


describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesService: jasmine.SpyObj<CoursesService>;
  let filteredCourses: Course[];
  let filterCoursesByNamePipe: jasmine.SpyObj<FilterCoursesByNamePipe>;

  beforeEach(async(() => {
    filteredCourses = [{} as Course];
    coursesService = jasmine.createSpyObj('courseServiceSpy', [
      'getCoursesList',
      'removeItem'
    ]);
    filterCoursesByNamePipe = jasmine.createSpyObj('mySPy', ['transform']);
    filterCoursesByNamePipe.transform.and.returnValue(filteredCourses);

    coursesService.getCoursesList.and.returnValue(coursesMock);

    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        MockInstrumentalSectionComponent,
        MockCourseItemComponent,
        MockDurationPipe,
        MockOrderCoursesByDatePipe,
        MockBordeStyleDirective
      ],
      providers: [
        { provide: CoursesService, useFactory: () => coursesService },
      ]
    }).overrideComponent(CoursesListComponent, {
      set: {
        providers: [
          { provide: FilterCoursesByNamePipe, useValue: filterCoursesByNamePipe },
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get courses', () => {
    expect(component.courses).toBe(coursesMock);
  });

  it('should load more courses', () => {
    const consoleSpy = spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('.load-more');

    button.click();

    expect(consoleSpy).toHaveBeenCalledWith('Load More');
  });

  it('should delete course', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const courseItem = fixture.debugElement.query(By.directive(MockCourseItemComponent));
    const courseItemInstance = courseItem.componentInstance;
    const deletedCourseId = 2;
    courseItemInstance.delete.emit(deletedCourseId);
    expect(coursesService.removeItem).toHaveBeenCalledWith(deletedCourseId);
  });

  it('should edit course', () => {
    const consoleSpy = spyOn(console, 'log');

    const courseItem = fixture.debugElement.query(By.directive(MockCourseItemComponent));
    const courseItemInstance = courseItem.componentInstance;

    courseItemInstance.edit.emit();
    expect(consoleSpy).toHaveBeenCalledWith('Edit');
  });

  it('should add course', () => {
    const consoleSpy = spyOn(console, 'log');

    const courseInstrumental = fixture.debugElement.query(By.directive(MockInstrumentalSectionComponent));
    const courseInstrumentalInstance = courseInstrumental.componentInstance;

    courseInstrumentalInstance.addCourse.emit();
    expect(consoleSpy).toHaveBeenCalledWith('Add course');
  });

  it('should proceed course search', () => {
    const searchString = 'search';
    const courseInstrumental = fixture.debugElement.query(By.directive(MockInstrumentalSectionComponent));
    const courseInstrumentalInstance = courseInstrumental.componentInstance;
    courseInstrumentalInstance.search.emit(searchString);

    expect(component.filteredCourses).toEqual(filteredCourses);
  });
});
