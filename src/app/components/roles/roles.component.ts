import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
  // data type: string, number, boolean, date, object, array, null, undefined

  firstName: string = "Angular Tutorial";
  angularVersion = "Version 18"

  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "checkbox";
  selectedState: string = "";

  
  showWelcomeAlert() {
    alert("Welcome to Angular 18 Tutorial");
  }

  showMessage(message: string) {
    alert(message);
  }
}
