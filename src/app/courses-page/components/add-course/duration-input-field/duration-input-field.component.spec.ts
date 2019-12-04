import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationInputFieldComponent } from './duration-input-field.component';

describe('DurationInputFieldComponent', () => {
  let component: DurationInputFieldComponent;
  let fixture: ComponentFixture<DurationInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
