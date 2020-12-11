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
import { CO101Component } from './pages/courses/co101/co101.component';
import { Co102Component } from './pages/courses/co102/co102.component';
import { Co103Component } from './pages/courses/co103/co103.component';
import { Co104Component } from './pages/courses/co104/co104.component';
import { Co105Component } from './pages/courses/co105/co105.component';
import { Co200Component } from './pages/courses/co200/co200.component';
import { Co201Component } from './pages/courses/co201/co201.component';
import { Co202Component } from './pages/courses/co202/co202.component';
import { Co203Component } from './pages/courses/co203/co203.component';
import { Co204Component } from './pages/courses/co204/co204.component';
import { Co205Component } from './pages/courses/co205/co205.component';
import { MA100Component } from './pages/courses/ma100/ma100.component';
import { MA101Component } from './pages/courses/ma101/ma101.component';
import { MA102Component } from './pages/courses/ma102/ma102.component';
import { MA103Component } from './pages/courses/ma103/ma103.component';
import { MA104Component } from './pages/courses/ma104/ma104.component';
import { MA105Component } from './pages/courses/ma105/ma105.component';
import { MA200Component } from './pages/courses/ma200/ma200.component';
import { MA201Component } from './pages/courses/ma201/ma201.component';
import { HomeComponent } from './pages/home/home.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherWelcomeComponent } from './pages/teacher-welcome/teacher-welcome.component';
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
   },
   {
    path:'teacher-join',
    component: TeacherJoinComponent
   },
   {
    path:'teacherWelcome',
    component: TeacherWelcomeComponent
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
    path:'CO100',
    component:  CO100Component
   },
   {
    path:'CO100/:id',
    component:  CO100Component
   },
   {
    path:'CO101',
    component:  CO101Component
   },
   {
    path:'CO101/:id',
    component:  CO101Component
   },
   {
    path:'CO102',
    component:  Co102Component
   },
   {
    path:'CO102/:id',
    component:  Co102Component
   },
   {
    path:'CO103',
    component:  Co103Component
   },
   {
    path:'CO103/:id',
    component:  Co103Component
   },
   {
    path:'CO104',
    component:  Co104Component
   },
   {
    path:'CO104/:id',
    component:  Co104Component
   },
   {
    path:'CO105',
    component:  Co105Component
   },
   {
    path:'CO105/:id',
    component:  Co105Component
   },
   {
    path:'CO200',
    component:  Co200Component
   },
   {
    path:'CO200/:id',
    component:  Co200Component
   },
   {
    path:'CO201',
    component:  Co201Component
   },
   {
    path:'CO201/:id',
    component:  Co201Component
   },
   {
    path:'CO201',
    component:  Co201Component
   },
   {
    path:'CO201/:id',
    component:  Co201Component
   },
   {
    path:'CO202',
    component:  Co202Component
   },
   {
    path:'CO202/:id',
    component:  Co202Component
   },
   {
    path:'CO203',
    component:  Co203Component
   },
   {
    path:'CO203/:id',
    component:  Co203Component
   },{
    path:'CO204',
    component:  Co204Component
   },
   {
    path:'CO204/:id',
    component:  Co204Component
   },{
    path:'CO205',
    component:  Co205Component
   },
   {
    path:'CO205/:id',
    component:  Co205Component
   },
   {
    path:'MA100',
    component:  MA100Component
   },
   {
    path:'MA100/:id',
    component:  MA100Component
   },{
    path:'MA101',
    component:  MA101Component
   },
   {
    path:'MA101/:id',
    component:  MA101Component
   },{
    path:'MA102',
    component:  MA102Component
   },
   {
    path:'MA102/:id',
    component:  MA102Component
   },{
    path:'MA103',
    component:  MA103Component
   },
   {
    path:'MA103/:id',
    component:  MA103Component
   },{
    path:'MA104',
    component:  MA104Component
   },
   {
    path:'MA104/:id',
    component:  MA104Component
   },{
    path:'MA105',
    component:  MA105Component
   },
   {
    path:'MA105/:id',
    component:  MA105Component
   },{
    path:'MA200',
    component:  MA200Component
   },
   {
    path:'MA200/:id',
    component:  MA200Component
   },
   {
    path:'MA201',
    component:  MA201Component
   },
   {
    path:'MA201/:id',
    component:  MA201Component
   },
   {
    path:'teacher/:id',
    component: TeacherComponent
   },
   {
    path:'teacher',
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
