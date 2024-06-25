import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Preferences } from '@capacitor/preferences'; // Corrected import

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    const isLoggedIn = await this.checkLogin(); // Use the async function to check login status
    
    if (isLoggedIn) {
      return true; // User is logged in, allow access
    } else {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']); // Adjust the route as necessary
      return false;
    }
  }

  // Helper function to check login status using Capacitor's Preferences
  private async checkLogin(): Promise<boolean> {
    const { value } = await Preferences.get({ key: 'isLoggedIn' });
    return value === 'true'; // Assuming the value stored is a string 'true' or 'false'
  }
}