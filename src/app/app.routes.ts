import { Routes } from '@angular/router';
import { introGuard } from './guards/intro.guard';
import { authGuard } from './guards/auth.guard';
import { autoLoginGuard } from './guards/auto-login.guard';

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
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
];
