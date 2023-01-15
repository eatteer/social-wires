import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MessagesService } from '../services/messages.service';
import { Message, SearchRequest } from '../types';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css'],
})
export class AllMessagesComponent {
  public authenticatedUserId: string = '';
  public allMessages: Message[] = [];
  public search: string = '';
  public date?: string;

  public constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) {
    console.log(this.authService.auth);
    this.authenticatedUserId = this.authService.auth.user!.userId;
    this.messagesService.getAll().subscribe((messages) => {
      console.log(messages);
      this.allMessages = messages;
    });
  }

  public performSearch(): void {
    console.log(this.search, this.date);
    const searchRequest: SearchRequest = {
      search: this.search,
    };
    if (this.date) searchRequest.date = this.date;
    this.messagesService.search(searchRequest).subscribe({
      next: (value) => {
        console.log(value);
        this.allMessages = value as Message[];
      },
      error: () => {
        console.log('error');
        this.allMessages = [];
      },
    });
  }
}
