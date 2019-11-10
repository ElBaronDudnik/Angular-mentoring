import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { DurationPipe } from './pipes/duration-pipe/duration-pipe.pipe';
import { BorderStyleDirective } from './directives/border-style-directive/border-style.directive';
import { OrderByPipe } from './pipes/order-by-pipe/order-by.pipe';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';

@NgModule({
  imports: [],
  declarations: [
    BreadcrumbsComponent,
    DurationPipe,
    BorderStyleDirective,
    OrderByPipe,
    FilterPipe
  ],
  exports: [
    BreadcrumbsComponent,
    DurationPipe,
    BorderStyleDirective,
    OrderByPipe
  ]
})
export class SharedModule {
}
