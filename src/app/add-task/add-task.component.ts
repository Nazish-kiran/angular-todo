import { Component , EventEmitter , Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output() Task = new EventEmitter<string>();
  Tasks: string = '' ;

addTask(){
 if (this.Tasks.trim()) {
      this.Task.emit(this.Tasks); // Send task to parent
      this.Tasks = ''; // Clear input after adding
    }
}
}
