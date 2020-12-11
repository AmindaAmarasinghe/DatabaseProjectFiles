import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co200Component } from './co200.component';

describe('Co200Component', () => {
  let component: Co200Component;
  let fixture: ComponentFixture<Co200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
