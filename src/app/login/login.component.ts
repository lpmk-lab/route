import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('username') userName?: ElementRef;
   @ViewChild('password') password?: ElementRef;
    authService:AuthService=inject(AuthService)
    router:Router=inject(Router)
    activeRoute : ActivatedRoute =inject(ActivatedRoute)


ngOnInit(): void {
  this.activeRoute.queryParams.subscribe((data)=>{
   const islogout=  Boolean( data['logout'])
   if(islogout==true){
    this.authService.logout()
    alert('Log out sucessfully!')
   }

  })
}

   OnlogInClick(){
    const userName=this.userName?.nativeElement.value;
    const password=this.password?.nativeElement.value;

    const User= this.authService.login(userName,password)
    if(User===undefined){
      alert('login information is not correct')
    }else{
      alert('success! Welcome '+userName)
    }
    this.router.navigate(['/Courses'])

   }
}
