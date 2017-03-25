import { Component } from '@angular/core';
import './default-view.component.html';
import './default-view.component.scss';

@Component({
  selector: 'default-view',
  templateUrl: './default-view.component.html',
  styleUrls: [ './default-view.component.scss' ]
})
export class DefaultViewComponent {
  title = 'Lizard Love';
}
