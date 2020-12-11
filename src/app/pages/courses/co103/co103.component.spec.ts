import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co103Component } from './co103.component';

describe('Co103Component', () => {
  let component: Co103Component;
  let fixture: ComponentFixture<Co103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
