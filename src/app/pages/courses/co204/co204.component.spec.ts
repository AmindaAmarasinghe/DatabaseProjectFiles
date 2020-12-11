import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co204Component } from './co204.component';

describe('Co204Component', () => {
  let component: Co204Component;
  let fixture: ComponentFixture<Co204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
