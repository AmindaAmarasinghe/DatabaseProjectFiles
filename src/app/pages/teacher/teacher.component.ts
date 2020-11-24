import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  selectedFile:File = null;
  constructor() { }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  OnUpload(){
    
  }
  ngOnInit(): void {
  }

}
