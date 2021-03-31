import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthService } from './auth/example.service';
import { AuthToken } from './services/AuthToken';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    StudentsComponent,
    TeachersComponent,
    GradesComponent,
    ClassesComponent,
    DashboardComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [ AuthToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
