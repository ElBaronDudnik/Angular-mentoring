import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit {
  public searchQuery = '';
  @Output() search = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
