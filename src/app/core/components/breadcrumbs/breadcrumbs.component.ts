import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() label!: string;
  public breadcrumb!: string;
  constructor(private breadcrumbService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbService.getCrumb().subscribe((result: string) => this.breadcrumb = result);
  }
}
