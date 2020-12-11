import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { CourcesComponent } from './pages/cources/cources.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { TeacherJoinComponent } from './components/teacher-join/teacher-join.component';
import { CO100Component } from './pages/courses/co100/co100.component';
import { CO101Component } from './pages/courses/co101/co101.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TeacherWelcomeComponent } from './pages/teacher-welcome/teacher-welcome.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SliderComponent,
    SignComponent,
    AdminComponent,
    CourcesComponent,
    TeacherComponent,
    StudentComponent,
    ScrollUpComponent,
    ConfirmDialogComponent,
    TeacherLoginComponent,
    TeacherJoinComponent,
    CO100Component,
    CO101Component,
 
    NotFoundComponent,
    TeacherWelcomeComponent,
    Co102Component,
    Co103Component,
    Co104Component,
    Co105Component,
    Co200Component,
    Co201Component,
    Co202Component,
    Co203Component,
    Co204Component,
    Co205Component,
    MA100Component,
    MA101Component,
    MA102Component,
    MA103Component,
    MA104Component,
    MA105Component,
    MA200Component,
    MA201Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatListModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
