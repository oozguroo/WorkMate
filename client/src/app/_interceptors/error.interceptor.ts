import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertifyService } from '../_services/_services/alertify.service';
import { NavigationExtras, Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private alertifyService: AlertifyService,
    private router:Router
    ) {}

  intercept(req: import('@angular/common/http').HttpRequest<any>, next: import('@angular/common/http').HttpHandler):
    import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get('Application-Error');
          if (applicationError) {
            return throwError(applicationError);
          }
          const serverError = error.error;
          let errorMessage = '';
          if (serverError.errors && typeof serverError.errors === 'object') {
            for (const key in serverError.errors) {
              if (serverError.errors[key]) {
                errorMessage += serverError.errors[key] + '\n';
              }
            }
          } else if (typeof serverError === 'object' && serverError !== null) {
            for (const key in serverError) {
              if (serverError[key]) {
                errorMessage += serverError[key] + '\n';
              }
            }
          } else {
            errorMessage = serverError;
          }
          switch (error.status) {
            case 400:
              this.alertifyService.error(errorMessage || 'Bad Request');
              break;
            case 401:
              this.alertifyService.error('Unauthorised')
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
              case 500:
                const navigationExtras: NavigationExtras = {state: {error: error.error}};
                this.router.navigateByUrl('/server-error', navigationExtras);
                break;
              break;
            default:
              this.alertifyService.error('An unexpected error occurred.');
              break;
          }
          return throwError(errorMessage);
        } else {
          return throwError('An unexpected error occurred.');
        }
      })
    );
  }
}
