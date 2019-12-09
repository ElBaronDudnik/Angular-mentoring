import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

@Pipe({
  name: 'filter'
})
export class FilterCoursesByNamePipe implements PipeTransform {

  transform(value: string, courses: CourseInterface[]): CourseInterface[] {
    return courses.filter(course => course.title.includes(value));
  }

}
