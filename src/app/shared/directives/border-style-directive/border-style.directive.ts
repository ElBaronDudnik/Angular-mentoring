import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import { CourseInterface } from '../../../courses-page/course.interface';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnInit {
  @Input() course !: CourseInterface;
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }
  // @ts-ignore
  @HostBinding('style.border-color') borderColor: string;

  public ngOnInit() {
    const now = new Date();
    // @ts-ignore
    const dateDiff = now - this.course.creationDate;
    console.log(dateDiff, this.course.creationDate)
    console.log(Math.floor(dateDiff / 86400000));
    console.log(now);
      // renderer.setElementStyle(el.nativeElement,'backgroundColor','red');
  }
}
