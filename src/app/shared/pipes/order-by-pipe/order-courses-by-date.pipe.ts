import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

@Pipe({
  name: 'orderCoursesByDate'
})
export class OrderCoursesByDatePipe implements PipeTransform {

  transform(courses: CourseInterface[]): CourseInterface[] | null {
    if (courses.length) {
      return courses.sort((a: CourseInterface, b: CourseInterface) => {
        return +b.date - +a.date;
      });
    }
    return null;
  }

}
