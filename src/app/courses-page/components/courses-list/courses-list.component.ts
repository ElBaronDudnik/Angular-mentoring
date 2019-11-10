import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CourseInterface } from '../../course.interface';
import { coursesMock } from '../../courses.mock';
import {OrderByPipe} from '../../../shared/pipes/order-by-pipe/order-by.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.courses = coursesMock;
  }

  getCourses(): void {
    console.log('Courses: ');
  }

  onDelete(id: number): void {
    console.log(`Id of the item to delete: ${id}`);
  }

  loadMore(): void {
    console.log('Load More');
  }

  onEdit(): void {
    console.log('Edit');
  }

  onSearch(searchQuery: string): void {
    console.log(`Search: ${searchQuery}`);
  }

  onAddCourse(): void {
    console.log('Add course');
  }
}
