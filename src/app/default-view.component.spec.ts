import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DefaultViewComponent } from './default-view.component';
import { HeartButtonComponent } from './heart-button.component';
import { LizardMessageComponent } from './lizard-message.component';

describe('Default View Component', () => {
  let comp:    DefaultViewComponent;
  let fixture: ComponentFixture<DefaultViewComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    let heartButtonStub = {};
    let lizardMessageStub = {};
    TestBed.configureTestingModule({
      declarations: [
        DefaultViewComponent,
        HeartButtonComponent,
        LizardMessageComponent
      ],
      providers:    [
        { provide: HeartButtonComponent, useValue: heartButtonStub },
        { provide: LizardMessageComponent, useValue: lizardMessageStub },
       ]
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultViewComponent);
    comp = fixture.componentInstance; // DefaultViewComponent test instance
  });
});
