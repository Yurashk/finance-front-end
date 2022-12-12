import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BorderSpendMoney} from "../../../../models/border";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {trigger} from "@angular/animations";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-spended-money-list',
  templateUrl: './spended-money-list.component.html',
  styleUrls: ['./spended-money-list.component.css']
})
export class SpendedMoneyListComponent implements OnInit {
  @Input() spentMoney: BorderSpendMoney[] | undefined;
  // dataSource: MatTableDataSource<BorderSpendMoney> ;

  // displayedColumns: string[] = ['date',
  //   'who',
  //   'forWhat',
  //   'price',
  //   ];

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  // announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   console.log('trigger()')
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
}
