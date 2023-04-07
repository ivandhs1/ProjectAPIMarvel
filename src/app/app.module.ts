import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { ComicsComponent } from './Components/comics/comics.component';
import { CreatorsComponent } from './Components/creators/creators.component';
import { SeriesComponent } from './Components/series/series.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterComponent } from './Components/subComponents/character/character.component';
import { ComicComponent } from './Components/subComponents/comic/comic.component';
import { CreatorComponent } from './Components/subComponents/creator/creator.component';
import { SerieComponent } from './Components/subComponents/serie/serie.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    SeriesComponent,
    HomeComponent,
    CharacterComponent,
    ComicComponent,
    CreatorComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
