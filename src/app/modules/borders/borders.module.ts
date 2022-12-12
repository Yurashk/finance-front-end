import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {BordersRoutingModule} from './borders-routing.module';
import {BordersListComponent} from './borders-list/borders-list.component';
import {CreateBorderComponent} from './create-border/create-border.component';
import {BorderSettingsComponent} from './border-settings/border-settings.component';
import {MatButtonModule} from "@angular/material/button";
import {BorderComponent} from "./border.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { CreateNewBorderComponent } from './borders-list/create-new-border/create-new-border.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { BorderViewComponent } from './border-view/border-view.component';
import {MatChipsModule} from "@angular/material/chips";
import { SpendMoneyComponent } from './border-view/spend-money/spend-money.component';
import { AddNewMemberComponent } from './border-view/add-new-member/add-new-member.component';
import { SpendedMoneyListComponent } from './border-view/spended-money-list/spended-money-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatExpansionModule} from "@angular/material/expansion";
import { AddUserToBorderComponent } from './border-view/add-new-member/add-user-to-border/add-user-to-border.component';



@NgModule({
  declarations: [
    BorderComponent,
    BordersListComponent,
    CreateBorderComponent,
    BorderSettingsComponent,
    CreateNewBorderComponent,
    BorderViewComponent,
    SpendMoneyComponent,
    AddNewMemberComponent,
    SpendedMoneyListComponent,
    AddUserToBorderComponent
  ],
    imports: [
        CommonModule,
        BordersRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule
    ],
  providers:[DatePipe],
  exports:[
    BordersListComponent
  ]
})
export class BordersModule {
}
