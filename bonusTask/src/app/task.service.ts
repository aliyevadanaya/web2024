import { Injectable } from '@angular/core';
import { BaseTaskComponent } from './base-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BaseTaskComponent[] = [];

  addTask(task: BaseTaskComponent) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number): BaseTaskComponent | undefined {
    return this.tasks.find(t => t.id === id);
  }
}
