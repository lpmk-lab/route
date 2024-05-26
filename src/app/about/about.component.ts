import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private route:Router,private activeRoute:ActivatedRoute){

  }
  NavigateToHome(){
    this.route.navigate(['Home'])
     this.route.navigate(['Home'],{relativeTo:this.activeRoute})
    //this.route.navigateByUrl('Home')
  }
}
