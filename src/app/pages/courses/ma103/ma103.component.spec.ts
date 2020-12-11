import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA103Component } from './ma103.component';

describe('MA103Component', () => {
  let component: MA103Component;
  let fixture: ComponentFixture<MA103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
