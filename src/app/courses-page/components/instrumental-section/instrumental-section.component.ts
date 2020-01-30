import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-instrumental-section',
    templateUrl: './instrumental-section.component.html',
    styleUrls: ['./instrumental-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class InstrumentalSectionComponent {
  @Output() addCourse = new EventEmitter<void>();

  onAddCourse() {
    this.addCourse.emit();
  }
}
