import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';

const routes: Routes = [

  { path: 'users', component: UsersComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: ListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
