import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';
import { CoursesService } from '../../services/courses.service';
import {Router} from '@angular/router';

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
  constructor(private filterPipe: FilterCoursesByNamePipe,
              private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.coursesService.coursesList;
    this.filteredCourses = this.courses;
  }

  onDelete(id: number): void {
    const answer = confirm('Do you really want to delete this course?');
    if (answer) {
      this.coursesService.removeItem(id);
    }
    console.log(`Id of the item to delete: ${id}`);
  }

  loadMore(): void {
    console.log('Load More');
  }

  onEdit(id: number): void {
    console.log(id);
    this.router.navigate([`courses/${id}`]);
  }

  onSearch(searchQuery: string): void {
    this.filteredCourses = this.filterPipe.transform(searchQuery, this.courses);
    console.log(`Search: ${searchQuery}`);
  }

  onAddCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
