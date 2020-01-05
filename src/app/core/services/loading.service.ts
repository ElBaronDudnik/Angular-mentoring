import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnDestroy {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  loaderState: Observable<boolean> = this.isLoading$.asObservable();

  show() {
    this.isLoading$.next(true);
  }

  hide() {
    this.isLoading$.next(false);
  }

  ngOnDestroy(): void {
    this.isLoading$.complete();
  }
}
