import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Logger } from '../../model/logger.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedServiceService} from 'src/app/services/shared-service.service';

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
  result =[];
  hide = true;
  data;
  submitted= false;
  i:number=0;
  constructor(private http:HttpClient,private sharedService: SharedServiceService, private router:Router, private formBuilder:FormBuilder, private _snackBar: MatSnackBar,public dialog: MatDialog) { 
    
    
   
    
        
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
    
    var myFormdata = new FormData();
    myFormdata.append('myusername',this.LoginForm.value.username);
    myFormdata.append('mypwd',this.LoginForm.value.password);
    
    this.http.post('http://localhost:81/CO226/group13/login.php/', myFormdata).subscribe((res: Response)=>{
      this.result.push(res);
      console.dir(res);
      console.log(this.result[this.i]);
      if(this.result[this.i]=="success"){
        this.router.navigate(['student',this.LoginForm.value.username]);
        this.dialog.closeAll();
        this.openSnackBar('Login as '+this.LoginForm.value.username, 'OK')
        //this.logged = true;
        
        this.submitted = true;
        this.sharedService.sendEvent();
        //console.log(this.LoginForm.value);
    
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
    // this.http.get('http://localhost:81/CO226/project/login.php').subscribe(data=>{
    //   this.result.push(data);
    //   console.log(data);
      
    // }, error=>console.error(error));
    //console.log(this.result.length);
    
    
  }
  }
  get formAltaControls(): any {
    return this.LoginForm['controls'];
  } 
  follow(){
    var myFormdata1 = new FormData();
    myFormdata1.append('myusername',this.LoginForm.value.username);
    return this.http.post('http://localhost:81/CO226/group13/mycources.php/', myFormdata1).subscribe((res: Response)=>{
     console.log(res);
    })
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
   

    //this.http.get<any>('co226/project/loginResult.json').subscribe(result => this.data = result);
    //console.log(this.data);
  //  this.getData();
   
    /*if(jsondata.data == "logged successully"){
      this.logged = true;
      console.log(this.logged);
    }*/
  }
  //get email() { return this.LoginForm.get('username'); }
  //get password() { return this.LoginForm.get('password'); }
}
