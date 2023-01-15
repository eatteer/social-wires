import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css'],
})
export class MessageCardComponent {
  @Input()
  public id!: string;

  @Input()
  public title!: string;

  @Input()
  public text!: string;

  @Input()
  public username!: string;

  @Input()
  public createdAt!: Date;

  @Input()
  public showCreateComment!: boolean;

  @Input()
  public isPreview: boolean = false;

  public form!: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService
  ) {
    this.form = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  public submit(): void {
    alert('The comment was sent');
    this.form.controls['comment'].setValue('');
    this.messagesService.comment(this.id, this.form.value).subscribe();
  }
}
