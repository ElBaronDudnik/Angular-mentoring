import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent {
  public searchQuery !: string;
  @Output() search = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
