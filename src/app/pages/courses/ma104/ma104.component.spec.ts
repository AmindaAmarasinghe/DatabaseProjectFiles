import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA104Component } from './ma104.component';

describe('MA104Component', () => {
  let component: MA104Component;
  let fixture: ComponentFixture<MA104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
