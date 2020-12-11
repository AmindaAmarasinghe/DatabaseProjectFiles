import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA102Component } from './ma102.component';

describe('MA102Component', () => {
  let component: MA102Component;
  let fixture: ComponentFixture<MA102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
