import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class introGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const introShown = localStorage.getItem('introShown');
    if (introShown) {
      return true;
    } else {
      this.router.navigate(['/intro']);
      return false;
    }
  }
}