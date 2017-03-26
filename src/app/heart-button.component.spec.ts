import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HeartButtonComponent } from './heart-button.component';

describe('Heart Button Component', () => {
  let comp:    HeartButtonComponent;
  let fixture: ComponentFixture<HeartButtonComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartButtonComponent ], // declare the test component
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartButtonComponent);
    comp = fixture.componentInstance; // HeartButtonComponent test instance
  });

  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
