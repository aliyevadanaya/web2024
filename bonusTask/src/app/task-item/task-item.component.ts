import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTaskComponent } from '../base-task.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: BaseTaskComponent;
  @Output() taskCompleted = new EventEmitter<number>();

  completeTask() {
    this.taskCompleted.emit(this.task.id);
  }
}
