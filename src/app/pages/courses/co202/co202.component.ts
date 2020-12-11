import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-co202',
  templateUrl: './co202.component.html',
  styleUrls: ['./co202.component.scss']
})
export class Co202Component implements OnInit {

  courseid: string = "CO202";
  courseName: string = "Computer Architecture";
  teachFormCO202: FormGroup;
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
