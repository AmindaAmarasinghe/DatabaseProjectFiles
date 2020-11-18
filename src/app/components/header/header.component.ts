import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
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
  ngOnInit(): void {
  }

}
