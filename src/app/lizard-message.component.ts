import { Component, AfterViewInit } from '@angular/core';
import './lizard-message.component.html';
import './lizard-message.component.scss';

import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { Message } from './lib/message';

import '../rxjs-extensions';

@Component({
  selector: 'lizard-message',
  templateUrl: './lizard-message.component.html',
  styleUrls: [ './lizard-message.component.scss' ]
})
export class LizardMessageComponent implements AfterViewInit {
  public message: Observable<string>;
  public defaultMessage = "Click the heart to show your love and see an amazing fact about lizards."
  constructor(private messageService: MessageService) {}

  ngAfterViewInit(): void {
    this.message = this.messageService.currentMessage
      .map((next:Message) => next.body);
  }
}
