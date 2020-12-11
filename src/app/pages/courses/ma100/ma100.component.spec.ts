import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA100Component } from './ma100.component';

describe('MA100Component', () => {
  let component: MA100Component;
  let fixture: ComponentFixture<MA100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
