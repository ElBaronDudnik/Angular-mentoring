import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

class Course {
  public id;
  public title;
  public creationDate;
  public duration;
  public description;

  constructor(id, title, creationDate, duration, description) {
    this.id = id;
    this.title = title;
    this.creationDate = new Date(creationDate);
    this.duration = duration;
    this.description = description;
  }
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onDelete() {
    this.delete.emit(this.course.id);
  }
}
