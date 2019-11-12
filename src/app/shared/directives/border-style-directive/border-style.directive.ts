import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

export const MILLISECONDS_PER_DAY = 86400000;
export const FRESH_DATE = 14;

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnInit {
  public freshColor = 'lightseagreen';
  public upcomingColor = 'cornflowerblue';
  @Input() course !: CourseInterface;
  constructor() { }

  @HostBinding('style.border-color') borderColor!: string;

  ngOnInit() {
    this.setBorder();
  }

  getDateDiff() {
    return Math.floor((+Date.now() - +this.course.creationDate) / MILLISECONDS_PER_DAY);
  }

  setBorder() {
    const dateDiff = this.getDateDiff();

    if (dateDiff < FRESH_DATE && dateDiff > 0) {
      this.isFresh();
    } else if (dateDiff < 0) {
      this.isUpcoming();
    }
  }

  isFresh() {
    this.borderColor = this.freshColor;
  }

  isUpcoming() {
    this.borderColor = this.upcomingColor;
  }
}
