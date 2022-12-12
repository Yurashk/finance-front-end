import {Component, OnInit} from '@angular/core';
import {BorderService} from "../../../services/border.service";
import {User} from "../../../models/user";
import {Observable, tap} from "rxjs";
import {CreateNewBorderComponent} from "./create-new-border/create-new-border.component";
import {MatDialog} from "@angular/material/dialog";
import {PlatformLocation} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-borders-list',
  templateUrl: './borders-list.component.html',
  styleUrls: ['./borders-list.component.css']
})
export class BordersListComponent implements OnInit {
  userInfo?: User;
  userInfo2$?: Observable<User>;
  currentUserDidLoaded = false;

  constructor(private bordersService: BorderService, public dialog: MatDialog, private route: Router) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    // this.route.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {
    // this.userInfo2$=this.bordersService.currentUserChanged;
    this.bordersService.currentUserChanged.subscribe(res => {
      this.userInfo = res;
      this.currentUserDidLoaded = true
    });
  }

  createNewBorderModal() {
    const dialogRef = this.dialog.open(CreateNewBorderComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result ? this.createNewBorder(result) : '';
    });
  }

  createNewBorder(result: any) {
    this.currentUserDidLoaded = false;
    this.bordersService.createNewBorder(result, this.userInfo?.email).subscribe((res: any) => {
      this.bordersService.changeUserInfo(res);
    })
  }
}
