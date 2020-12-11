import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { Logger } from 'src/app/model/logger.model';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import Swal from 'sweetalert2';
import { JsonServiceService } from '../../services/json-service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data=[];
  i:number=0;
  teacher=[];
  student=[];
  guard:boolean=true;
  user:Logger = new Logger();
  guardForm : FormGroup;
  EventSubscription5:Subscription;
  result =[];
  selectedIndex: number=0;
  tab_color:string="primary";
  submitted= false;
  hide = true;
  constructor(private http: HttpClient,private sharedServiceGuard:SharedServiceService, private json: JsonServiceService,private formBuilder:FormBuilder, public sharedServiceAdmin: SharedServiceService, private _snackBar: MatSnackBar) { 
    this.sharedServiceAdmin.sendEvent();
    this.EventSubscription5=this.sharedServiceGuard.getEvent().subscribe(()=>{
      this.guard=false;
    })
    this.http.get('http://localhost:81/CO226/group13/coursesintro.php').subscribe(data=>{
      this.data.push(data);
      
      
    }, error=>console.error(error));
    this.http.get('http://localhost:81/CO226/group13/teacherdetails.php').subscribe(data=>{
      this.teacher.push(data);
      
      
    }, error=>console.error(error));
    this.http.get('http://localhost:81/CO226/group13/studentdetails.php').subscribe(data=>{
      this.student.push(data);
      
      
    }, error=>console.error(error));
    
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  onSubmit(){
    //this.firebaseService.createUser(value, this.avatarLink)
    
    //alert("hi")
    
    //this.resetFields();
    if(this.guardForm.value.username == null || this.guardForm.value.password == null){
    Swal.fire({
      title: 'Incomplete',
      text: 'please fill all fields required',
      icon: 'warning'
    })
  }else{
    
    
    this.submitted = true;
    //this.sharedService.sendEvent();
    console.log(this.guardForm.value);
    
    var myFormdata = new FormData();
    myFormdata.append('myusername',this.guardForm.value.username);
    myFormdata.append('mypwd',this.guardForm.value.password);
    
    this.http.post('http://localhost:81/CO226/group13/loginAdmin.php/', myFormdata).subscribe((res: Response)=>{
      this.result.push(res);
      console.dir(res);
      console.log(this.result[this.i]);
      if(this.result[this.i]=="success"){
        
        
        this.openSnackBar('Login as '+this.guardForm.value.username, 'OK')
        //this.logged = true;
        
        this.sharedServiceGuard.sendEvent();
        
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
    

    
  }
  }
  get formAltaControls(): any {
    return this.guardForm['controls'];
  } 
  ngOnInit(): void {
    this.sharedServiceAdmin.sendEvent();
    this.guard=true;
    this.guardForm = this.formBuilder.group({
      'username':[this.user.username,[
          Validators.required
      ]],
      'password':[this.user.pwd,[
        Validators.required
    ]]
    })
  }

}
