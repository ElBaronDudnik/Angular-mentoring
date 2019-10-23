import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  constructor() { }
  public courses: CourseInterface[] = [{
    id: 1,
    title: 'Video Course 1. Name Tag',
    duration: 72,
    creationDate: new Date(2017, 12, 11),
    description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description. Course descriptions
    report information about a university or college\'s classes.
    They\'re published both in course catalogs that outline degree
    requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`
  }, {
    id: 2,
    title: 'Video Course 2. Name Tag',
    duration: 22,
    creationDate: new Date(2011, 6, 10),
    description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description. Course descriptions
    report information about a university or college\'s classes.
    They\'re published both in course catalogs that outline degree
    requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`
  }, {
    id: 3,
    title: 'Video Course 3. Name Tag',
    duration: 61,
    creationDate: new Date(2012, 8, 14),
    description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description. Course descriptions
    report information about a university or college\'s classes.
    They\'re published both in course catalogs that outline degree
    requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`
  }]
  ngOnInit() {
  }

  getCourses(): void {
    console.log('Courses: ');
  }

  onDeleteEvent(id) {
    console.log(id);
  }
}
