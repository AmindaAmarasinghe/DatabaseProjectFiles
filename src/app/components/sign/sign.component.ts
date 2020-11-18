import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  SignForm : FormGroup;
  hide = true;
  submitted = false;
  subjects= [
    {value: 'steak-0', viewValue: 'maths'},
    {value: 'pizza-1', viewValue: 'Physics'},
    {value: 'tacos-2', viewValue: 'chemistry'}
  ];
  subtasks: [
    {name: 'Primary', completed: false, color: 'primary'},
    {name: 'Accent', completed: false, color: 'accent'},
    {name: 'Warn', completed: false, color: 'warn'}
  ];
  defaultValue;
  constructor(private formBuilder:FormBuilder, private http: HttpClient) { }
  
  onSubmit(){
    
    
    this.submitted = true;
    
    console.log(this.SignForm.value);
    
    var myFormdata = new FormData();
    myFormdata.append('firstname',this.SignForm.value.name1);
    myFormdata.append('lastname',this.SignForm.value.name2);
    myFormdata.append('myemail',this.SignForm.value.contact);
    myFormdata.append('address1',this.SignForm.value.address1);
    myFormdata.append('address2',this.SignForm.value.address2);
    myFormdata.append('birthdate',this.SignForm.value.dp3);
    myFormdata.append('password',this.SignForm.value.password);
    myFormdata.append('myusername',this.SignForm.value.name1);
    return this.http.post('http://localhost:81/save.php/',  myFormdata, { responseType: 'text'}).toPromise();

     //this.http.post('http://localhost:81/save.php/', myFormdata).subscribe((res: Response)=>{
      
    

  }

  ngOnInit(): void {
    
  }

}
