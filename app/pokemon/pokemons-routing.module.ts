import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './details/details-pokemon/details-pokemon.component';
import { ListePokemonComponent } from './listepokemon/liste-pokemon/liste-pokemon.component';
  
  
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListePokemonComponent },
    { path: 'pokemon/:id', component: DetailsPokemonComponent }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }