import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Observable } from 'rxjs';











@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor (private loginService:LoginService,
  private router:Router)  {}

  canActivate(): boolean {
    if(this.loginService.isAuthenticated())
  {
      return true;
  }
  else {
    this.router.navigate(['/login'])
    return false;
  }
 
  }
}

