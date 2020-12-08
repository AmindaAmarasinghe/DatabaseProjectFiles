import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CO101Component } from './co101.component';

describe('CO101Component', () => {
  let component: CO101Component;
  let fixture: ComponentFixture<CO101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CO101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CO101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
