import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {
  }
  signUp(email: string , password: string) {
    return this.http.post<AuthResponseData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaf1rZhwWJMNO6oKKDg_tJ8dvGQ7uoS7U',
      {
        email,
        password,
        returnSecureToken: true
      }
      ).pipe(catchError(this.handleError), tap (resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }
  login(email: string , password: string) {
    return this.http.post<AuthResponseData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaf1rZhwWJMNO6oKKDg_tJ8dvGQ7uoS7U' ,
      {
        email,
        password,
        returnSecureToken: true
      }
      ).pipe(catchError(this.handleError), tap (resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }
  private handleAuthentication(email: string , userId: string,  token: string , expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email , userId , token , expirationDate);
    this.user.next(user);

  }
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS': errorMessage = 'The email address is already in use by another account.'; break;
      case 'EMAIL_NOT_FOUND': errorMessage = 'There is no user record corresponding to this email'; break;
      case 'INVALID_PASSWORD': errorMessage = 'The password is invalid'; break;
    }
    return throwError(errorMessage);
  }
}
