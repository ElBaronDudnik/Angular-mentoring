import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalSectionComponent } from './instrumental-section.component';

describe('InstrumentalSectionComponent', () => {
  let component: InstrumentalSectionComponent;
  let fixture: ComponentFixture<InstrumentalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
