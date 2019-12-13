import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterCoursesByNamePipe],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public filteredCourses: CourseInterface[] = [];
  @Output() params = new EventEmitter();
  constructor(private filterPipe: FilterCoursesByNamePipe,
              private coursesService: CoursesService,
              private router: Router,
              private apiService: ApiService,
              private crumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.getCourses();
    this.crumbsService.setCrumb({title: 'Courses', link: 'courses', level: 'main'});
  }

  getCourses(): void {
    this.coursesService.getCoursesList(0, 10).subscribe((courses: CourseInterface[]) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  onDelete(id: number): void {
    const answer = confirm('Do you really want to delete this course?');
    if (answer) {
      this.coursesService.removeItem(id).subscribe(() => this.getCourses());
    }
  }

  loadMore(): void {
    const start = this.filteredCourses.length;
    this.coursesService.getCoursesList(start, 10).subscribe((courses: CourseInterface[]) => {
      this.filteredCourses = this.filteredCourses.concat(courses);
    });
  }

  onEdit(course: CourseInterface): void {
    this.router.navigate([`courses/${course.id}`], {queryParams: {
          id: course.id,
          name: course.name,
          date: course.date,
          length: course.length,
          description: course.description
        }});
    this.crumbsService.setCrumb({title: course.name, link: `courses/${course.id}`, level: 'child'});
  }

  onSearch(searchQuery: string): void {
    this.apiService.searchCourses(searchQuery).subscribe(courses => this.filteredCourses = courses);
  }

  onAddCourse(): void {
    this.crumbsService.setCrumb({title: 'New Course', link: 'courses/new', level: 'child'});
    this.router.navigate(['courses/new']);
  }
}
