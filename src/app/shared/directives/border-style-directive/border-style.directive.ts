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

  @HostBinding('style.border-color') borderColor!: string;

  ngOnInit() {
    this.setBorder();
  }

  getDateDiff() {
    return Math.floor((+Date.now() - +this.course.date) / MILLISECONDS_PER_DAY);
  }

  setBorder() {
    const dateDiff = this.getDateDiff();

    if (this.isFresh(dateDiff)) {
      this.borderColor = this.freshColor;
    }

    if (this.isUpcoming(dateDiff)) {
      this.borderColor = this.upcomingColor;
    }
  }

  isFresh(dateDiff: number): boolean {
    return dateDiff < FRESH_DATE && dateDiff > 0;
  }

  isUpcoming(dateDiff: number): boolean {
    return dateDiff <= 0;
  }
}
