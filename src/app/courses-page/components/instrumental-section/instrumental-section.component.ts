import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-instrumental-section',
    templateUrl: './instrumental-section.component.html',
    styleUrls: ['./instrumental-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class InstrumentalSectionComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Output() addCourse = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSearch(event: Event): void {
    this.search.emit(event);
  }

  onAddCourse() {
    this.addCourse.emit();
  }
}
