import { BreadcrumbsComponent } from '../core/components/breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { DurationPipe } from './pipes/duration-pipe/duration-pipe.pipe';
import { BorderStyleDirective } from './directives/border-style-directive/border-style.directive';
import { OrderCoursesByDatePipe } from './pipes/order-by-pipe/order-courses-by-date.pipe';
import { FilterCoursesByNamePipe } from './pipes/filter-pipe/filter-courses-by-name.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    BreadcrumbsComponent,
    DurationPipe,
    BorderStyleDirective,
    OrderCoursesByDatePipe,
    FilterCoursesByNamePipe,
  ],
  exports: [
    BreadcrumbsComponent,
    DurationPipe,
    BorderStyleDirective,
    OrderCoursesByDatePipe,
  ]
})
export class SharedModule {
}
