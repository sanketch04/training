import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { addTask, deleteTask, toggleTask, loadTasks } from '../../store/task.actions';

import { selectAllTasks } from '../../store/task.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskList {
  private store = inject(Store);

  tasks$ = this.store.select(selectAllTasks);

  addTask(title: string) {
    if (!title.trim()) {
      return;
    }

    this.store.dispatch(
      addTask({
        title: title,
      }),
    );
  }
  deleteTask(id: number) {
    this.store.dispatch(
      deleteTask({
        id: id,
      }),
    );
  }

  toggleTask(id: number) {
    this.store.dispatch(
      toggleTask({
        id: id,
      }),
    );
  }

  loadTasks() {
    this.store.dispatch(loadTasks());
  }
}
