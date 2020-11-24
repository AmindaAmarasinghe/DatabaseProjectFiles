import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  mysubjects=[
    {id: 'co100', name: 'pp'},
    {id: 'co101', name: 'po'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
