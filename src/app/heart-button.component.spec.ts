import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HeartButtonComponent } from './heart-button.component';
import { MessageService } from './message.service';

describe('Heart Button Component', () => {
  let comp:    HeartButtonComponent;
  let fixture: ComponentFixture<HeartButtonComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;


  beforeEach(async(() => {
    let messageServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [
        HeartButtonComponent
      ],
      providers: [
        { provide: MessageService, useValue: messageServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartButtonComponent);
    comp = fixture.componentInstance; // HeartButtonComponent test instance
  });

  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
