import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getCpuData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cpu/`);
  }

  getGpuData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/gpu/`);
  }

  getMotherboardData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/motherboard/`);
  }

  getStorageData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/storage/`);
  }

  getRamData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ram/`);
  }

  getCaseData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/case/`);
  }

  getPsuData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/psu/`);
  }

  getCoolerData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cooler/`);
  }
}
