import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPokemonComponent } from './details/details-pokemon/details-pokemon.component';
import { ListePokemonComponent } from './listepokemon/liste-pokemon/liste-pokemon.component';
import { NotFoundComponent } from './notfound/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'pokemons', component: ListePokemonComponent },
  { path: 'pokemon/:id', component: DetailsPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
