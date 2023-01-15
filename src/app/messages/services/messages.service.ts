import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/variables';
import {
  CommentRequest,
  CreateMessageRequest,
  Message,
  SearchRequest,
} from '../types';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private ENDPOINT = `${API_URL}/messages`;

  public constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getAll(): Observable<Message[]> {
    const headers = {
      Authorization: `Bearer ${this.authService.auth.access_token}`,
    };
    return this.httpClient.get<Message[]>(this.ENDPOINT, { headers });
  }

  public getOwn(): Observable<Message[]> {
    const headers = {
      Authorization: `Bearer ${this.authService.auth.access_token}`,
    };
    return this.httpClient.get<Message[]>(`${this.ENDPOINT}/me`, { headers });
  }

  public create(message: CreateMessageRequest): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${this.authService.auth.access_token}`,
    };
    return this.httpClient.post(this.ENDPOINT, message, { headers });
  }

  public comment(
    messageId: string,
    comment: CommentRequest
  ): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${this.authService.auth.access_token}`,
    };
    return this.httpClient.patch(
      `${this.ENDPOINT}/comment/${messageId}`,
      comment,
      { headers }
    );
  }

  public search(searchRequest: SearchRequest): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${this.authService.auth.access_token}`,
    };
    return this.httpClient.post(`${this.ENDPOINT}/find`, searchRequest, {
      headers,
    });
  }
}
