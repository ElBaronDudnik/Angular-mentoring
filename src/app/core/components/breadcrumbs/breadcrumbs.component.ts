import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() label!: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ResolveStart),
      map(event => {
        let data = null;
        let route = event['state'].root;

        while (route) {
          data = route.data || data;
          route = route.firstChild;
        }

        return data;
      }),
    ).subscribe(console.log);
  }
}
