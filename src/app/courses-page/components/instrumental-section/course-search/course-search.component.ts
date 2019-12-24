import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent {
  @Output() search = new EventEmitter<Event>();

  onSearch(event: Event): void {
    this.search.emit(event);
  }
}
