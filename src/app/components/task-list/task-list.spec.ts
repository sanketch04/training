import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TaskList } from './task-list';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList],
      providers: [
        provideMockStore({
          initialState: {
            tasks: {
              tasks: [],
            },
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;

    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
