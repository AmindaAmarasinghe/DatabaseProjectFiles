import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co201Component } from './co201.component';

describe('Co201Component', () => {
  let component: Co201Component;
  let fixture: ComponentFixture<Co201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
