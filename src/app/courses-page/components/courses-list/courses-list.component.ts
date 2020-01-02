import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { FilterCoursesByNamePipe } from '../../../shared/pipes/filter-pipe/filter-courses-by-name.pipe';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { ICrumbs } from '../../../core/components/breadcrumbs/breadcrumbs.interface';

import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterCoursesByNamePipe],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: CourseInterface[] = [];
  public filteredCourses: CourseInterface[] = [];
  private searchSubject = new Subject<Event>();

  private subscription: Subscription = new Subscription();

  @Output() params = new EventEmitter();

  constructor(private coursesService: CoursesService,
              private router: Router,
              private crumbsService: BreadcrumbsService) {
                const crumb: ICrumbs = {
                  title: 'Courses',
                  link: 'courses',
                  level: 'main'
                };
                this.crumbsService.setCrumb(crumb);
               }

  ngOnInit() {
    this.getCourses();
    this.searchSubject
      .pipe(
        debounceTime(1000),
        map((e: Event) => (e.target as HTMLTextAreaElement).value),
        distinctUntilChanged(),
        filter((searchTerm: string) => searchTerm.length > 2),
        switchMap((result: string) => this.coursesService.searchItem(result)))
      .subscribe(courses => this.filteredCourses = courses);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCourses(): void {
    this.subscription.add(this.coursesService.getCoursesList(0, 10)
      .subscribe((courses: CourseInterface[]) => {
      this.courses = courses;
      this.filteredCourses = courses;
    }));
  }

  onDelete(id: number): void {
    const answer = confirm('Do you really want to delete this course?');
    if (answer) {
      this.subscription.add(this.coursesService
      .removeItem(id)
      .subscribe(() => this.getCourses()));
    }
  }

  loadMore(): void {
    const start = this.filteredCourses.length;
    this.subscription.add(this.coursesService.getCoursesList(start, 10)
      .subscribe((courses: CourseInterface[]) => {
        this.filteredCourses = this.filteredCourses.concat(courses);
      }));
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
    this.searchSubject.next(event);
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
