import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../services/json-service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   data;
  constructor(private http: HttpClient, private json: JsonServiceService) { }
  getData(){
    //this.http.get<any>('/save.php').subscribe(result => this.data = result);
    //console.log(this.data);
    console.log(this.json.getJson());
  }
  ngOnInit(): void {
  }

}
