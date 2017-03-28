import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { LizardMessageComponent } from './lizard-message.component';
import { MessageService } from './message.service';

describe('Lizard Message Component', () => {
  let comp:    LizardMessageComponent;
  let fixture: ComponentFixture<LizardMessageComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    let messageServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [
        LizardMessageComponent
      ],
      providers: [
        { provide: MessageService, useValue: messageServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizardMessageComponent);
    comp = fixture.componentInstance; // LizardMessageComponent test instance
  });

  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
