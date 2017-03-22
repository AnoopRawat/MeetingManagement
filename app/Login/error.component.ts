import { Component, OnInit, OnChanges } from '@angular/core';
import {LoginService} from '../Login/login.service';

@Component({
  template: `<div layout="column" flex id="content" role="main">
			          <h1>Error!!</h1>
        </div>           
  `
})
export class ErrorComponent {

  constructor(private custService: LoginService) {

  }
  action: string = "";
}