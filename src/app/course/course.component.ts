import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, course1 } from '../course/course';
import { CourseService } from '../Services/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  implements OnInit{
  constructor(private route:Router){

  }

  activeRoute:ActivatedRoute=inject(ActivatedRoute)
  courseService:CourseService=inject(CourseService)
  courses:Course[]=[];
  searchstring:string|null=null
  gotoCourseDetail(id:number){
    this.route.navigate(['Course',id],{relativeTo:this.activeRoute})

  }
  ngOnInit(): void {

      // this.searchstring=  this.activeRoute.snapshot.queryParams['search']
      // this.searchstring=  this.activeRoute.snapshot.queryParamMap.get('search')
     this.activeRoute.queryParams.subscribe((data)=>{
      this.searchstring=data['search']
      if(this.searchstring==undefined||this.searchstring==''||this.searchstring==null)
       this.courseService.getALLcourse().subscribe((data:any)=>{
        this.courses=data
      })

      else{
        this.courses=  course1.filter(x=>x.format.toLowerCase().includes(this.searchstring==null?'':this.searchstring));
      }
      })

  }
}
