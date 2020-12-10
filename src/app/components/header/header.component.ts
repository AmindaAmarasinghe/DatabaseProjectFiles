import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SharedServiceService} from 'src/app/services/shared-service.service';
import { Subscription } from 'rxjs';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notlogged: boolean =true;
  teach: boolean = false;
  EventSubscription1:Subscription;
  EventSubscription2:Subscription;
  EventSubscription3:Subscription;
  EventSubscription0:Subscription;
  EventSubscription4:Subscription;
  result: string = '';

  constructor(public dialog: MatDialog, public sharedService: SharedServiceService,private sharedServiceteach: SharedServiceService, private router : Router,private sharedServiceAdmin: SharedServiceService,private sharedService4: SharedServiceService,private sharedServiceNo: SharedServiceService) { 
    this.EventSubscription1=this.sharedService.getEvent().subscribe(()=>{
      this.notlogged = false;
      this.teach=false;
    })
    this.EventSubscription2=this.sharedServiceteach.getEvent().subscribe(()=>{
      this.teach = false;
    })
    this.EventSubscription3=this.sharedServiceAdmin.getEvent().subscribe(()=>{
      this.teach = false;
      this.notlogged = false;
    })
    this.EventSubscription4=this.sharedService4.getEvent().subscribe(()=>{
      this.teach = true;
      
    })
    this.EventSubscription0=this.sharedServiceNo.getEvent().subscribe(()=>{
      this.teach = true;
      this.notlogged=true;
      
    })
  }
  openDialog():void {
    
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '70%',
      height: '70%',
      hasBackdrop:true
      
    });
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose =false;
        //dialogConfig.autoFocus = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  }
  confirmDialog(): void {
    const message = `Are you sure you want to logout?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result){
        this.router.navigate(['']);
        this.notlogged = true;
      }
    });
  }
  ngOnInit(): void {
  }

}
