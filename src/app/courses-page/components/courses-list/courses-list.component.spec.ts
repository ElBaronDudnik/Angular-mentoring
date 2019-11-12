import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

import { coursesMock } from '../../courses.mock';
import {By} from '@angular/platform-browser';
import { Component, Directive, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { faCalendar, faPencilAlt, faTrash, faClock } from '@fortawesome/free-solid-svg-icons';
import { CourseInterface } from '../../course.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Pipe({name: 'durationPipe'})
class MockDurationPipe implements PipeTransform {
  transform(value: number): string {
    return 'value';
  }
}

@Pipe({name: 'orderCoursesByDate'})
class MockOrderCoursesByDatePipe implements PipeTransform {
  transform(array: CourseInterface[]): null {
    return null;
  }
}

@Directive({
  selector: '[appBorderStyle]'
})
class MockBordeStyleDirective {}

@Component({
  selector: 'app-course-item',
  template: `<app-course-item></app-course-item>
             <fa-icon [icon]="faClockO"></fa-icon>
             <fa-icon [icon]="faCalendar"></fa-icon>
             <fa-icon [icon]="faPencil"></fa-icon>
             <fa-icon [icon]="faTrash"></fa-icon>`
})
class MockCourseItemComponent {
  @Input() course !: CourseInterface;
  faCalendar = faCalendar;
  faPencil = faPencilAlt;
  faClockO = faClock;
  faTrash = faTrash;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
}

@Component({
  selector: 'app-instrumental-section',
  template: ''
})
class MockInstrumentalSectionComponent {
  @Output() addCourse = new EventEmitter();
  @Output() search = new EventEmitter();
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
      imports: [FontAwesomeModule]
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

  it('should proceed courses obtaining', () => {
    const consoleSpy = spyOn(console, 'log');
    component.getCourses();

    expect(consoleSpy).toHaveBeenCalledWith('Courses: ');
  });

  it('should proceed loading more courses', () => {
    const consoleSpy = spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('.load-more');

    button.click();

    expect(consoleSpy).toHaveBeenCalledWith('Load More');
  });

  it('should proceed course deletion', () => {
    spyOn(component, 'onDelete');

    const courseItem = fixture.debugElement.query(By.directive(MockCourseItemComponent));
    const courseItemInstance = courseItem.componentInstance;

    courseItemInstance.delete.emit(2);
    expect(component.onDelete).toHaveBeenCalledWith(2);
  });

  it('should proceed course edition', () => {
    spyOn(component, 'onEdit');

    const courseItem = fixture.debugElement.query(By.directive(MockCourseItemComponent));
    const courseItemInstance = courseItem.componentInstance;

    courseItemInstance.edit.emit();
    expect(component.onEdit).toHaveBeenCalled();
  });

  it('should proceed course addition', () => {
    spyOn(component, 'onAddCourse');

    const courseInstrumental = fixture.debugElement.query(By.directive(MockInstrumentalSectionComponent));
    const courseInstrumentalInstance = courseInstrumental.componentInstance;

    courseInstrumentalInstance.addCourse.emit()
    expect(component.onAddCourse).toHaveBeenCalled();
  });

  it('should proceed course search', () => {
    spyOn(component, 'onSearch');

    const courseInstrumental = fixture.debugElement.query(By.directive(MockInstrumentalSectionComponent));
    const courseInstrumentalInstance = courseInstrumental.componentInstance;

    courseInstrumentalInstance.search.emit('search')
    expect(component.onSearch).toHaveBeenCalledWith('search');
  });
});
