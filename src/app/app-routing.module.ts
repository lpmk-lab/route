import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FOFComponent } from './404/404.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActiviate,canActiviateChild } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo:"Login",pathMatch:'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Contacts', component: ContactComponent ,canDeactivate:[((cam:ContactComponent)=>{return cam.onExit()})]},
  // { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Login', component: LoginComponent },

  { path: 'Courses', component: CourseComponent },
  // { path: 'Courses/Course/:id/:name', component: CourseComponent },
  // { path: 'Courses/Course/:id', component: CourseDetailComponent },
  {path: 'Courses',canActivateChild:[canActiviateChild],children:[
    { path: 'Course/:id', component: CourseDetailComponent },
    { path: 'Checkout', component: CheckoutComponent ,data:{title:'Advanced JavaScript Techniques LP',price:399},canActivate:[canActiviate]}
  ]},
  { path: '**', component: FOFComponent } // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
