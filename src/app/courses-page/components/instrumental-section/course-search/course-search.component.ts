import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit {
  public searchingValue = '';
  constructor() { }

  ngOnInit() {
  }

  search(): void {
    console.log(`Search: ${this.searchingValue}`);
  }
}
