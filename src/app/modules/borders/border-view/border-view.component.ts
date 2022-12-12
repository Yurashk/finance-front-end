import {Component, OnInit} from '@angular/core';
import {BorderService} from "../../../services/border.service";
import {ActivatedRoute} from "@angular/router";
import {Border, BorderSpendMoney} from "../../../models/border";
import {tap} from "rxjs";
import {DatePipe} from "@angular/common";
import {User} from "../../../models/user";

@Component({
  selector: 'app-border-view',
  templateUrl: './border-view.component.html',
  styleUrls: ['./border-view.component.css']
})
export class BorderViewComponent implements OnInit {

  boarderDidLoaded = false;
  border?: Border;
  user?:User;
  currentBorderID = '';
  currentUserEmail = '';
  currentSpentMoney=0;
  constructor(private borderService: BorderService, private route: ActivatedRoute, public datepipe: DatePipe) {
    this.borderService.currentUser.subscribe(res => {
      this.currentUserEmail = res.email;
      this.user = res;
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentBorderID = params['id'];
      this.getBordItems(params['id'])
    });
    this.borderService.currentBorderChanged.subscribe(res=>{
      this.border=res;
    })
  }

  getBordItems(id: string) {
    this.borderService.getBorderById(id).pipe(tap(() => this.boarderDidLoaded = true)).subscribe((res: Border) => {
      this.border = res;
      this.borderService.changeBorderInfo(res);
      res.spendMoney.forEach(value=>this.currentSpentMoney=this.currentSpentMoney+(+value.price))
    })
  }

  spendValue(event: BorderSpendMoney) {
    event.who = this.currentUserEmail;
    this.borderService.spendMoney(this.currentBorderID, event).subscribe((res: Border) => {
      this.border = res;
      this.currentSpentMoney=0;
      res.spendMoney.forEach(value=>this.currentSpentMoney=this.currentSpentMoney+(+value.price))
    })
  }
}
