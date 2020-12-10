import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  mysubjects=[];
  parameter: string;
  subject=[];
  list: string;
  constructor(private http: HttpClient, private _activatedRoute1: ActivatedRoute , private router: Router,public sharedService: SharedServiceService) {
    var myFormdata = new FormData();
    this.parameter = this._activatedRoute1.snapshot.paramMap.get('username');
    console.log(this.parameter);
    myFormdata.append('userId',this.parameter);
    this.http.post('http://localhost:81/CO226/group13/mycources.php/',  myFormdata).subscribe((res: Response)=>{
      this.mysubjects.push(res);
      this.list=this.mysubjects[0][0].Enrolledcourses;
      console.log(this.list);
      console.log(this.list.match(/.{1,5}/g));
      this.subject.push(this.list.match(/.{1,5}/g));
      
      
    })
   }
  go(){
    this.router.navigate(['/cources',this.parameter]);
    console.log(this.parameter)
  }
  goCourse(id){
    console.log(id);
    this.router.navigate([id,this.parameter]);
  }
  ngOnInit(): void {
    this.parameter = this._activatedRoute1.snapshot.paramMap.get('username');
  
   this.sharedService.sendEvent();
  
    // this.http.get('http://localhost:81/CO226/project/mycources.php/').subscribe(data=>{
      
    //   console.log(data);
      
    // }, error=>console.error(error));
  }

}
