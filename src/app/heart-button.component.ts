import { Component } from '@angular/core';
import './heart-button.component.html';
import './heart-button.component.scss';

import { MessageService } from './message.service';

@Component({
  selector: 'heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: [ './heart-button.component.scss' ]
})
export class HeartButtonComponent {
  constructor(private messageService: MessageService) {}
  replaceMessage(): void {
    this.messageService.next();
  }
}
