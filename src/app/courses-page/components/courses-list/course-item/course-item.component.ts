import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { faCalendar, faPencilAlt, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course!: CourseInterface;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  public faCalendar = faCalendar;
  public faPencil = faPencilAlt;
  public faClockO = faClock;
  public faTrash = faTrash;
  public faStar = faStar;
  constructor() { }

  ngOnInit() {}

  onEdit(): void {
    this.edit.emit();
  }

  onDelete(): void {
    this.delete.emit(this.course.id);
  }
}
