import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CO100Component } from './co100.component';

describe('CO100Component', () => {
  let component: CO100Component;
  let fixture: ComponentFixture<CO100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CO100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CO100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
