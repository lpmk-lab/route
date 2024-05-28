import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
coruse?:any
  activeRoute:ActivatedRoute=inject(ActivatedRoute)
  router :Router = inject(Router)
  ngOnInit(): void {
    // this.activeRoute.data.subscribe((data)=>{
    //   this.coruse=data
    // })
    // this.coruse=this.router.getCurrentNavigation()?.extras.state;
    this.coruse=history.state
  }
}
