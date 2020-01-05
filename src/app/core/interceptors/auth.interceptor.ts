import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements AuthInterceptor {

  constructor(private loader: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Access Denied');
          return throwError(error);
        }
        return throwError(error);
      }),
      delay(300),
      finalize(() => this.loader.hide())
    );
  }
}
