import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { faCalendar, faPencilAlt, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';
import { ICrumbs } from 'app/core/components/breadcrumbs/breadcrumbs.interface';
import { AppState } from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { getCourseById } from '../../../../store/coursesList/courses-list.actions';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface | undefined;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter();
  public faCalendar = faCalendar;
  public faPencil = faPencilAlt;
  public faClockO = faClock;
  public faTrash = faTrash;
  public faStar = faStar;
  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private crumbService: BreadcrumbsService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    if (!this.course) {
      this.store.dispatch(getCourseById({id: this.route.snapshot.params.id}));
      this.subscription = this.store.select('courseList')
      .subscribe(coursesListState => {
        this.course = coursesListState.courses[0];
        this.setBreadcrumbs();
      });
    }
  }

  setBreadcrumbs() {
    const parentCrumb: ICrumbs = {
      title: 'Courses',
      link: '/courses',
      level: 'main'
    };
    const currentCrumb: ICrumbs = {
      title: this.course && this.course.name || '',
      link: '',
      level: 'child'
    };
    this.crumbService.setCrumb(parentCrumb);
    this.crumbService.setCrumb(currentCrumb);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
