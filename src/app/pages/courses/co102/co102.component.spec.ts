import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co102Component } from './co102.component';

describe('Co102Component', () => {
  let component: Co102Component;
  let fixture: ComponentFixture<Co102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
