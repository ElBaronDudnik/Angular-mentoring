import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdditionComponent } from './course-addition.component';

describe('CourseAdditionComponent', () => {
  let component: CourseAdditionComponent;
  let fixture: ComponentFixture<CourseAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
