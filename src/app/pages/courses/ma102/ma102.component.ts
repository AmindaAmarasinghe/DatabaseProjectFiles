import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ma102',
  templateUrl: './ma102.component.html',
  styleUrls: ['./ma102.component.scss']
})
export class MA102Component implements OnInit {

  courseid: string = "MA102";
  courseName: string = "Probability & Statistics";
  teachFormMA102: FormGroup;
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
