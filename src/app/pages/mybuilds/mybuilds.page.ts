import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonMenu, IonImg, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { Preferences } from '@capacitor/preferences';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mybuilds',
  templateUrl: './mybuilds.page.html',
  styleUrls: ['./mybuilds.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonLabel, 
    IonMenu,
    IonList,
    IonItem,
    IonImg,
    RouterLink,
    IonButtons,
    IonMenuButton
  ]
})
export class MybuildsPage implements OnInit {
  savedBuild: any = null;

  constructor() { }

  ngOnInit() {
    this.loadSavedBuild();
  }

  async loadSavedBuild() {
    const result = await Preferences.get({ key: 'savedBuild' });
    if (result.value) {
      this.savedBuild = JSON.parse(result.value);
    } else {
      console.log('No saved build found');
    }
  }
}
