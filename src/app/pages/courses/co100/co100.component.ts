import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-co100',
  templateUrl: './co100.component.html',
  styleUrls: ['./co100.component.scss']
})
export class CO100Component implements OnInit {
  courseid: string = "CO100";
  courseName: string = "C Programming";
  teachFormCO100: FormGroup;
  titleArray=[];
  contentArray=[]
  constructor() { }

  ngOnInit(): void {
  }

}
