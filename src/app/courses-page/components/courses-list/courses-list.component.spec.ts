import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

import { coursesMock } from '../../courses.mock';
import { By } from '@angular/platform-browser';
import { Component, Directive, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { CoursesService } from '../../services/courses.service';
import { CoursesServiceStub } from './courses.service.mock';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        MockInstrumentalSectionComponent,
        MockCourseItemComponent,
        MockDurationPipe,
        MockOrderCoursesByDatePipe,
        MockBordeStyleDirective,
      ],
      providers: [{provide: CoursesService, useClass: CoursesServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should assing course varible after ngOnInit lifecycle hook', () => {
    component.courses = [];
    component.ngOnInit();

    expect(component.courses).toBe(coursesMock);
  });

  it('should get courses', () => {
    component.getCourses();

    expect(component.courses).toEqual(coursesMock);
  });

  it('should load more courses', () => {
    const consoleSpy = spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('.load-more');

    button.click();

    expect(consoleSpy).toHaveBeenCalledWith('Load More');
  });

  it('should delete course', () => {
    const consoleSpy = spyOn(console, 'log');
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);

    const courseItem = fixture.debugElement.query(By.directive(MockCourseItemComponent));
    const courseItemInstance = courseItem.componentInstance;

    courseItemInstance.delete.emit(2);
    expect(consoleSpy).toHaveBeenCalledWith('Id of the item to delete: 2');
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
    const consoleSpy = spyOn(console, 'log');
    const searchString = 'search';

    const courseInstrumental = fixture.debugElement.query(By.directive(MockInstrumentalSectionComponent));
    const courseInstrumentalInstance = courseInstrumental.componentInstance;
    courseInstrumentalInstance.search.emit(searchString);

    expect(consoleSpy).toHaveBeenCalledWith(`Search: ${searchString}`);
  });
});
