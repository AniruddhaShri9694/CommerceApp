import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogalert',
  templateUrl: './dialogalert.component.html',
  styleUrls: ['./dialogalert.component.css'],
})
export class DialogalertComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogalertComponent>
  ) {
    dialogRef.disableClose = true;
  }

  errorstatus: boolean | any;
  Message: String | any;

  ngOnInit() {
    try {
      this.Message = this.data.Message;
      this.errorstatus = this.data.errorstatus;
    } catch (e) {
      //this.Message =  this.data.Message
    }
  }

  test() {
    alert('alert on dialog worked !!!');
  }
}
