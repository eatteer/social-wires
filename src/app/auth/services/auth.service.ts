import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginCredentials,
  SignUpCredentials,
  SignInResponse,
  User,
  Auth,
} from '../types';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, tap } from 'rxjs';
import { API_URL } from 'src/app/variables';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public ENDPOINT: string = `${API_URL}/auth`;

  public auth: Auth = {
    isAuthenticated: false,
    access_token: '',
    user: null,
  };

  public constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {}

  public isAuthenticated(): Observable<boolean> {
    const auth: string | null = localStorage.getItem('auth');
    console.log(auth);
    if (!auth) return of(false);
    this.auth = JSON.parse(auth);
    console.log(this.auth);
    return of(true);
  }

  public login(credentials: LoginCredentials): Observable<Object> {
    return this.httpClient.post(`${this.ENDPOINT}/signin`, credentials).pipe(
      tap((value) => {
        this.auth.isAuthenticated = true;
        this.auth.access_token = (<SignInResponse>value).access_token;
        this.auth.user = this.jwtHelperService.decodeToken<User>(
          this.auth.access_token
        );
        localStorage.setItem('auth', JSON.stringify(this.auth));
      })
    );
  }

  public signUp(credentials: SignUpCredentials): Observable<Object> {
    return this.httpClient.post(`${this.ENDPOINT}/signup`, credentials);
  }

  public logout(): void {
    this.auth = {
      isAuthenticated: false,
      access_token: '',
      user: null,
    };
    localStorage.removeItem('auth');
    localStorage.removeItem('messagesSentPerSession');
  }
}
