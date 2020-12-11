import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA200Component } from './ma200.component';

describe('MA200Component', () => {
  let component: MA200Component;
  let fixture: ComponentFixture<MA200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
