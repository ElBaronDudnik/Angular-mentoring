import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { faCalendar, faPencilAlt, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'app/courses-page/services/courses.service';
import { Subscription } from 'rxjs';

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
    private courseService: CoursesService
  ) { }

  ngOnInit() {
    if (!this.course) {
      this.subscription = this.courseService.getCourseById(this.route.snapshot.params.id)
      .subscribe(course => {
        this.course = course;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
