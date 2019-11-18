import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit {
  public searchQuery !: string;
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
