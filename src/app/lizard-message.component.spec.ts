import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { LizardMessageComponent } from './lizard-message.component';

describe('Lizard Message Component', () => {
  let comp:    LizardMessageComponent;
  let fixture: ComponentFixture<LizardMessageComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizardMessageComponent ], // declare the test component
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizardMessageComponent);
    comp = fixture.componentInstance; // LizardMessageComponent test instance
  });

  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
