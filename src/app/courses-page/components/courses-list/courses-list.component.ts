import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { coursesMock } from '../../courses.mock';
import { FilterPipe } from '../../../shared/pipes/filter-pipe/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public filteredCourses: CourseInterface[] = [];
  constructor(private filterPipe: FilterPipe) { }

  ngOnInit() {
    this.courses = coursesMock;
    this.filteredCourses = coursesMock;
  }

  getCourses(): void {
    console.log('Courses: ');
  }

  onDelete(id: number): void {
    console.log(`Id of the item to delete: ${id}`);
  }

  loadMore(): void {
    console.log('Load More');
  }

  onEdit(): void {
    console.log('Edit');
  }

  onSearch(searchQuery: string): void {
    this.filteredCourses = this.filterPipe.transform(searchQuery, this.courses);
    console.log(`Search: ${searchQuery}`);
  }

  onAddCourse(): void {
    console.log('Add course');
  }
}
