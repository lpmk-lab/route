import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../Modules/user';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogged:boolean=false;
userService:UserService=inject(UserService)
courseService:CourseService=inject(CourseService)
  constructor() { }
  login( username:string,password:string){
  let User= this.userService.USERS.find((x:any)=>x.username==username && x.password==password)
  if(User===undefined)
    this.isLogged=false
  else
  this.isLogged=true

  return User
  }

  logout(){
    this.isLogged=false
  }

  isAuthorize(){
    return this.isLogged;
  }

  resolve(){
 return this.courseService.getALLcourse();
  }
}
