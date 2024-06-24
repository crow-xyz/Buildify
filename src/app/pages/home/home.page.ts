import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonButtons, IonButton, IonMenuButton, IonMenu, IonApp, IonItem, IonLabel, IonInput, IonCard, IonCardHeader } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonIcon, 
    IonImg, 
    IonButtons, 
    IonButton, 
    IonMenuButton, 
    IonMenu, 
    IonApp, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonCard, 
    IonCardHeader,
    IonList, 
    RouterLink
  ]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
