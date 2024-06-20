import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption]
})
export class MainPage implements OnInit {
  form: FormGroup;
  cpuData: any[] = [];
  gpuData: any[] = [];
  ramData: any[] = [];
  storageData: any[] = [];
  motherboardData: any[] = [];
  psuData: any[] = [];
  caseData: any[] = [];
  coolerData: any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCpu();
    this.getGpu();
    this.getMotherboard();
    this.form = new FormGroup({
      cpu: new FormControl(null, { validators: [Validators.required] }),
      gpu: new FormControl(null, { validators: [Validators.required] }),
      motherboard: new FormControl(null, { validators: [Validators.required] }),
    });

    this.form.valueChanges.subscribe(values => {
      // Apply your logic to check the compatibility between the PC hardware components
      // For example:
      
      if (values.cpu && values.gpu && values.motherboard) {
        if (values.cpu !== 'compatibleCpu' || values.gpu !== 'compatibleGpu' || values.motherboard !== 'compatibleMotherboard') {
          console.log('The components are not compatible');
        } else {
          console.log('The components are compatible');
        }
      }
    });
    
  }

  getCpu() {
    this.http.get<any>('http://127.0.0.1:8000/api/cpu/')
      .subscribe({
      next: (response) => {
        this.cpuData = response;
        console.log('Cpu data fetched');
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
      });
  }

  getGpu() {
    this.http.get<any>('http://127.0.0.1:8000/api/gpu/')
      .subscribe({
      next: (response) => {
        this.gpuData = response;
        console.log('Gpu data fetched');
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
      });
  }
  
  getMotherboard() {
    this.http.get<any>('http://127.0.0.1:8000/api/motherboard/')
      .subscribe({
      next: (response) => {
        this.motherboardData = response;
        console.log('Motherboard data fetched');
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
      });
  }

  checkCompatibility(cpuData) {

  }
}