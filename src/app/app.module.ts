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
    TeacherWelcomeComponent
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
