import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co205Component } from './co205.component';

describe('Co205Component', () => {
  let component: Co205Component;
  let fixture: ComponentFixture<Co205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
