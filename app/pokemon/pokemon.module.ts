import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListePokemonComponent } from "./listepokemon/liste-pokemon/liste-pokemon.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailsPokemonComponent } from "./details/details-pokemon/details-pokemon.component";
import { PokemonRoutingModule } from "./pokemons-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListePokemonComponent,
        DetailsPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: []
})
export class PokemonsModule { }