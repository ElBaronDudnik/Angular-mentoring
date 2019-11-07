import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Pipe, PipeTransform } from '@angular/core';
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

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        MockDurationPipe
      ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = courseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete with corresponding id', () => {
    spyOn(component.delete, 'emit');

    const button = fixture.nativeElement.querySelector('.delete-button');
    button.click();

    expect(component.delete.emit).toHaveBeenCalledWith(2);
  });

  it('should emit edit', () => {
    spyOn(component.edit, 'emit');

    const button = fixture.nativeElement.querySelector('.edit-button');
    button.click();

    expect(component.edit.emit).toHaveBeenCalled();
  });
});
