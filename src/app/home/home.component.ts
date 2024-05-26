import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  router:Router=inject(Router)
  onSearchClick(searchValue:string){
    this.router.navigate(['/Courses'],{queryParams:{'search':searchValue}})
  }
}
