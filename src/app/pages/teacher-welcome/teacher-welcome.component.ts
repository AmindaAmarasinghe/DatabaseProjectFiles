import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-teacher-welcome',
  templateUrl: './teacher-welcome.component.html',
  styleUrls: ['./teacher-welcome.component.scss']
})
export class TeacherWelcomeComponent implements OnInit {

  constructor(private sharedServiceNo: SharedServiceService) { }

  ngOnInit(): void {
    this.sharedServiceNo.sendEvent();
  }

}
