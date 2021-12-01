import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerNewsComponent } from './components/hacker-news/hacker-news.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HackerNewsComponent},
  // { path: 'details/:objectNumber', component: DetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
