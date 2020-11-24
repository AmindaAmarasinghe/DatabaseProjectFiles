import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Logger } from '../../model/logger.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
//import * as jsondata from '../../../../../../../../xampp/htdocs/CO226/project/loginResult.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:Logger = new Logger();
  LoginForm : FormGroup;
  logged : boolean = false;
  data;
  hide = true;
  submitted= false;
  constructor(private http:HttpClient,private router:Router, private formBuilder:FormBuilder, private _snackBar: MatSnackBar,public dialog: MatDialog) { 
    
     
   
    
        
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  public getData(){
    this.http.get('http://localhost:81/CO226/project/loginResult.json/data')
            .subscribe(result => this.data = result);
            console.dir(this.data);
  }
  onSubmit(){
    //this.firebaseService.createUser(value, this.avatarLink)
    
    //alert("hi")
    
    //this.resetFields();
    if(this.LoginForm.value.username == null || this.LoginForm.value.password == null){
    Swal.fire({
      title: 'Incomplete',
      text: 'please fill all fields required',
      icon: 'warning'
    })
  }else{
    this.dialog.closeAll();
    this.openSnackBar('Login as ', 'OK')
    
    this.submitted = true;
    
    console.log(this.LoginForm.value);
    
    var myFormdata = new FormData();
    myFormdata.append('myusername',this.LoginForm.value.username);
    myFormdata.append('myemail',this.LoginForm.value.password);
    this.router.navigate(['student',this.LoginForm.value.username]);
    return this.http.post('http://localhost:81/CO226/project/login.php/', myFormdata).subscribe((res: Response)=>{
     
    })
  }
  }
  get formAltaControls(): any {
    return this.LoginForm['controls'];
  } 

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      'username':[this.user.username,[
          Validators.required
      ]],
      'password':[this.user.pwd,[
        Validators.required
    ]]
    })
    this.http.get<any>('co226/project/loginResult.json').subscribe(result => this.data = result);
    console.log(this.data);
  //  this.getData();
   
    /*if(jsondata.data == "logged successully"){
      this.logged = true;
      console.log(this.logged);
    }*/
  }
  //get email() { return this.LoginForm.get('username'); }
  //get password() { return this.LoginForm.get('password'); }
}
