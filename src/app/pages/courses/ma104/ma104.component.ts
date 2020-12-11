import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ma104',
  templateUrl: './ma104.component.html',
  styleUrls: ['./ma104.component.scss']
})
export class MA104Component implements OnInit {

  courseid: string = "MA104";
  courseName: string = "Discrete maths";
  teachFormMA104: FormGroup;
  parameterValue:string;
  teacherId:boolean=false;
  titleArray=[];
  contentArray=[]
  constructor(private _activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {

    this.parameterValue = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.parameterValue[0]=="T"){
      this.teacherId=true;
    }
  }

}
