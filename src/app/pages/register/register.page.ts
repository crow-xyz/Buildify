import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { DatabaseService, User } from 'src/app/services/database.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  registrationForm: any;

  constructor(private dbService: DatabaseService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async registerUser() {
    if (this.registrationForm.valid) {
      const user: User = {
        id: 0, // id is auto-incremented in the database, so this is a placeholder
        ...this.registrationForm.value
      };
      await this.dbService.addUser(user);
      console.log('User registered successfully');
      // Optionally, redirect the user or clear the form
      this.registrationForm.reset();
    } else {
      console.log('Form is not valid');
    }
  }

}
