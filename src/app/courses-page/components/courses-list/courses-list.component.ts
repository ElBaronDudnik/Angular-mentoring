import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';
import { Router } from '@angular/router';
import { ICrumbs } from '../../../core/components/breadcrumbs/breadcrumbs.interface';

import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { deleteCourse, getCourses, searchCourses } from '../../../store/coursesList/courses-list.actions';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterCoursesByNamePipe],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: CourseInterface[] = [];
  public filteredCourses: CourseInterface[] = [];

  private subscription: Subscription = new Subscription();

  @Output() params = new EventEmitter();

  constructor(private router: Router,
              private crumbsService: BreadcrumbsService,
              private store: Store<AppState>) {
                const crumb: ICrumbs = {
                  title: 'Courses',
                  link: 'courses',
                  level: 'main'
                };
                this.crumbsService.setCrumb(crumb);
              }

  ngOnInit() {
    this.getCourses();
    this.subscription.add(this.store.select('courseList').subscribe(courseListState => {
      this.courses = courseListState.courses;
      this.filteredCourses = courseListState.courses;
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCourses(): void {
    this.store.dispatch(getCourses({start: 0, count: 10}));
  }

  onDelete(id: number): void {
    const answer = confirm('Do you really want to delete this course?');
    if (answer) {
      this.store.dispatch(deleteCourse({id}));
    }
  }

  loadMore(): void {
    const start = this.filteredCourses.length;
    this.store.dispatch(getCourses({start, count: 10}));
  }

  onEdit(course: CourseInterface): void {
    const crumb: ICrumbs = {
      title: course.name,
      link: `courses/${course.id}`,
      level: 'child'
    };
    this.router.navigate([`courses/${course.id}`]);
    this.crumbsService.setCrumb(crumb);
  }

  onSearch(event: Event): void {
    this.store.dispatch(searchCourses({event}));
  }

  onAddCourse(): void {
    const crumb: ICrumbs = {
      title: 'New Course',
      link: 'courses/new',
      level: 'child'
    };
    this.crumbsService.setCrumb(crumb);
    this.router.navigate(['courses/new']);
  }
}
