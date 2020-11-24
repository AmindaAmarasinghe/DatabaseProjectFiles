import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { SliderComponent } from './components/slider/slider.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CourcesComponent } from './pages/cources/cources.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
   },
   {
    path:'login',
    component:LoginComponent
   },
   {
     path:'sign',
     component: SignComponent
   },
   {
    path:'sign#head1',
    component: SignComponent
   },
   {
    path:'cources',
    component: CourcesComponent
   },
   {
    path:'teacher',
    component: TeacherComponent
   },
   {
    path:'student',
    component: StudentComponent
   },
   {
    path:'student/:username',
    component: StudentComponent
   },
   {
    path:'admin',
    component: AdminComponent
   },
   {
    path:'**',
    component: SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
