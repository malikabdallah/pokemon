import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { POKEMONS } from '../../mock-pokemon';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css'],
  providers:[PokemonService]
})
export class DetailsPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router,
    private pokemonService:PokemonService) {}

  ngOnInit(): void {

      let id = +this.route.snapshot.paramMap.get('id');
      this.pokemon=this.pokemonService.getPokemon(id);
  }

  goBack(): void {
      this.router.navigate(['/pokemons']);
  }

}
