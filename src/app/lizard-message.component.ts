import { Component, Input } from '@angular/core';
import './lizard-message.component.html';
import './lizard-message.component.scss';

@Component({
  selector: 'lizard-message',
  templateUrl: './lizard-message.component.html',
  styleUrls: [ './lizard-message.component.scss' ]
})
export class LizardMessageComponent {
  @Input() message: string;
}
