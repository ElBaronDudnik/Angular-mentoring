import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `<app-course-search (search)="onSearch($event)"></app-course-search>`
})
class TestHostComponent {
  onSearch = jasmine.createSpy('onSearchSpy');
}

describe('CourseSearchComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseSearchComponent,
        TestHostComponent
      ],
      imports: [FormsModule]
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

  it('should proceed courses search', () => {
    const submitButton = fixture.debugElement.query(By.css('button'));

    submitButton.triggerEventHandler('click', null);
    expect(component.onSearch).toHaveBeenCalled();
  });
});
