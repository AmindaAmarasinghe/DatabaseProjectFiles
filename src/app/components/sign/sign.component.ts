import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../model/student.model';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
//import { formatDate } from '@angular/common' 
import { Moment}  from 'moment';
import * as moment from 'moment';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  
  //console.log("Successful ", jsonObj.status);
  registered_num: number=0;
  hide = true;
  public selection: string;
  submitted = false;
  student:Student = new Student();
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
  data;
  moment : Moment;
  constructor(private formBuilder1:FormBuilder, private http: HttpClient, private router: Router) { }
  
  SignForm : FormGroup;
  onSubmit(){
    let newdateValue = moment(this.SignForm.get('dp3').value).format("YYYY-MM-DD");
    this.SignForm.get('dp3').setValue(newdateValue);
    //console.log(this.SignForm.value);
    if(this.SignForm.value.name1 == null || this.SignForm.value.gender == null || this.SignForm.value.name2 == null || this.SignForm.value.contact ==null || this.SignForm.value.address1 == null || this.SignForm.value.address2 == null || this.SignForm.value.dp3== null|| this.SignForm.value.password ==null|| this.SignForm.value.repassword == null){
      Swal.fire({
        title: 'Incomplete',
        text: 'please fill all fields required',
        icon: 'warning'
      })
    }else{
    if(this.SignForm.value.password != this.SignForm.value.repassword){
      Swal.fire(
        {
          title: 'Sorry',
          text: 'Confirm your password correctly!!!',
          icon: 'warning'
        }
      )
    }
    if(this.SignForm.value.password == this.SignForm.value.repassword){
    this.submitted = true;
    
    this.registered_num++;
    console.log(this.submitted);
    console.log(this.SignForm.value);
    Swal.fire(
      {
        title: 'Welcome To LearnOnline',
        text: 'You have registered successfully',
        icon: 'success'
      }
    )
    this.router.navigate(['/cources']);
    var myFormdata = new FormData();
    myFormdata.append('index',"ST"+this.registered_num.toString());
    myFormdata.append('firstname',this.SignForm.value.name1);
    myFormdata.append('lastname',this.SignForm.value.name2);
    myFormdata.append('myemail',this.SignForm.value.contact);
    myFormdata.append('address1',this.SignForm.value.address1);
    myFormdata.append('address2',this.SignForm.value.address2);
    myFormdata.append('birthdate',this.SignForm.value.dp3);
    myFormdata.append('pwd',this.SignForm.value.password);
    myFormdata.append('gender',this.SignForm.value.gender);
    return this.http.post('http://localhost:81/CO226/project/registration.php/',  myFormdata).subscribe((res: Response)=>{
      
    })
    
     
     
    }
  }
  }
  dateFormat(date, controlType: string) {
    this.SignForm.get(controlType).setValue(moment(date).format("YYYY-MM-DD"));
}

  ngOnInit(): void {
    this.SignForm = this.formBuilder1.group({
      'name1':[this.student.name1,[
          Validators.required
      ]],
      'name2':[this.student.name2,[
        Validators.required
    ]],
    'contact':[this.student.contact,[
      Validators.required
     ]],
      'address1':[this.student.address1,[
        Validators.required
    ]],
    'address2':[this.student.address2,[
      Validators.required
    ]],
    'dp3':[this.student.dp3,[
      Validators.required
    ]],
    'gender':[this.student.gender,[
      Validators.required
    ]],
    'password':[this.student.pwd,[
      Validators.required
    ]],
    'repassword':[this.student.pwd,[
      Validators.required
    ]]
    })
    
  }

}
