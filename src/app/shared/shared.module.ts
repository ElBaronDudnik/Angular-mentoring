import { NgModule } from '@angular/core';
import { DurationPipe } from './pipes/duration-pipe/duration-pipe.pipe';
import { BorderStyleDirective } from './directives/border-style-directive/border-style.directive';
import { OrderCoursesByDatePipe } from './pipes/order-by-pipe/order-courses-by-date.pipe';
import { FilterCoursesByNamePipe } from './pipes/filter-pipe/filter-courses-by-name.pipe';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { CommonModule } from '@angular/common';

const toExport = [
    DurationPipe,
    BorderStyleDirective,
    OrderCoursesByDatePipe,
    FilterCoursesByNamePipe,
    ErrorComponent
  ];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [...toExport],
  exports: [...toExport]
})
export class SharedModule {
}
