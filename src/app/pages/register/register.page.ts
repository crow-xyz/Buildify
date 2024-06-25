import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonMenuButton, IonButtons, IonImg, IonList, IonMenu } from '@ionic/angular/standalone';
import { DatabaseService, User } from 'src/app/services/database.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, ReactiveFormsModule, IonMenuButton, IonButtons, IonImg, RouterLink, IonList, IonMenu]
})
export class RegisterPage implements OnInit {
  registrationForm: FormGroup; 

  constructor(
    private dbService: DatabaseService, 
    private formBuilder: FormBuilder,
    private router: Router 
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async registerUser() {
    if (this.registrationForm.valid) {
      const user: User = {
        id: 0, 
        ...this.registrationForm.value
      };
      try {
        await this.dbService.addUser(user);
        console.log('User registered successfully');
        this.registrationForm.reset();
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      console.log('Form is not valid');
    }
  }
}