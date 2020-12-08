import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherJoinComponent } from './teacher-join.component';

describe('TeacherJoinComponent', () => {
  let component: TeacherJoinComponent;
  let fixture: ComponentFixture<TeacherJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
