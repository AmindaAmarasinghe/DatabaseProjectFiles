import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit {
  mydata =[];
  public parameterValue: string;
  clicked = false;
  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute    ) { 
    
    this.http.get('http://localhost:81/CO226/project/coursesintro.php').subscribe(data=>{
      this.mydata.push(data);
      
      
    }, error=>console.error(error));
  }
  Follow(id){
    this.clicked = true;
    var myFormdata = new FormData();
   
    myFormdata.append('Contact',this.parameterValue);
    myFormdata.append('courseId',id);
    console.log(this.parameterValue);
    console.log(id);
    
    return this.http.post('http://localhost:81/CO226/project/follow.php/',  myFormdata).subscribe((res: Response)=>{
      
    })
  }

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(parameter => {
    //  this.parameterValue = parameter.parameter
    this.parameterValue = this._activatedRoute.snapshot.paramMap.get('email');
    console.log(this.parameterValue);
    this.clicked = false;
  }

}
