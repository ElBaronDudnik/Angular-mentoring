import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

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
  @Output() params = new EventEmitter();
  constructor(private filterPipe: FilterCoursesByNamePipe,
              private coursesService: CoursesService,
              private router: Router,
              private crumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.getCourses();
    this.crumbsService.setCrumb({title: 'Courses', link: 'courses', level: 'main'});
  }

  getCourses(): void {
    this.courses = this.coursesService.coursesList;
    this.filteredCourses = this.courses;
  }

  onDelete(course: CourseInterface): void {
    const answer = confirm('Do you really want to delete this course?');
    if (answer) {
      this.coursesService.removeItem(course.id);
    }
  }

  loadMore(): void {
    console.log('Load More');
  }

  onEdit(course: CourseInterface): void {
    this.crumbsService.setCrumb({title: course.title, link: `courses/${course.id}`, level: 'child'});
    this.router.navigate([`courses/${course.id}`]);
  }

  onSearch(searchQuery: string): void {
    this.filteredCourses = this.filterPipe.transform(searchQuery, this.courses);
    console.log(`Search: ${searchQuery}`);
  }

  onAddCourse(): void {
    this.crumbsService.setCrumb({title: 'New Course', link: 'courses/new', level: 'child'});
    this.router.navigate(['courses/new']);
  }
}
