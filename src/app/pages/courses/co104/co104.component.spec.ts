import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co104Component } from './co104.component';

describe('Co104Component', () => {
  let component: Co104Component;
  let fixture: ComponentFixture<Co104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
