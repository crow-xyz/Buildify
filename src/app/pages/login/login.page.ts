import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonItemGroup, IonImg, IonLabel } from '@ionic/angular/standalone';

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
    IonLabel
  ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Button Clicked');
  }

}
