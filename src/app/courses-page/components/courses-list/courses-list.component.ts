import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { coursesMock } from '../../courses.mock';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  constructor() { }
  public courses: CourseInterface[] = coursesMock;
  ngOnInit() {
  }

  getCourses(): void {
    console.log('Courses: ');
  }

  onDelete(id: number): void {
    console.log(`Id of the item to delete: ${id}`);
  }
}
