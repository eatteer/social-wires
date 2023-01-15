import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
})
export class CreateMessageComponent {
  public username: string;
  public form!: FormGroup;
  public dateNow: Date = new Date();

  public constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private authService: AuthService
  ) {
    this.username = this.authService.auth.user!.username;
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  public submit(): void {
    this.messagesService.create(this.form.value).subscribe(() => {
      alert('Message was created');
      this.clearInputs();
    });
  }

  public get controls() {
    return this.form.controls;
  }

  public clearInputs(): void {
    this.form.controls['title'].setValue('');
    this.form.controls['text'].setValue('');
  }
}
