import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'
import { HomeComponent } from './components/home/home.component'
import { ClarityModule } from '@clr/angular'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpecificPokemonComponent } from './components/specific-pokemon/specific-pokemon.component'

@NgModule({
  declarations: [AppComponent, PokemonListComponent, HomeComponent, SpecificPokemonComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
