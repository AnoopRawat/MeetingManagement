import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './User/user-detail.component';
import { UserDetailResolveService } from './User/user-detail.resolve.service';
import { ErrorComponent } from './Login/error.component'
import { LoginRouteGuardService } from './Login/login-route-guard.service';

const routes: Routes = [
    {
        path: 'User',
        component: UserDetailComponent,
        canActivate: [LoginRouteGuardService]
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'Error',
        component: ErrorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }