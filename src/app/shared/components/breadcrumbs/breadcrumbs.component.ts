import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() label!: string;
  public breadcrumb!: string;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumb = this.route.snapshot.queryParams['name'];
    console.log(this.route);
  }
}
