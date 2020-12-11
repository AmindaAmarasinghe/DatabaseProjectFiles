import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ma101',
  templateUrl: './ma101.component.html',
  styleUrls: ['./ma101.component.scss']
})
export class MA101Component implements OnInit {

  courseid: string = "MA101";
  courseName: string = "Linear Algebra";
  teachFormMA101: FormGroup;
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
