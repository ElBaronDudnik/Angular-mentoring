import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ILoader } from '../components/loading-block/loading-block.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = new Subject<ILoader>();
  loaderState: Observable<ILoader> = this.isLoading.asObservable();
  constructor() { }

  show() {
    this.isLoading.next({show: true});
  }

  hide() {
    this.isLoading.next({show: false});
  }
}
