import { Component, OnInit, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'route';
  isLoading: boolean = true;

  router:Router=inject(Router)
  ngOnInit() {
  this.router.events.subscribe((routerEvent:any)=>{

    if(routerEvent instanceof NavigationStart){
      this.isLoading=true
    }
    if(routerEvent instanceof NavigationEnd ||routerEvent instanceof NavigationCancel ||routerEvent instanceof NavigationError){
      this.isLoading=false
    }


  })
  }
}
