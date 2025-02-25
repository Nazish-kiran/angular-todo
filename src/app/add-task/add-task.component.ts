import { Component , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output() Task = new EventEmitter<string>();
addTask(){
  this.Task.emit("hi")
}
}
