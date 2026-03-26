import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBar } from './task-bar';

describe('TaskBar', () => {
  let component: TaskBar;
  let fixture: ComponentFixture<TaskBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskBar],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
