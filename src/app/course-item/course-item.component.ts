import { Component, OnInit } from '@angular/core';

class Course implements CourseInterface {
  public id;
  public title;
  public creationDate;
  public duration;
  public description;

  constructor(id, title, duration, description) {
    this.id = id;
    this.title = title;
    this.creationDate = new Date();
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
  public course: CourseInterface = new Course(1, 'Video Course 1. Name tag', 22, 'Learn where you can find course description...')
  constructor() { }

  ngOnInit() {
  }

}
