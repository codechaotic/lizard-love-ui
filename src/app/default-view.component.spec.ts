import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DefaultViewComponent } from './default-view.component';

describe('Default View Component', () => {
  let comp:    DefaultViewComponent;
  let fixture: ComponentFixture<DefaultViewComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultViewComponent ], // declare the test component
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultViewComponent);
    comp = fixture.componentInstance; // DefaultViewComponent test instance
  });

  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
