import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co105Component } from './co105.component';

describe('Co105Component', () => {
  let component: Co105Component;
  let fixture: ComponentFixture<Co105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
