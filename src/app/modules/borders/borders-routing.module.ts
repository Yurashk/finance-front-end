import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BordersListComponent} from "./borders-list/borders-list.component";
import {BorderComponent} from "./border.component";
import {AuthGuard} from "../../helpers/auth.guard";
import {BorderViewComponent} from "./border-view/border-view.component";

const routes: Routes = [
  {
    path: 'all-borders',
    component: BorderComponent,

    children:[
      {
        path:'list',
        component:BordersListComponent
      },
      {
        path:'border/:id',
        component:BorderViewComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      }
    ]
  },{
    path: '',
    redirectTo: 'all-borders',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'all-borders',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BordersRoutingModule { }
