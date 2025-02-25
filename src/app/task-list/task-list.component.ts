import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input() taskList : string[] = [];
}
