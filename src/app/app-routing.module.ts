import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';

const routes: Routes = [
  { path: "", component: UserListPageComponent },
  { path: "users/:userId/images", component: UserDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
