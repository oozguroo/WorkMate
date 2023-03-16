import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {

  constructor() {}

  success(message: string) {
    alertify.success(message);
  }

  alert(message: string) {
    alertify.alert(message, () => {}).set('theme', 'purple');
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  info(message: string) {
    alertify.info(message);
  }
}