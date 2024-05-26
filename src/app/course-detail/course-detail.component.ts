import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, course1 } from '../course/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy{
course?:any;
courseID:number=1

ParamsObs:any

constructor(private activeRoute:ActivatedRoute){

}
ngOnInit(): void {
  // this.courseID=this.activeRoute.snapshot.paramMap.get('id')
  // this.courseID=this.activeRoute.snapshot.params['id']
  this.ParamsObs=this.activeRoute.params.subscribe((data)=>{
      this.courseID=+data['id']
      this.course=course1.find(x=>x.id==this.courseID)
  })

}
ngOnDestroy(): void {

  this.ParamsObs.unsubscribe();
}

}
