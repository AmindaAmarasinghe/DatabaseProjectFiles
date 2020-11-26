import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  mysubjects=[];
  constructor(private http: HttpClient) {
    //this.http.get('http://localhost:81/CO226/project/coursesintro.php').subscribe(data=>{
     // this.mysubjects.push(data);
      
      
    //}, error=>console.error(error));
    this.http.get('http://localhost:81/CO226/project/mycources.php').subscribe(data=>{
      this.mysubjects.push(data);
      
      
    }, error=>console.error(error));
   }

  ngOnInit(): void {
  }

}
