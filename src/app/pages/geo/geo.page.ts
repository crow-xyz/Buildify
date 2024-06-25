import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonLabel, IonMenu, IonList, IonItem, IonImg, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonMenu,
    IonList,
    IonItem,
    IonImg,
    RouterLink,
    IonButtons,
    IonMenuButton,
    IonButton
  ]
})
export class GeoPage implements OnInit {
  latitude: number;
  longitude: number;

  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }
}
