import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  imports: [AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second';
}
