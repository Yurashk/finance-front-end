import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BorderSpendMoney} from "../../../../models/border";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-spend-money',
  templateUrl: './spend-money.component.html',
  styleUrls: ['./spend-money.component.css']
})
export class SpendMoneyComponent implements OnInit {
  @Output() newMoneySpend = new EventEmitter<BorderSpendMoney>();
  forWhat = ['Продукти', "Алкоголь", "Розваги", "Авто", "Дім", "Інше"];
  myForm: FormGroup = new FormGroup({
    "price": new FormControl("", [Validators.required, Validators.min(0), Validators.pattern("^[0-9]+$")]),
    "forWhat": new FormControl("Продукти", Validators.required),
    "date": new FormControl(""),
    "who": new FormControl(""),
  });

  constructor(public datepipe: DatePipe) {

  }

  ngOnInit(): void {
    let date = new Date();
    this.myForm.controls['date'].patchValue(this.datepipe.transform(date, 'YY:MM:dd (HH:mm)'))
  }

  spendMoney() {
    console.log(this.myForm.value);
    this.newMoneySpend.emit(this.myForm.value);
    this.myForm.controls['price'].reset()
  }
}
