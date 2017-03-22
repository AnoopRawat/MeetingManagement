import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './Login/login.component';
import { LoginService } from './Login/login.service'
import { LoginRouteGuardService } from './Login/login-route-guard.service';
import { UserDetailComponent } from './User/user-detail.component';
import { UserDetailResolveService } from './User/user-detail.resolve.service';
import { ErrorComponent } from './Login/error.component'
import {AppRouterModule} from './appRouter.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
    imports: [BrowserModule, FormsModule, MaterialModule.forRoot(),
        NgbModule.forRoot(), AppRouterModule, RouterModule.forRoot([])],
    declarations: [AppComponent, LoginComponent, UserDetailComponent, ErrorComponent],
    bootstrap: [AppComponent],
    providers: [LoginService, UserDetailResolveService, LoginRouteGuardService]
})
export class AppModule { }