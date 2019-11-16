import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `<app-course-search (search)="onSearch($event)"></app-course-search>`
})
class TestHostComponent {
  onSearch(value: Event) {
    console.log('Search');
  }
}

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseSearchComponent,
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should proceed courses search', () => {
    const spy = spyOn(component.search, 'emit');
    const submitButton = fixture.debugElement.query(By.css('button'));

    submitButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
