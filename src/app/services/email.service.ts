import { Injectable } from '@angular/core';
import { Observable, of, delay, map, catchError } from 'rxjs';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  emailExists(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(2000),
      map(email => {
        const emails = ['test@test.test'];
        return emails.includes(email);
      }),
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map(exists => (exists ? { emailExists: true } : null)),
        catchError(() => of(null)),
      );
    };
  }
}
