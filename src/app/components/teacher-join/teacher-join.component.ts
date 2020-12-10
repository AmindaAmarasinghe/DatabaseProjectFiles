import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../model/student.model';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
//import { formatDate } from '@angular/common' 
import { Moment}  from 'moment';
import * as moment from 'moment';
import { Router} from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';
@Component({
  selector: 'app-teacher-join',
  templateUrl: './teacher-join.component.html',
  styleUrls: ['./teacher-join.component.scss']
})
export class TeacherJoinComponent implements OnInit {

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
   
   myDate: string
   constructor(private formBuilder1:FormBuilder, private http: HttpClient, private router: Router, private sharedService : SharedServiceService,private sharedService4 : SharedServiceService,private sharedServiceNo : SharedServiceService) { 
     
   }
   
   SignFormTeach : FormGroup;
   onSubmit(){
     let newdateValue = moment(this.SignFormTeach.get('dp3').value).format("YYYY-MM-DD");
     this.myDate = moment(new Date()).format("YYYY-MM-DD");
     this.SignFormTeach.get('dp3').setValue(newdateValue);
     console.log(this.SignFormTeach.value);
     if(this.SignFormTeach.value.name1 == null || this.SignFormTeach.value.gender == null || this.SignFormTeach.value.name2 == null || this.SignFormTeach.value.contact ==null || this.SignFormTeach.value.address1 == null || this.SignFormTeach.value.address2 == null || this.SignFormTeach.value.dp3== null|| this.SignFormTeach.value.password ==null|| this.SignFormTeach.value.repassword == null || this.SignFormTeach.value.descript == null){
       Swal.fire({
         title: 'Incomplete',
         text: 'please fill all fields required',
         icon: 'warning'
       })
     }else{
     if(this.SignFormTeach.value.password != this.SignFormTeach.value.repassword){
       Swal.fire(
         {
           title: 'Sorry',
           text: 'Confirm your password correctly!!!',
           icon: 'warning'
         }
       )
     }
     if(this.SignFormTeach.value.password == this.SignFormTeach.value.repassword){
     this.submitted = true;
     
     this.registered_num++;
     console.log(this.submitted);
     console.log(this.SignFormTeach.value);
     Swal.fire(
       {
         title: 'Welcome To LearnOnline',
         text: 'You have registered successfully',
         icon: 'success'
       }
     )
     
     var myFormdata = new FormData();
     console.log(this.myDate);
     this.sharedService.sendEvent();
     myFormdata.append('firstname',this.SignFormTeach.value.name1);
     myFormdata.append('lastname',this.SignFormTeach.value.name2);
     myFormdata.append('myemail',this.SignFormTeach.value.contact);
     myFormdata.append('address1',this.SignFormTeach.value.address1);
     myFormdata.append('address2',this.SignFormTeach.value.address2);
     myFormdata.append('birthdate',this.SignFormTeach.value.dp3);
     myFormdata.append('pwd',this.SignFormTeach.value.password);
     myFormdata.append('gender',this.SignFormTeach.value.gender);
     myFormdata.append('regdate',this.myDate);
     myFormdata.append('descript',this.SignFormTeach.value.descript);
     this.router.navigate(['/teacherWelcome']);
     return this.http.post('http://localhost:81/CO226/group13/teacherReg.php/',  myFormdata).subscribe((res: Response)=>{
       
     })
     
      
      
     }
   }
   }
   dateFormat(date, controlType: string) {
     this.SignFormTeach.get(controlType).setValue(moment(date).format("YYYY-MM-DD"));
 }
 
   ngOnInit(): void {
    //this.sharedServiceteach.sendEvent();
    this.sharedServiceNo.sendEvent();
     this.SignFormTeach = this.formBuilder1.group({
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
     ]],
     'descript':[this.student.descript,[
      Validators.required
    ]]
     })
     
   }
 

}
