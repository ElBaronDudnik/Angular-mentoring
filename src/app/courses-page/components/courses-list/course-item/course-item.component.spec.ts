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
  description: 'Hello World'
}

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
  onDelete(id: number): void {
    console.log(`Id of the item to delete: ${id}`);
  }
  onEdit(): void {
    console.log('Edit');
  }
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should proceed course deletion', () => {
    spyOn(component, 'onDelete');

    const button = fixture.nativeElement.querySelector('.delete-button');
    button.click();

    expect(component.onDelete).toHaveBeenCalledWith(2);
  });

  it('should proceed course edition', () => {
    spyOn(component, 'onEdit');

    const button = fixture.nativeElement.querySelector('.edit-button');
    button.click();

    expect(component.onEdit).toHaveBeenCalled();
  });
});
