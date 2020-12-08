import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  mysubjects=[];
  parameter: string;
  
  constructor(private http: HttpClient, private _activatedRoute1: ActivatedRoute , private router: Router) {
    var myFormdata = new FormData();
   
    myFormdata.append('userId',this.parameter);
    this.http.post('http://localhost:81/CO226/project/mycources.php/',  myFormdata).subscribe((res: Response)=>{
      this.mysubjects.push(res);
      console.log(res);
    })
   }
  go(){
    this.router.navigate(['/cources',this.parameter]);
    console.log(this.parameter)
  }
  ngOnInit(): void {
    this.parameter = this._activatedRoute1.snapshot.paramMap.get('username');
  
   
  
    // this.http.get('http://localhost:81/CO226/project/mycources.php/').subscribe(data=>{
      
    //   console.log(data);
      
    // }, error=>console.error(error));
  }

}
