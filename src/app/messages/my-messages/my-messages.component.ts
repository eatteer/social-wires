import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MessagesService } from '../services/messages.service';
import { Message, SearchRequest } from '../types';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css'],
})
export class MyMessagesComponent {
  public username: string;
  public ownMessages: Message[] = [];
  public date?: string;

  public constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) {
    this.username = this.authService.auth.user!.username;
    this.messagesService.getOwn().subscribe((value) => {
      this.ownMessages = value;
    });
  }

  public performSearch(): void {
    if (!this.date) return;
    const searchRequest: SearchRequest = {
      date: this.date,
    };
    this.messagesService.search(searchRequest).subscribe({
      next: (value) => {
        console.log(value);
        this.ownMessages = value as Message[];
      },
      error: () => {
        console.log('error');
        this.ownMessages = [];
      },
    });
  }
}
