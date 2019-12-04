import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsInputFieldComponent } from './authors-input-field.component';

describe('AuthorsInputFieldComponent', () => {
  let component: AuthorsInputFieldComponent;
  let fixture: ComponentFixture<AuthorsInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
