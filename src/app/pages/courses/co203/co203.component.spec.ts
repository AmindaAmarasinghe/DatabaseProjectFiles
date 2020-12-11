import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co203Component } from './co203.component';

describe('Co203Component', () => {
  let component: Co203Component;
  let fixture: ComponentFixture<Co203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
