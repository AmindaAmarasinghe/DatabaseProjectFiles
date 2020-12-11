import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-co104',
  templateUrl: './co104.component.html',
  styleUrls: ['./co104.component.scss']
})
export class Co104Component implements OnInit {

  courseid: string = "CO104";
  courseName: string = "Digital Design";
  teachFormCO104: FormGroup;
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
