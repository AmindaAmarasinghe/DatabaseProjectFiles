import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../model/student.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  student:Student = new Student();
  LoginForm : FormGroup;
  hide = true;
  submitted= false;
  constructor(private http:HttpClient, private formBuilder:FormBuilder, private _snackBar: MatSnackBar,public dialog: MatDialog) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit(){
    //this.firebaseService.createUser(value, this.avatarLink)
    
    //alert("hi")
    
    //this.resetFields();
    this.dialog.closeAll();
    this.openSnackBar('Login as ', 'OK')
    
    this.submitted = true;
    
    console.log(this.LoginForm.value);
    
    var myFormdata = new FormData();
    myFormdata.append('myusername',this.LoginForm.value.username);
    myFormdata.append('myemail',this.LoginForm.value.password);
    
    return this.http.post('http://localhost:81/CO226/project/save.php/', myFormdata).subscribe((res: Response)=>{
      
    })

  }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      'username':[this.student.name,[
          Validators.required
      ]],
      'password':[this.student.pwd,[
        Validators.required
    ]]
    })
  }
  //get email() { return this.LoginForm.get('username'); }
  //get password() { return this.LoginForm.get('password'); }
}
