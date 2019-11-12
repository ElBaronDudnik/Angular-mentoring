import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { coursesMock } from '../../courses.mock';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterCoursesByNamePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public filteredCourses: CourseInterface[] = [];
  constructor(private filterPipe: FilterCoursesByNamePipe) { }

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

  onSearch(event: Event): void {
    const element = event.target as HTMLInputElement;
    const searchQueryString = element.value;
    this.filteredCourses = this.filterPipe.transform(searchQueryString, this.courses);
    console.log(`Search: ${searchQueryString}`);
  }

  onAddCourse(): void {
    console.log('Add course');
  }
}
