import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  imports: [
    StudentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-app';
}
