import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { ComicsComponent } from './Components/comics/comics.component';
import { SeriesComponent } from './Components/series/series.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
