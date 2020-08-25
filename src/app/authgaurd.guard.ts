import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  constructor(public userservice: UserService, public router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("here is from the authgaurd");
    console.log(this.userservice.isLoggined);
    // return false;
    if (window.localStorage.getItem('userPatientInfo') == null) {
      this.router.navigateByUrl("login")
      return false;
    }
    else {
      return true;
    }

  }


}
