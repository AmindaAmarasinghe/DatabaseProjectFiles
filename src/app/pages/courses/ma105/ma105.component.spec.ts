import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MA105Component } from './ma105.component';

describe('MA105Component', () => {
  let component: MA105Component;
  let fixture: ComponentFixture<MA105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MA105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MA105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
