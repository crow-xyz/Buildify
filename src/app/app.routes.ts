import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'mybuilds',
    loadComponent: () => import('./pages/mybuilds/mybuilds.page').then( m => m.MybuildsPage)
  },  {
    path: 'geo',
    loadComponent: () => import('./pages/geo/geo.page').then( m => m.GeoPage)
  }


];
