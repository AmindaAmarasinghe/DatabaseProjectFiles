import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { JsonServiceService } from '../../services/json-service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data=[];
  teacher=[];
  student=[];
  selectedIndex: number=0;
  tab_color:string="primary";
  constructor(private http: HttpClient, private json: JsonServiceService, private sharedService: SharedServiceService) { 
    this.http.get('http://localhost:81/CO226/project/coursesintro.php').subscribe(data=>{
      this.data.push(data);
      
      
    }, error=>console.error(error));
    this.http.get('http://localhost:81/CO226/project/teacherdetails.php').subscribe(data=>{
      this.teacher.push(data);
      
      
    }, error=>console.error(error));
    this.http.get('http://localhost:81/CO226/project/studentdetails.php').subscribe(data=>{
      this.student.push(data);
      
      
    }, error=>console.error(error));
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  getData(){
    //this.http.get<any>('/save.php').subscribe(result => this.data = result);
    //console.log(this.data);
    console.log(this.json.getJson());
  }

  ngOnInit(): void {
    this.sharedService.sendEvent();
  }

}
