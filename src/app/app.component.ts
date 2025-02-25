import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'second';
  tasks: string[] = []; 
  handleTaskEvent(task: string) {
    this.tasks.push(task);
  }
}
