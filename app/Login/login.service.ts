import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService implements Resolve<any> {
    private isLogIn: boolean;

    constructor(private router: Router, private http: Http) {
        this.isLogIn = false;
        var obj;
        this.getJSON().subscribe(data => obj = data, error => console.log(error));
    }
    public getJSON(): Observable<any> {
        return this.http.get("../users.json")
            .map((res: any) => res.json())
            .catch(function name(er: any) {
                console.log(er);
                return er;
            });
    }
    
    public setIsLogIn(isLoggedIn: boolean) {
        this.isLogIn = isLoggedIn;
    }

    public getIsLogIn(): boolean {
        return this.isLogIn;
    }

    resolve(route: ActivatedRouteSnapshot): any {
        console.log(route);
    }
}