import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './notfound/not-found/not-found.component';
import { PokemonsModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
     NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonsModule, // L'odre de chargement des modules est très important
    AppRoutingModule // pour l'ordre de déclaration des routes !

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
