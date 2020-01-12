import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { ICrumbs } from './breadcrumbs.interface';
import { AuthService } from 'app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { AppState } from 'app/shared/store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumb: ICrumbs[] = [];
  public isAuth!: boolean;
  private subscription!: Subscription;
  constructor(private breadcrumbService: BreadcrumbsService,
              public store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('auth').subscribe(authState => this.isAuth = authState.isAuth);
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
