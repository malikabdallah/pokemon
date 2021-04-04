import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailsPokemonComponent } from './details/details-pokemon/details-pokemon.component';
import { ListePokemonComponent } from './listepokemon/liste-pokemon/liste-pokemon.component';
import { NotFoundComponent } from './notfound/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe, 
    DetailsPokemonComponent,
     ListePokemonComponent,
     NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
