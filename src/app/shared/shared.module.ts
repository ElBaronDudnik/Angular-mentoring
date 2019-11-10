import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import {DurationPipe} from './pipes/duration-pipe/duration-pipe.pipe';
import {BorderStyleDirective} from './directives/border-style-directive/border-style.directive';
import {OrderByPipe} from './pipes/order-by-pipe/order-by.pipe';

@NgModule({
  imports: [],
  declarations: [
    BreadcrumbsComponent,
    DurationPipe,
    BorderStyleDirective,
    OrderByPipe
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
