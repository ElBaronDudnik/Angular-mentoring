import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { ICrumbs } from './breadcrumbs.interface';
import { Subscription } from 'rxjs';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectToken } from '../../../store/auth/auth.selector';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumb: ICrumbs[] = [];
  private subscription!: Subscription;
  public isAuth!: boolean;
  constructor(private breadcrumbService: BreadcrumbsService,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectToken).subscribe(token => this.isAuth = !!token);
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
