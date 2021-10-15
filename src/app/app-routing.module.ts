import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardUserComponent } from './card-user/card-user.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainComponent },
  { path: 'user', component: CardUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
