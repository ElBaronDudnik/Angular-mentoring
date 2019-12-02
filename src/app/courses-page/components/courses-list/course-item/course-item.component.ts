import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { faCalendar, faPencilAlt, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() id!: number;
  @Input() course!: CourseInterface | undefined;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
  public faCalendar = faCalendar;
  public faPencil = faPencilAlt;
  public faClockO = faClock;
  public faTrash = faTrash;
  public faStar = faStar;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    if (!this.id) {
      this.id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    }
    this.course = this.coursesService.getCourseById(+this.id);
  }

  onEdit(): void {
    this.edit.emit(this.id);
  }

  onDelete(): void {
    this.delete.emit(this.id);
  }
}
