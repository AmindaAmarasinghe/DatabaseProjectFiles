import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data=[];
  constructor(public dialog1: MatDialog, private http: HttpClient) { 
    this.http.get('http://localhost:81/CO226/group13/coursesintro.php').subscribe(data=>{
      this.data.push(data);
      
      
    }, error=>console.error(error));
  }
  course(){
    const list = document.getElementById('course-list-id');
    list.classList.remove('close');
  }
  nocourse(){
    const list = document.getElementById('course-list-id');
    list.classList.add('close');
  }
  noabout(){
    const about=document.getElementById('about');
    about.classList.add('close');
  }
  about(){
    const about=document.getElementById('about');
    about.classList.remove('close');
  }
  openDialog():void {
    
    const dialogRef = this.dialog1.open(LoginComponent,{
      width: '70%',
      height: '70%',
      hasBackdrop:true
      
    });
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose =false;
        //dialogConfig.autoFocus = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  }
  more(){
    this.openDialog();
  }
  ngOnInit(): void {
  }

}
