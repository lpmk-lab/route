import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course1 ,Course} from '../course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getALLcourse(){
 return new Observable<Course[]>((data)=>{
    setTimeout(() => {
      data.next(course1)
    }, 5000);
  })
}
  constructor() { }


}
