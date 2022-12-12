import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
	{
		path: 'main',
    canActivate: [ AuthGuard ],
		loadChildren: () => import('./modules/borders/borders.module').then(m => m.BordersModule)
	},
	{
		path: 'authorization',
		loadChildren: () => import('./modules/authorize/authorize.module').then(m => m.AuthorizeModule)
	},
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
