import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TimerComponent} from './timer/timer.component';
import {FooterComponent} from './footer/footer.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'timer', component:TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
