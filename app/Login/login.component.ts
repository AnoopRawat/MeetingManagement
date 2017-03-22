import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from '../Login/login.service';

@Component({
    template: `
<div class="col-md-4 col-md-offset-3">
    <md-toolbar style="height:30px" color="primary">Enter Details:</md-toolbar>
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <div class="form-group">            
            <input type="text" class="form-control" name="username" placeholder="email" type="email" [(ngModel)]="email" required />
        </div>
        <div class="form-group">            
            <input type="password" class="form-control" name="password" placeholder="password" [(ngModel)]="pwd" required />
        </div>
        <div class="form-group">
         <button md-raised-button flex="50" flex-sm="100" type="submit">Login</button>
        </div>
    </form>
</div>
`
})

export class LoginComponent {
    email: string;
    pwd: string;
    constructor(private loginService: LoginService, private router: Router) {
        this.email = "";
        this.pwd = "";
        this.loginService.setIsLogIn(false);
    }

    onSubmit() {
        let _this = this;
        var result = this.loginService.getJSON().
            subscribe(function data(data) {
                data.users.forEach(element => {
                    if (_this.email === "a@a" && _this.pwd === "a") {
                        _this.loginService.setIsLogIn(true);
                        _this.router.navigate(['/User']);
                    }
                });
            },
            function error(error: any) {
                console.log(error)
            });
        console.log("user login submit:");
        console.log(result);
    }
}