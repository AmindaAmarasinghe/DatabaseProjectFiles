import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co202Component } from './co202.component';

describe('Co202Component', () => {
  let component: Co202Component;
  let fixture: ComponentFixture<Co202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
