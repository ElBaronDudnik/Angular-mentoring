import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: CourseInterface[], ...args: any[]): CourseInterface[] {
    array.sort((a: CourseInterface, b: CourseInterface) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}