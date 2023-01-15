import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessageComponent } from './create-message/create-message.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { AllMessagesComponent } from './all-messages/all-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageCardComponent } from './components/message-card/message-card.component';

@NgModule({
  declarations: [
    CreateMessageComponent,
    MyMessagesComponent,
    AllMessagesComponent,
    MessageCardComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [CreateMessageComponent, MyMessagesComponent, AllMessagesComponent],
})
export class MessagesModule {}
