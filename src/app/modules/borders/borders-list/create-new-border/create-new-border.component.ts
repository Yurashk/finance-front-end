import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BorderService} from "../../../../services/border.service";
import {User} from "../../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-new-border',
  templateUrl: './create-new-border.component.html',
  styleUrls: ['./create-new-border.component.css']
})
export class CreateNewBorderComponent implements OnInit {
  currentUser?:User;
  userDidLoaded=false;
  myForm: FormGroup = new FormGroup({
    "userName": new FormControl("", [Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
    "goal": new FormControl(0, [Validators.required,Validators.min(0),Validators.pattern("^[0-9]+$")]),
  });
  name:string=''
  constructor(
    public dialogRef: MatDialogRef<CreateNewBorderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
