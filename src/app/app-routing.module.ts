import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-users', pathMatch: 'full' },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'edit-users', component: EditUsersComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
