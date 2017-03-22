import { Component, OnInit, OnChanges } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'my-app',
  template: ` 
      <div id="container" style="white-space:nowrap">
        <div id="image" style="display:inline;">
            
        </div>
        <div id="texts" style="display:inline; white-space:nowrap;"> 
          <h3>Meeting Management</h3>
        </div>
    </div>​
    <div class="loading-overlay" *ngIf="loading">
      <md-spinner></md-spinner>
    </div>
    <router-outlet></router-outlet>

    <template ngbModalContainer></template>
    `
})

export class AppComponent implements OnInit, OnChanges {
  loading: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.loading = true;
      }
      if (e instanceof NavigationEnd) {
        var this_ = this;
        setTimeout(function () {
          console.log('navigation end');
          this_.loading = false;
        }, 2000);

      }
      if (e instanceof NavigationCancel) {
        //this.loading = false;
      }
      if (e instanceof NavigationError) {
        //this.loading = false;
      }
    });

  }

  ngOnInit() {
    console.log("inside on init");
  }

  ngOnChanges() {
    console.log("inside on change");
  }
}