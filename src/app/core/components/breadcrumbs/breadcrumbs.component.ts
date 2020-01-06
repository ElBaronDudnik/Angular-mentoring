import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { ICrumbs } from './breadcrumbs.interface';
import { AuthService } from 'app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumb: ICrumbs[] = [];
  private subscription!: Subscription;
  constructor(private breadcrumbService: BreadcrumbsService,
              public authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.breadcrumbService.getCrumb()
    .subscribe((crumb: any) => {
      if (crumb.level === 'main') {
        this.breadcrumb = [];
      }
      this.breadcrumb.push(crumb);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
