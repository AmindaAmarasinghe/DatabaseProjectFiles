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
  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute    ) { 
    
    this.http.get('http://localhost:81/CO226/project/coursesintro.php').subscribe(data=>{
      this.mydata.push(data);
      
      
    }, error=>console.error(error));
  }

  ngOnInit(): void {
    //this._activatedRoute.params.subscribe(parameter => {
     // this.parameterValue = parameter.parameter
  }

}
