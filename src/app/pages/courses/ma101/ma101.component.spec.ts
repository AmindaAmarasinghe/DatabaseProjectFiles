import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA101Component } from './ma101.component';

describe('MA101Component', () => {
  let component: MA101Component;
  let fixture: ComponentFixture<MA101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
