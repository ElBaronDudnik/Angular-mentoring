import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Pipe({name: 'durationPipe'})
class MockDurationPipe implements PipeTransform {
  transform(value: number): string {
    return 'value';
  }
}

const courseMock = {
  id: 2,
  title: 'Hello',
  duration: 25,
  creationDate: new Date(1, 1, 2019),
  description: 'Hello World',
  topRated: false
};

@Component({
  template: `
      <app-course-item
          [course]="course"
          (delete)="onDelete($event)"
          (edit)="onEdit()">
      </app-course-item>`
})
class TestHostComponent {
  course = courseMock;
  onDelete = jasmine.createSpy('onDeleteSpy');
  onEdit = jasmine.createSpy('onEditSpy');
}

describe('CourseItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CourseItemComponent,
        MockDurationPipe
      ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.course = courseMock;
    fixture.detectChanges();
  });

  it('should delete course', () => {
    const button = fixture.nativeElement.querySelector('.delete-button');
    button.click();

    expect(component.onDelete).toHaveBeenCalledWith(2);
  });

  it('should edit course', () => {
    const button = fixture.nativeElement.querySelector('.edit-button');
    button.click();

    expect(component.onEdit).toHaveBeenCalledWith();
  });

  it('should show star icon for top-rated course', () => {
    const starContainer = fixture.nativeElement.querySelector('.fa-star');
    component.course.topRated = true;
    fixture.detectChanges();

    expect(starContainer).not.toBeNull();
  });

  it('should show title in uppercase', () => {
    const title = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
    expect(title.textContent).toContain('HELLO');
  });
});
