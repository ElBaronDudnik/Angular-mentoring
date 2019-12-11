import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BreadcrumbsService } from '../services/breadcrumbs.service';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsGuard implements CanActivate {
  constructor(private crumbsService: BreadcrumbsService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.crumbsService.setCrumb(next.params['name']);
    return true;
  }
}
