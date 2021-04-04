import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../../mock-pokemon';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styleUrls: ['./liste-pokemon.component.css']
})
export class ListePokemonComponent implements OnInit {


  constructor(private router: Router) { }



    ngOnInit(): void {
      this.pokemons=POKEMONS;
    }
    title = 'pokemon';
    public pokemons:Pokemon[];
    public value:string='';
    public age=20;
  
    selectPokemon(pokemon:Pokemon){
      alert("click sur "+pokemon.name);
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
    }
  
    onClick(){
      alert("vous avez cliquer ");
    }
    onKey(event:any){
      this.value="bonjour "+event.target.value;
    }
  
    onKeyValue(valeur:string){
      this.value="Bonjour "+valeur;
    }

}
