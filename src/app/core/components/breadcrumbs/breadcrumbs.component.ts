import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { ICrumbs } from './breadcrumbs.interface';
import { tap } from 'rxjs/operators';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumb: ICrumbs[] = [];
  constructor(private breadcrumbService: BreadcrumbsService,
    public authService: AuthService) { }

  ngOnInit() {
    this.breadcrumbService.getCrumb()
    .pipe(
      tap((crumb: any) => {
          if (crumb.level === 'main') {
            this.breadcrumb = [];
          }
          this.breadcrumb.push(crumb);
      })
    )
    .subscribe();
  }
}
