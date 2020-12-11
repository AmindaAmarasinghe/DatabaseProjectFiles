import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA201Component } from './ma201.component';

describe('MA201Component', () => {
  let component: MA201Component;
  let fixture: ComponentFixture<MA201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
