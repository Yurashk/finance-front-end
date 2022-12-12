import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUserToBorderComponent} from "./add-user-to-border/add-user-to-border.component";
import {Border} from "../../../../models/border";
import {BorderService} from "../../../../services/border.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {
  @Input() border: Border | undefined;

  constructor(private borderService: BorderService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAddUser(): void {
    const dialogRef = this.dialog.open(AddUserToBorderComponent, {
      width: '300px',
      data: {users: this.border?.users, borderOwner: this.border?.ownerEmail},
    });

    dialogRef.afterClosed().subscribe(result => {
      result ? this.borderService.addUserToBoard(result.email, this.border?._id).subscribe(res => {
        this.borderService.changeBorderInfo(res);
        console.log(res)
      }) : console.log('The dialog was closed');
    });
  }

  openChangeGoal() {

  }
}
