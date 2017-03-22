import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';

import 'rxjs';

@Injectable()
export class UserDetailResolveService implements Resolve<any> {
    constructor(private router: Router) { }

    resolve(route: ActivatedRouteSnapshot) {
        console.log(route);
        let id = route.params['id'];
        return null;
    }

}