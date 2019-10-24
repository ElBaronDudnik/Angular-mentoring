import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { Course } from '../../../course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: CourseInterface = new Course({
    id: 1,
    title: '',
    creationDate: new Date(),
    duration: 23,
    description: ''
  });
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onDelete(): void {
    this.delete.emit(this.course.id);
  }
}
