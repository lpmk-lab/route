import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { FOFComponent } from './404/404.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
const routes: Routes = [
  { path: '', redirectTo:"home",pathMatch:'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Contacts', component: ContactComponent },
  // { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },

  { path: 'Courses', component: CourseComponent },
  // { path: 'Courses/Course/:id/:name', component: CourseComponent },
  { path: 'Courses/Course/:id', component: CourseDetailComponent },
  { path: '**', component: FOFComponent } // Wildcard route for a 404 page
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CourseComponent,
    CourseDetailComponent,
    // 404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
