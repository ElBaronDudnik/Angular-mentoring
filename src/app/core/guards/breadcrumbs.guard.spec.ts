import { TestBed, async, inject } from '@angular/core/testing';

import { BreadcrumbsGuard } from './breadcrumbs.guard';

describe('BreadcrumbsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbsGuard]
    });
  });

  it('should ...', inject([BreadcrumbsGuard], (guard: BreadcrumbsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
