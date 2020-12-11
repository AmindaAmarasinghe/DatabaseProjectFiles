import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-co102',
  templateUrl: './co102.component.html',
  styleUrls: ['./co102.component.scss']
})
export class Co102Component implements OnInit {

  courseid: string = "CO102";
  courseName: string = "Java programming";
  teachFormCO102: FormGroup;
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
