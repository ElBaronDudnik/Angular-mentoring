import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return ``;
    }
    if (value >= 60) {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return `${hours}h ${minutes}m`;
    } else {
      return `${value}m`;
    }
  }

}
