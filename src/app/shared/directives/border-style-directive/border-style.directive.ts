import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnInit {
  @Input() course !: CourseInterface;
  constructor() { }

  @HostBinding('style.border-color') borderColor!: string;

  ngOnInit() {
    this.getDateDifference();
  }

  getDateDifference() {
    const now = new Date();
    const dateDiff = Math.floor((+now - +this.course.creationDate) / 86400000);

    if (dateDiff < 14 && dateDiff > 0) {
      this.borderColor = 'green';
    } else if (dateDiff < 0) {
      this.borderColor = 'blue';
    }
  }
}
