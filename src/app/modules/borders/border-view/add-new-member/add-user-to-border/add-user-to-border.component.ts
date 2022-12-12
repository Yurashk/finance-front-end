import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-user-to-border',
  templateUrl: './add-user-to-border.component.html',
  styleUrls: ['./add-user-to-border.component.css']
})
export class AddUserToBorderComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required,Validators.email]),
  });
  constructor(public dialogRef: MatDialogRef<AddUserToBorderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
