import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  selectedFile:File = null;
  CourseContent : FormGroup;
  mysubjects=[];
  parameter: string;
  subject=[];
  
  list: string;
  constructor(private http: HttpClient, private _activatedRoute1: ActivatedRoute ,private sharedService: SharedServiceService, private router: Router) {
    var myFormdata = new FormData();
    this.parameter = this._activatedRoute1.snapshot.paramMap.get('id');
    console.log(this.parameter);
    myFormdata.append('userId',this.parameter);
    this.http.post('http://localhost:81/CO226/group13/teachercourses.php/',  myFormdata).subscribe((res: Response)=>{
      this.mysubjects.push(res);
      this.list=this.mysubjects[0][0].courses;
      console.log(this.mysubjects[0][0]);
      console.log(this.list.match(/.{1,5}/g));
      this.subject.push(this.list.match(/.{1,5}/g));
      
      
    })
   }
   goCourse(id){
    console.log(id);
    this.router.navigate([id,this.parameter]);
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  OnUpload(){
    
  }

  ngOnInit(): void {
    this.parameter = this._activatedRoute1.snapshot.paramMap.get('id');
    console.log(this.parameter);
    this.sharedService.sendEvent();
  }

}
