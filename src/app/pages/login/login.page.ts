import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonItemGroup, IonImg, IonLabel, IonText } from '@ionic/angular/standalone';
import { DatabaseService, User } from 'src/app/services/database.service';
import { AlertController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,  
    IonItem, 
    IonInput,
    IonButton,
    IonItemGroup,
    RouterLink,
    IonImg,
    IonLabel,
    ReactiveFormsModule,
    IonText
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private databaseService: DatabaseService, 
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  async login() {
    const formValue = this.loginForm.value;
    try {
      const users: User[] = await this.databaseService.getUsers();
      const user = users.find(u => u.email === formValue.email && u.password === formValue.password);
      if (user) {
        console.log('Login successful', user);
        await Preferences.set({ 
          key: 'isLoggedIn',
          value: 'true',
        });
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } catch (error) {
      console.error('Login error:', error);
      this.errorMessage = 'An error occurred during login. Please try again.';
    }
  }
}
