import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reactive-forms';
  name = new FormControl('');

  updateName(): void {
    this.name.setValue('Tom Amundala');
  }
}
