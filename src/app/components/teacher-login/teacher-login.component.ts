import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Logger } from '../../model/logger.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedServiceService} from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  user:Logger = new Logger();
  LoginTeachForm : FormGroup;
  logged : boolean = false;
  result =[];
  i:number=0;
  hide = true;
  data;
  submitted= false;
  constructor(private http:HttpClient,private sharedServiceNo: SharedServiceService,private sharedService: SharedServiceService, private router:Router, private formBuilder:FormBuilder, private _snackBar: MatSnackBar,public dialog: MatDialog) { 
    
    
   
    
        
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  public getData(){
    this.http.get('http://localhost:81/CO226/group13/loginResult.json/data')
            .subscribe(result => this.data = result);
            console.dir(this.data);
  }
  onSubmitTeach(){
    //this.firebaseService.createUser(value, this.avatarLink)
    
    //alert("hi")
    
    //this.resetFields();
    if(this.LoginTeachForm.value.username == null || this.LoginTeachForm.value.password == null){
    Swal.fire({
      title: 'Incomplete',
      text: 'please fill all fields required',
      icon: 'warning'
    })
  }else{
    this.dialog.closeAll();
    this.openSnackBar('Login as '+this.LoginTeachForm.value.username, 'OK')
    //this.logged = true;
    
    this.submitted = true;
    this.sharedService.sendEvent();
    console.log(this.LoginTeachForm.value);
    
    var myFormdata = new FormData();
    myFormdata.append('myusername',this.LoginTeachForm.value.username);
    myFormdata.append('mypwd',this.LoginTeachForm.value.password);
    this.router.navigate(['teacher',this.LoginTeachForm.value.username]);
    this.http.post('http://localhost:81/CO226/group13/loginTeach.php/', myFormdata).subscribe((res: Response)=>{
      this.result.push(res);
      console.dir(res);
      console.log(this.result[this.i]);
      if(this.result[this.i]=="success"){
        
        
        this.openSnackBar('Login as '+this.LoginTeachForm.value.username, 'OK')
        this.router.navigate(['teacher',this.LoginTeachForm.value.username]);
        
    
      }else{
        ++this.i;
        this.openSnackBar('your username or password is incorrect!!!', 'OK')
        Swal.fire({
          title: 'Invalid Login',
          text: 'your username or password is incorrect!!!',
          icon: 'warning'
        })
      }
    })
    
    
  }
  }
  get formAltaControls(): any {
    return this.LoginTeachForm['controls'];
  } 
  follow(){
    var myFormdata1 = new FormData();
    myFormdata1.append('myusername',this.LoginTeachForm.value.username);
    return this.http.post('http://localhost:81/CO226/group13/mycources.php/', myFormdata1).subscribe((res: Response)=>{
     console.log(res);
    })
  }
  ngOnInit(): void {
    this.sharedServiceNo.sendEvent();
    this.LoginTeachForm = this.formBuilder.group({
      'username':[this.user.username,[
          Validators.required
      ]],
      'password':[this.user.pwd,[
        Validators.required
    ]]
    })
   

    //this.http.get<any>('co226/project/loginResult.json').subscribe(result => this.data = result);
    //console.log(this.data);
  //  this.getData();
   
    /*if(jsondata.data == "logged successully"){
      this.logged = true;
      console.log(this.logged);
    }*/
  }

}
