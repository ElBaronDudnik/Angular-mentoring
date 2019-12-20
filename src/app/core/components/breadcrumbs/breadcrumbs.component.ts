import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { Subscription } from 'rxjs';
import { ICrumbs } from './breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumb: ICrumbs[] = [];
  public subscribtion!: Subscription;
  constructor(private breadcrumbService: BreadcrumbsService) { }

  ngOnInit() {
    this.subscribtion = this.breadcrumbService.getCrumb().subscribe((result: ICrumbs) => {
      if (result.level === 'main') {
        this.breadcrumb.splice(0, this.breadcrumb.length);
      }
      this.breadcrumb.push(result);
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
