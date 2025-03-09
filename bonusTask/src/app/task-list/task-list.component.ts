import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { RouterModule } from '@angular/router';
import { BaseTaskComponent } from '../base-task.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: BaseTaskComponent[];
  newTask: BaseTaskComponent = {
    id: 0,
    title: '',
    description: '',
    category: 'Personal',
    status: 'pending',
    deadline: new Date()
  };

  private taskService = inject(TaskService);

  constructor() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.newTask.id = this.tasks.length + 1;
      this.taskService.addTask({ ...this.newTask }); 
      this.newTask = { id: 0, title: '', description: '', category: 'Personal', status: 'pending', deadline: new Date() };
    }
  }

  markTaskAsCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'completed';
    }
  }
}
