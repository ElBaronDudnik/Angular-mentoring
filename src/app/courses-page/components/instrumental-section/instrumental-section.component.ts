import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-instrumental-section',
    templateUrl: './instrumental-section.component.html',
    styleUrls: ['./instrumental-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class InstrumentalSectionComponent {
  @Output() search = new EventEmitter();
  @Output() addCourse = new EventEmitter<void>();

  onSearch(event: Event): void {
    this.search.emit(event);
  }

  onAddCourse() {
    this.addCourse.emit();
  }
}
