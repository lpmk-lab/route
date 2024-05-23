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
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:"home",pathMatch:'full' },
  // { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course', component: CourseComponent },
  { path: '**', component: FOFComponent },  // Wildcard route for a 404 page
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // HomeComponent,
    FooterComponent,
    // AboutComponent,
    // ContactComponent,
    // CourseComponent,
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
