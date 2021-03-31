import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { GradesComponent } from './grades/grades.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
    {path: 'accounts', component: AuthComponent},
    {path: 'grades', component: GradesComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'classes', component: TeachersComponent},
    {path: 'teachers', component: ClassesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail', component: DetailPageComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
