import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core'
import {LoginService} from '../Login/login.service'
import {Router} from '@angular/router'

@Injectable()
export class LoginRouteGuardService implements CanActivate {
    constructor(private loginservice: LoginService, private router: Router) {
    }

    canActivate() {
        console.log("CanActivate:");
        return this.loginservice.getIsLogIn();
        //this.router.navigate(['/Error']);        
        //return false;
    }
}