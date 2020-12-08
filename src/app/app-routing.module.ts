import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { SliderComponent } from './components/slider/slider.component';
import { TeacherJoinComponent } from './components/teacher-join/teacher-join.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CourcesComponent } from './pages/cources/cources.component';
import { CO100Component } from './pages/courses/co100/co100.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCourseComponent } from './pages/main-course/main-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
    path:'cources/:email',
    component: CourcesComponent
   },
   {
    path:'cources/:username',
    component: CourcesComponent
   },
   {
    path:'teacher-log',
    component: TeacherLoginComponent
   },{
    path:'teacher-join',
    component: TeacherJoinComponent
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
    path:'teacher',
    component: TeacherComponent
   },
   {
    path:'mycourse',
    component: MainCourseComponent
   },
   {
    path:'CO100',
    component:  CO100Component
   },
   {
    path:'teacher/:id',
    component: TeacherComponent
   },
   {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
